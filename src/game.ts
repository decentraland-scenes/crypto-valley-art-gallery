import resources from "./resources"
import { hud } from "./builderhud/BuilderHUD"
import * as utils from '@dcl/ecs-scene-utils'

const building = new Entity()
building.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
building.addComponent(resources.models.building)
engine.addEntity(building)

const prize = new Entity('prize')
prize.addComponent(
  new Transform({
    position: new Vector3(54.3,0.1,21),
  })
)
prize.addComponent(resources.models.prize)
hud.attachToEntity(prize)
engine.addEntity(prize)

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

import {Dispenser} from './poap/poap'

let eventTime = 1641427200
let timer = new Entity()
engine.addEntity(timer)
timer.addComponent(new utils.Interval(1000,()=>{
  let now = Math.floor(Date.now()/1000)
  if(now >= eventTime){
    let poapBooth = new Dispenser( {position: new Vector3(114,0.1,14), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)} , "19960");
  //hud.attachToEntity(poapBooth)
  engine.removeEntity(timer)
  }
}))
