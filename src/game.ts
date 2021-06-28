import { videoData } from "./modules/videoData"
import { VideoFrame } from "./modules/videoFrame"

// Input
// const input = Input.instance

// input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, true, (event) => {
//   log("Hit Point: ", event.hit.hitPoint)
// })

// Building
const building = new Entity()
building.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
building.addComponent(new GLTFShape("models/building.glb"))
engine.addEntity(building)

// Banners
const banners = new Entity()
banners.addComponent(new GLTFShape("models/banners.glb"))
engine.addEntity(banners)

const hotWheelNFTBanner = new Entity()
hotWheelNFTBanner.addComponent(new GLTFShape("models/hotWheelsNFTBanner.glb"))
engine.addEntity(hotWheelNFTBanner)

const liveAuctionSigns = new Entity()
liveAuctionSigns.addComponent(new GLTFShape("models/liveAuctionSigns.glb"))
engine.addEntity(liveAuctionSigns)

// Music
const streamSource = new Entity()
streamSource.addComponent(
  new AudioStream("https://streaming.radionomy.com/JamendoLounge")
)
streamSource.getComponent(AudioStream).volume = 0.075
engine.addEntity(streamSource)

// Stills
const stills = new Entity()
stills.addComponent(new GLTFShape("models/stillArtworks.glb"))
engine.addEntity(stills)

// Videos
for (let i = 0; i < videoData.length; i++) {
  const videoFrame = new VideoFrame(
    videoData[i].frame,
    videoData[i].frameSize,
    videoData[i].still,
    videoData[i].video,
    videoData[i].transform,
    videoData[i].trigger,
    videoData[i].link
  )
}