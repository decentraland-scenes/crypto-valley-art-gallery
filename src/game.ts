import resources from "./resources"
import { hud } from "./builderhud/BuilderHUD"
import * as utils from '@dcl/ecs-scene-utils'
import { VideoFrame } from "./videoFrame"
import { Dispenser } from './dispenser'

export let sceneMessageBus = new MessageBus();


const building = new Entity()
building.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
building.addComponent(resources.models.building)
engine.addEntity(building)

// Music
const streamSource = new Entity()
streamSource.addComponent(
  new AudioStream("https://streaming.radionomy.com/JamendoLounge")
)
streamSource.getComponent(AudioStream).volume = 0.075
engine.addEntity(streamSource)

// Pictures
for(let i=0;i<resources.nfts.length;i++){

  let imageTexture = new Texture(resources.nfts[i].image)

  let pictureMat = new Material()
  pictureMat.albedoTexture = imageTexture
  pictureMat.specularIntensity = 0
  pictureMat.metallic = 0
  pictureMat.roughness = 1
  pictureMat.emissiveTexture = imageTexture
  pictureMat.emissiveIntensity = 0.5
  pictureMat.emissiveColor = Color3.White()

  const nftPlane = new Entity(resources.nfts[i].name);
  nftPlane.addComponent(new PlaneShape())
  nftPlane.addComponentOrReplace(new Transform(resources.nfts[i].transform))
  nftPlane.addComponent(new OnPointerDown(()=>{
    openExternalURL(resources.nfts[i].link)
  },
  {distance: 15}
  ))

  nftPlane.addComponent(pictureMat)
  engine.addEntity(nftPlane);
  hud.attachToEntity(nftPlane)

  let frame = new Entity()
  frame.addComponent(new Transform({
    position: new Vector3(0,0, 0.0),
    scale: new Vector3(1.2, 1.2, 1.0)

  }))
  frame.addComponent(new GLTFShape('models/frame.glb'))
  frame.setParent(nftPlane)

}


for (let i = 0; i < resources.videonfts.length; i++) {
  const videoFrame = new VideoFrame(
    resources.videonfts[i].frame,
    resources.videonfts[i].frameSize,
    resources.videonfts[i].still,
    resources.videonfts[i].thumbNail,
    resources.videonfts[i].video,
    resources.videonfts[i].transform,
    resources.videonfts[i].trigger,
    resources.videonfts[i].title!,
    resources.videonfts[i].artist!,
    resources.videonfts[i].link,
  )
}


let POAPBooth = new Dispenser(
  {
    position: new Vector3(71.5,0,24),
    rotation: Quaternion.Euler(0, 180, 0),
  },
  "poapapi.dcl.guru",
  "22169"
);

sceneMessageBus.on("activatePoap", () => {
  POAPBooth.activate();
});
hud.attachToEntity(POAPBooth)

