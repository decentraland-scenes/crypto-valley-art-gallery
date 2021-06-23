import * as utils from "@dcl/ecs-scene-utils"

export const videoData = [
  {
    frame: new GLTFShape("models/vidFrame1280x720.glb"),
    frameSize: new Vector3(9.6, 5.4, 1),
    still: new Texture("videos/twinmill_thumb.jpg"),
    video: new VideoClip("videos/twinmill.mp4"),
    transform: new Transform({ position: new Vector3(79, 4.5, 25), scale: new Vector3(0.9, 0.9, 1), rotation: Quaternion.Euler(0, 0, 0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(20, 8, 8), new Vector3(0, 0, -5)),
    link: "https://nft.mattelcreations.com/twin-mill"
  },
  {
    frame: new GLTFShape("models/vidFrame1280x720.glb"),
    frameSize: new Vector3(9.6, 5.4, 1),
    still: new Texture("videos/boneshaker_thumb.jpg"),
    video: new VideoClip("videos/boneshaker.mp4"),
    transform: new Transform({ position: new Vector3(79, 4.5, 25.7), scale: new Vector3(0.9, 0.9, 1), rotation: Quaternion.Euler(0, 180, 0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(20, 8, 8), new Vector3(0, 0, 5)),
    link: "https://nft.mattelcreations.com/bone-shaker"
  },
  {
    frame: new GLTFShape("models/vidFrame1280x720.glb"),
    frameSize: new Vector3(9.6, 5.4, 1),
    still: new Texture("videos/deora_thumb.jpg"),
    video: new VideoClip("videos/deora.mp4"),
    transform: new Transform({ position: new Vector3(103.68, 3.3, 19.25), scale: new Vector3(0.6, 0.6, 0.5), rotation: Quaternion.Euler(0, 90, 0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(8, 8, 12), new Vector3(-4, 0, 0)),
    link: "https://nft.mattelcreations.com/deora"
  }
]
