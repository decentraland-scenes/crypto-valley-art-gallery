import * as utils from "@dcl/ecs-scene-utils"

export class VideoFrame extends Entity {
  public videoTexture: VideoTexture

  constructor(
    model: GLTFShape,
    frameSize: Vector3,
    public texture: Texture,
    clip: VideoClip,
    transform: Transform,
    trigger: utils.TriggerBoxShape,
    link?: string
  ) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(clip)
    this.addComponent(transform)

    if (link) {
      this.addComponent(
        new OnPointerDown(
          () => {
            openExternalURL(link)
          },
          {
            button: ActionButton.ANY,
            showFeedback: true,
            hoverText: "View on Mattel Creations",
          }
        )
      )
    }

    //Create texture
    const video = clip
    this.videoTexture = new VideoTexture(video)
    this.videoTexture.loop = true

    const videoMaterial = new Material()
    videoMaterial.roughness = 1.0
    videoMaterial.albedoTexture = texture

    const videoPlane = new Entity()
    videoPlane.addComponent(new PlaneShape())
    videoPlane.addComponent(
      new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 180, 0),
        scale: frameSize,
      })
    )
    videoPlane.addComponent(videoMaterial)
    videoPlane.setParent(this)

    this.addComponent(
      new utils.TriggerComponent(trigger, {
        onCameraEnter: () => {
          videoMaterial.albedoTexture = this.videoTexture
          videoMaterial.emissiveTexture = this.videoTexture
          videoMaterial.emissiveIntensity = 0.8
          videoMaterial.emissiveColor = Color3.White()
          this.videoTexture.play()
        },
        onCameraExit: () => {
          videoMaterial.albedoTexture = texture
          videoMaterial.emissiveColor = Color3.Black()
          this.videoTexture.reset()
        },
        enableDebug: false,
      })
    )
  }
}
