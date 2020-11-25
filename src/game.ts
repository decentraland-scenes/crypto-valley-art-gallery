import resources from "./resources"
import { loadPictures } from "./modules/nftBuilder"

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
loadPictures(building)
