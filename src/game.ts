import resources from "./resources"
import { hud } from "./builderhud/BuilderHUD"
import { VideoFrame } from "./videoFrame"
import * as ui from '@dcl/ui-scene-utils'



const building = new Entity()
building.addComponent(new GLTFShape('models/building.glb'))
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

  const nftPlane = new Entity(resources.nfts[i].title);
  nftPlane.addComponent(new PlaneShape())
  nftPlane.addComponentOrReplace(new Transform(resources.nfts[i].transform))
  nftPlane.addComponent(new OnPointerDown(()=>{
    PictureInfo.show()
  },
  { hoverText: "Click for info",
    distance: 15}
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

  let PictureInfo = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 680, 550, true)
  PictureInfo.addText(resources.nfts[i].artist, 0, 245, Color4.White(), 30)
  PictureInfo.addText(resources.nfts[i].origin, 0, 225, Color4.White(), 15)
  PictureInfo.addText(resources.nfts[i].title, 0, -140, Color4.White(), 30)
  PictureInfo.addText(resources.nfts[i].info, 0, -230, Color4.White(),13)

  let PictureThumb = PictureInfo.addIcon(
    resources.nfts[i].thumbnail,
    0,40,300,300

  )


  let button1 = PictureInfo.addButton(
  'Visit',
  90,
  -210,
  () => {
  log('Yes')
  PictureInfo.hide()
  if(resources.nfts[i].link){
  openExternalURL(resources.nfts[i].link)
  }
  },
  ui.ButtonStyles.RED
  )
    
  let button2 = PictureInfo.addButton(
  'Close',
  -90,
  -210,
  () => {
  log('Bezarja')
  PictureInfo.hide()
  },
  ui.ButtonStyles.DARK
  )







}



 // Videos
for (let i = 0; i < resources.videonfts.length; i++) {
  const videoFrame = new VideoFrame(
    resources.videonfts[i].frame,
    resources.videonfts[i].frameSize,
    resources.videonfts[i].still,
    resources.videonfts[i].thumbnail,
    resources.videonfts[i].video,
    resources.videonfts[i].transform,
    resources.videonfts[i].trigger,
    resources.videonfts[i].title!,
    resources.videonfts[i].artist!,
    resources.videonfts[i].link,
  )

  let videoInfo = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, 680, 550, true)
  videoInfo.addText(resources.videonfts[i].artist, 0, 245, Color4.White(), 30)
  videoInfo.addText(resources.videonfts[i].origin, 0, 225, Color4.White(), 15)
  videoInfo.addText(resources.videonfts[i].title, 0, -140, Color4.White(), 30)
  videoInfo.addText(resources.videonfts[i].info, 0, -230, Color4.White(),13)

  let PictureThumb = videoInfo.addIcon(
    resources.videonfts[i].thumbnail,
    0,40,300,300

  )

  let button1 = videoInfo.addButton(
    'Visit',
    90,
    -210,
    () => {
    log('Yes')
    videoInfo.hide()
    if(resources.videonfts[i].link){
    openExternalURL(resources.videonfts[i].link)
    }
    },
    ui.ButtonStyles.RED
    )
      
    let button2 = videoInfo.addButton(
    'Close',
    -90,
    -210,
    () => {
    log('Bezarja')
    videoInfo.hide()
    },
    ui.ButtonStyles.DARK
    )


  videoFrame.addComponent(new OnPointerDown(()=>{
    videoInfo.show()
  },
  { hoverText: "Click for info",
    distance: 15}
  ))
}