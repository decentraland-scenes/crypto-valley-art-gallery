import resources from "./resources"
//import { loadPictures } from "./modules/nftBuilder"

const building = new Entity()
const transform =   new Transform({
  position: new Vector3(0, 0, 0),
})
building.addComponent(transform)
building.addComponent(resources.models.building)
engine.addEntity(building)

//Floor
const liquidFloor = new Entity()
liquidFloor.addComponent(new Transform({position: new Vector3(0,0.02,0)}))
liquidFloor.addComponent(new GLTFShape('models/LiquidFloor.glb'))
engine.addEntity(liquidFloor)

//Screen

const screenHolder = new Entity
screenHolder.setParent(building)
screenHolder.addComponent(new Transform({position: new Vector3(48,12,21)}))
screenHolder.addComponent(new GLTFShape('models/ScreenHolder.glb'))
let animator = new Animator()
screenHolder.addComponent(animator)
let clipShow = new AnimationState('Show')
let clipHide = new AnimationState('Hide')
let clipStatic = new AnimationState('Static')
let clipHidden = new AnimationState('Hidden')
animator.addClip(clipShow)
animator.addClip(clipHide)
animator.addClip(clipStatic)
animator.addClip(clipHidden)
clipHidden.play()
clipHidden.looping = true 
engine.addEntity(screenHolder)


//NFTs
const polaroid = new Entity()
polaroid.addComponent(new GLTFShape('models/LiquidSummer_NFT.glb'))
polaroid.setParent(building)
polaroid.addComponent(new Transform({position: new Vector3(78.97,5.1,25.34), scale: new Vector3(1.2,1.2,1.2)}))
engine.addEntity(polaroid)
polaroid.addComponentOrReplace(new OnPointerDown(()=>{
  getPopup("nft1")
}))

const oneSatoshi = new Entity()
oneSatoshi.addComponent(new GLTFShape('models/Satoshi_NFT.glb'))
oneSatoshi.setParent(building)
oneSatoshi.addComponent(new Transform({position: new Vector3(103.7,3.9,19)}))
engine.addEntity(oneSatoshi)
oneSatoshi.addComponentOrReplace(new OnPointerDown(()=>{
  getPopup("nft1")
}))

const girl2021 = new Entity()
girl2021.addComponent(new GLTFShape('models/2021_NFT.glb'))
girl2021.setParent(building)
girl2021.addComponent(new Transform({position: new Vector3(109,4.1,33.73)}))
engine.addEntity(girl2021)
girl2021.addComponentOrReplace(new OnPointerDown(()=>{
  getPopup("nft1")
}))

const beach = new Entity()
beach.addComponent(new GLTFShape('models/Beach_NFT.glb'))
beach.setParent(building)
beach.addComponent(new Transform({position: new Vector3(99.67,4.1,33.73)}))
engine.addEntity(beach)
beach.addComponentOrReplace(new OnPointerDown(()=>{
  getPopup("nft1")
}))

const mosaic = new Entity()
mosaic.addComponent(new GLTFShape('models/Mosaic_NFT.glb'))
mosaic.setParent(building)
mosaic.addComponent(new Transform({position: new Vector3(103.2,4.1,4.16)}))
engine.addEntity(mosaic)
mosaic.addComponentOrReplace(new OnPointerDown(()=>{
  getPopup("nft1")
}))

const puzzled = new Entity()
puzzled.addComponent(new GLTFShape('models/Puzzled_NFT.glb'))
puzzled.setParent(building)
puzzled.addComponent(new Transform({position: new Vector3(55.43, 4.1, 4.16)}))
engine.addEntity(puzzled)
puzzled.addComponentOrReplace(new OnPointerDown(()=>{
  getPopup("nft1")
}))

const redacted = new Entity()
redacted.addComponent(new GLTFShape('models/Redacted_NFT.glb'))
redacted.setParent(building)
redacted.addComponent(new Transform({position: new Vector3(52.987,4.1,33.73)}))
engine.addEntity(redacted)
redacted.addComponentOrReplace(new OnPointerDown(()=>{
  getPopup("nft1")
}))

//Slime test 
const pinkSlime = new GLTFShape('models/Slime_01.glb')
const Slime1 = new Entity()
Slime1.setParent(building)
Slime1.addComponent(new Transform({position: new Vector3(4,0.2,12), rotation: Quaternion.Euler(0,90,0)}))
Slime1.addComponent(pinkSlime)
engine.addEntity(Slime1)

const Slime2 = new Entity()
Slime2.setParent(building)
Slime2.addComponent(new Transform({position: new Vector3(4,0.2,31), rotation: Quaternion.Euler(0,90,0)}))
Slime2.addComponent(pinkSlime)
engine.addEntity(Slime2) 

const Slime3 = new Entity()
Slime3.setParent(building)
Slime3.addComponent(new Transform({position: new Vector3(4,0.2,50), rotation: Quaternion.Euler(0,90,0)}))
Slime3.addComponent(pinkSlime)
engine.addEntity(Slime3)

const Slime4 = new Entity()
Slime4.setParent(building)
Slime4.addComponent(new Transform({position: new Vector3(14,0.2,60), rotation: Quaternion.Euler(0,0,0)}))
Slime4.addComponent(pinkSlime)
engine.addEntity(Slime4)

const Slime5 = new Entity()
Slime5.setParent(building)
Slime5.addComponent(new Transform({position: new Vector3(39,0.2,60), rotation: Quaternion.Euler(0,0,0)}))
Slime5.addComponent(pinkSlime)
engine.addEntity(Slime5)

const Slime6 = new Entity()
Slime6.setParent(building)
Slime6.addComponent(new Transform({position: new Vector3(64,0.2,60), rotation: Quaternion.Euler(0,0,0)}))
Slime6.addComponent(pinkSlime)
engine.addEntity(Slime6)

const Slime7 = new Entity()
Slime7.setParent(building)
Slime7.addComponent(new Transform({position: new Vector3(88.5,0.2,60), rotation: Quaternion.Euler(0,0,0)}))
Slime7.addComponent(pinkSlime)
engine.addEntity(Slime7)

const Slime8 = new Entity()
Slime8.setParent(building)
Slime8.addComponent(new Transform({position: new Vector3(113,0.2,60), rotation: Quaternion.Euler(0,0,0)}))
Slime8.addComponent(pinkSlime)
engine.addEntity(Slime8)

const Slime9 = new Entity()
Slime9.setParent(building)
Slime9.addComponent(new Transform({position: new Vector3(124,0.2,49), rotation: Quaternion.Euler(0,90,0)}))
Slime9.addComponent(pinkSlime)
engine.addEntity(Slime9)

const Slime10 = new Entity()
Slime10.setParent(building)
Slime10.addComponent(new Transform({position: new Vector3(121,0.2,3.5), rotation: Quaternion.Euler(0,0,0)}))
Slime10.addComponent(pinkSlime)
engine.addEntity(Slime10)

// Yellow Slime
const yellowSlime = new GLTFShape('models/Slime_Yellow.glb')
const SlimeY1 = new Entity()
SlimeY1.setParent(building)
SlimeY1.addComponent(new Transform({position: new Vector3(27.5,0.2,12), rotation: Quaternion.Euler(0,90,0)}))
SlimeY1.addComponent(yellowSlime)
engine.addEntity(SlimeY1)

const SlimeY2 = new Entity()
SlimeY2.setParent(building)
SlimeY2.addComponent(new Transform({position: new Vector3(27.5,0.2,31), rotation: Quaternion.Euler(0,90,0)}))
SlimeY2.addComponent(yellowSlime)
engine.addEntity(SlimeY2)

const SlimeY3 = new Entity()
SlimeY3.setParent(building)
SlimeY3.addComponent(new Transform({position: new Vector3(53,0.2,37.5), rotation: Quaternion.Euler(0,0,0)}))
SlimeY3.addComponent(yellowSlime)
engine.addEntity(SlimeY3)

const SlimeY4 = new Entity()
SlimeY4.setParent(building)
SlimeY4.addComponent(new Transform({position: new Vector3(105,0.2,37.5), rotation: Quaternion.Euler(0,0,0)}))
SlimeY4.addComponent(yellowSlime)
engine.addEntity(SlimeY4)

// Orange Slime
const orangeSlime = new GLTFShape('models/Slime_Orange.glb')
const SlimeO1 = new Entity()
SlimeO1.setParent(building)
SlimeO1.addComponent(new Transform({position: new Vector3(16.5,0.2,12), rotation: Quaternion.Euler(0,90,0)}))
SlimeO1.addComponent(orangeSlime)
engine.addEntity(SlimeO1)

const SlimeO2 = new Entity()
SlimeO2.setParent(building)
SlimeO2.addComponent(new Transform({position: new Vector3(16.5,0.2,31), rotation: Quaternion.Euler(0,90,0)}))
SlimeO2.addComponent(orangeSlime)
engine.addEntity(SlimeO2)

const SlimeO3 = new Entity()
SlimeO3.setParent(building)
SlimeO3.addComponent(new Transform({position: new Vector3(56.5,0.2,48.5), rotation: Quaternion.Euler(0,0,0)}))
SlimeO3.addComponent(orangeSlime)
engine.addEntity(SlimeO3)

const SlimeO4 = new Entity()
SlimeO4.setParent(building)
SlimeO4.addComponent(new Transform({position: new Vector3(101,0.2,48.5), rotation: Quaternion.Euler(0,180,0)}))
SlimeO4.addComponent(orangeSlime)
engine.addEntity(SlimeO4)

const SlimeO5 = new Entity()
SlimeO5.setParent(building)
SlimeO5.addComponent(new Transform({position: new Vector3(37,0.2,3.5), rotation: Quaternion.Euler(0,180,0)}))
SlimeO5.addComponent(orangeSlime)
engine.addEntity(SlimeO5)

// Blue Slime
const BlueSlime = new GLTFShape('models/Slime_Blue.glb')
const SlimeB1 = new Entity()
SlimeB1.setParent(building)
SlimeB1.addComponent(new Transform({position: new Vector3(13,0.2,46), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(3,3,3)}))
SlimeB1.addComponent(BlueSlime)
engine.addEntity(SlimeB1)

const SlimeB2 = new Entity()
SlimeB2.setParent(building)
SlimeB2.addComponent(new Transform({position: new Vector3(61,0.2,48.5), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(2,2,2)}))
SlimeB2.addComponent(BlueSlime)
engine.addEntity(SlimeB2)

const SlimeB3 = new Entity()
SlimeB3.setParent(building)
SlimeB3.addComponent(new Transform({position: new Vector3(96.5,0.2,48.5), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(2,2,2)}))
SlimeB3.addComponent(BlueSlime)
engine.addEntity(SlimeB3)

const SlimeB4 = new Entity()
SlimeB4.setParent(building)
SlimeB4.addComponent(new Transform({position: new Vector3(74.5,0,9.5), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(1.5,1.5,1.5)}))
SlimeB4.addComponent(BlueSlime)
engine.addEntity(SlimeB4)

const SlimeB5 = new Entity()
SlimeB5.setParent(building)
SlimeB5.addComponent(new Transform({position: new Vector3(83.5,0,9.5), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1.5,1.5,1.5)}))
SlimeB5.addComponent(BlueSlime)
engine.addEntity(SlimeB5)

// Music
const streamSource = new Entity()
streamSource.addComponent(
  new AudioStream("https://streaming.radionomy.com/JamendoLounge")
)
streamSource.getComponent(AudioStream).volume = 0.075
engine.addEntity(streamSource)

// Pictures
//loadPictures(building)



// Music
/*
const streamSource = new Entity()
streamSource.addComponent(
  new AudioStream("https://streaming.radionomy.com/JamendoLounge")
)
streamSource.getComponent(AudioStream).volume = 0.075
engine.addEntity(streamSource)
*/


// Pictures
//loadPictures(building)


// Playboy
import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import slimenft from './modules/slimenft'
var sceneMessageBus = new MessageBus()
sceneMessageBus.on('activatePoap', () => {
  POAPBooth.activate()
})

export class Dispenser extends Entity {
  idleAnim = new AnimationState('Idle_POAP', { looping: true })
  buyAnim = new AnimationState('Action_POAP', { looping: false })
  buttonAnim = new AnimationState('Button_Action', { looping: false })
  eventName: string
  constructor(transform: TranformConstructorArgs, eventName: string) {
    super()
    engine.addEntity(this)

    this.addComponent(new GLTFShape('models/POAP_dispenser.glb'))
    this.addComponent(new Transform(transform))

    this.addComponent(new Animator())
    this.getComponent(Animator).addClip(this.idleAnim)
    this.getComponent(Animator).addClip(this.buyAnim)
    this.idleAnim.play()

    this.eventName = eventName

    let button = new Entity()
    button.addComponent(new GLTFShape('models/POAP_button.glb'))
    button.addComponent(new Animator())
    button.getComponent(Animator).addClip(this.buttonAnim)
    button.setParent(this)
    button.addComponent(
      new OnPointerDown(
        (e) => {
          button.getComponent(Animator).getClip('Action').stop()
          button.getComponent(Animator).getClip('Action').play()
          sceneMessageBus.emit('activatePoap', {})
          //handlePoap(eventName)
        },
        { hoverText: 'Get Attendance Token' }
      )
    )
    engine.addEntity(button)
  }

  public activate(): void {
    let anim = this.getComponent(Animator)

    anim.getClip('Idle_POAP').stop()
    anim.getClip('Action_POAP').stop()

    anim.getClip('Action_POAP').play()

    this.addComponentOrReplace(
      new utils.Delay(4000, () => {
        anim.getClip('Action_POAP').stop()

        anim.getClip('Idle_POAP').play()
      })
    )
  }
}

let POAPBooth = new Dispenser(
  {
    position: new Vector3(115, 0, 10),
    rotation:Quaternion.Euler(0,-90,0),
    scale: Vector3.One()
  },
  'playboy'
)

let POAPBanner = new Entity()
POAPBanner.addComponent(
  new Transform({
    position: new Vector3(65, 0, 8),
    rotation:Quaternion.Euler(0,-45,0),
    scale: Vector3.One()
  })
)
POAPBanner.addComponent(new GLTFShape('models/Audio_Banner.glb'))
engine.addEntity(POAPBanner)

/*
var screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(new Material())
screen.getComponent(Material).albedoColor = Color4.Black()
screen.addComponent(new Transform({
  position: new Vector3(50,9,20),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(12,6.75,1)
}))
engine.addEntity(screen)
*/


var nft = {}
var popup = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,500,400,true)
popup.addText("NFT TITLE", 0, 185,Color4.Black(), 25)
popup.addText("NFT Creator", 0, 150,Color4.Black(), 20)
popup.addText("NFT Description", 0, 120,Color4.Black(), 10)
popup.addButton("Close", -150,-150,()=>{
  popup.hide()
},ui.ButtonStyles.ROUNDBLACK)
popup.addButton("NiftyGateway", 150,-150,()=>{
  openExternalURL(getCurrentNFT())
},ui.ButtonStyles.RED)

function getCurrentNFT(){
  return nft.link
}
function getPopup(name:string){
  nft = slimenft[name]
  popup.show()
  popup.elements[0].text.value = slimenft[name].title
  popup.elements[1].text.value = "Creator: " + slimenft[name].creator
}

async function getBid(){

  let params = {
    contractAddress: "0xf91b673aaf37242257618bf8b467d20adcea13ce",
    current:1,
    size:10,
    tokenId: "5900060040"
  }

  let url ="https://lkdcl.co/fent/logic/getnifty"
  let response = await fetch(url,
      {headers: { "Content-Type": "application/json" },
        method: "POST",
      body:JSON.stringify(params)})
  let json = await response.json()
  log(json)
  var results = json.message.data.results
  for(var i = 0; i < results.length; i++){
    var date = new Date(results[i].Timestamp)
    log(date)
    if(results[i].Type == 'offer'){
      log('we have a bid')
      log('offer amount: $' + (results[i].OfferAmountInCents / 100))
    }
  }
}
getBid()


var bidInterval = new Entity()
bidInterval.addComponent(new utils.Interval(10000,()=>{
log('getting bid')
}))
//engine.addEntity(bidInterval)


var bidText = new Entity()
bidText.addComponent(new TextShape("Highest Bidder"))
bidText.addComponent(new Transform({
  position: new Vector3(103.7, 4, 16),
  rotation: Quaternion.Euler(0,90,0)
}))
bidText.getComponent(TextShape).fontSize = 2
bidText.getComponent(TextShape).hTextAlign = "left"
bidText.getComponent(TextShape).color = Color3.Black()
bidText.getComponent(TextShape).value = "Highest Bidder\nAldo: $190\nLastraum: $150"
engine.addEntity(bidText)


 var startedVideo = false
const canvas = new UICanvas()
const image = new UIImage(canvas, new Texture("images/playboy.png"))
image.sourceLeft = 0 
image.sourceTop = 0
image.sourceWidth = 150
image.sourceHeight = 150
image.height = 150
image.width = 150
image.vAlign = "bottom"
image.hAlign = "center"
image.onClick = new OnClick((e)=>{
  log('eys')
  clipHidden.playing = false
  clipHidden.looping = false
  clipShow.looping = false
  clipShow.play()
  image.visible = false
  startedVideo = true
})
image.visible = false

export class avapos{
  update(){
    log(Camera.instance.position)
    if(Camera.instance.position.x < 75){
      image.visible = true
      engine.removeSystem(ava)
    }
  }
}
var ava  = new avapos()
engine.addSystem(ava)