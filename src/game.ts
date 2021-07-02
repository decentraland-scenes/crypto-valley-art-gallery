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

const waveVideoClip = new VideoClip("https://player.vimeo.com/external/570332974.hd.mp4?s=a99ad0af8bcc458c91a7988b53da159615af8ded&profile_id=175")
const waveVideoTexture = new VideoTexture(waveVideoClip)
const waveMaterial = new BasicMaterial()
waveMaterial.texture = waveVideoTexture

let waveScreen = new Entity()
waveScreen.addComponent(new PlaneShape())
waveScreen.addComponent(new Transform({position: new Vector3(8,0,8), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(10,10,10)}))
waveScreen.addComponent(waveMaterial)
waveVideoTexture.play()
waveVideoTexture.loop = true

engine.addEntity(waveScreen)