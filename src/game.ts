import resources from "./resources"
import { loadPictures } from "./modules/nftBuilder"

const building = new Entity()
const transform =   new Transform({
  position: new Vector3(0, 0, 0),
})
building.addComponent(transform)
building.addComponent(resources.models.building)
engine.addEntity(building)

const liquidFloor = new Entity()
liquidFloor.addComponent(new Transform({position: new Vector3(0,0.02,0)}))
liquidFloor.addComponent(new GLTFShape('models/LiquidFloor.glb'))
engine.addEntity(liquidFloor)

const liquidFloorInverse = new Entity()
liquidFloorInverse.addComponent(new Transform({position: new Vector3(130,0,61), rotation: Quaternion.Euler(0,180,0)}))
liquidFloorInverse.addComponent(new GLTFShape('models/LiquidFloor.glb'))
//engine.addEntity(liquidFloorInverse)

// Music
const streamSource = new Entity()
streamSource.addComponent(
  new AudioStream("https://streaming.radionomy.com/JamendoLounge")
)
streamSource.getComponent(AudioStream).volume = 0.075
engine.addEntity(streamSource)

// Pictures
loadPictures(building)
