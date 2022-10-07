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


import { neat } from "./neat/neat";
neat.init(
    true, //display locally for admin
    false, //hide avatars around the neat
    false, //auto rotation
    3, //click distance
    {position: new Vector3(113, 0, 15), rotation: Quaternion.Euler(0,90,0)}, //neat position in scene
    'xverse_5.glb', //dispenser type
    null //if you have the builder hud, pass hud, if not, pass null
    )

import { ClaimDispenser } from "./claimDispenser";
new ClaimDispenser({position: new Vector3(45,0,29), rotation: Quaternion.Euler(0,120,0), scale: new Vector3(1,1,1)})