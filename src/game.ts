import resources from "./resources"
import * as utils from '@dcl/ecs-scene-utils'
import * as ui from '@dcl/ui-scene-utils'
import { handlePoap } from './modules/poapHandler'
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
export class SlimeNFT extends Entity {

    data:any = {
        one:{
        link:"http://www.google.com",
        image:"images/one.png",
        address:"",
        tokenId:"",
        title:"One Satoshi",
        description:"Introducing the first digital PLAYBOY cover ever to be sold. Satoshi might be considered the King of Crypto, but he was preceded by the First Lady of the Internet. Playmate Lenna Sjööblom, the star of this April 1973 cover—and now Playboy’s first NFT cover—first appeared in the pages of PLAYBOY in an iconic 1972 pictorial photographed by Dwight Hooker. Lenna made such a big impression that her Centerfold image was adopted by researchers at the University of Southern California as a test photo that helped lay the foundations of JPEG and MPEG file formats, which later became the de facto standards of sharing images and videos online. Just like Satoshi’s fingerprints are on every blockchain transaction, every image on the internet can be traced back to Lenna’s image in PLAYBOY. “Forget breaking the internet,” PLAYBOY editors later recounted. 'Lenna helped make it.'\n\nHidden Rabbit Head Clue\nWhen it comes to making a lasting impression, our Rabbit doesn’t need anyone’s stamp of approval; he always nails it.\n\nOriginal Credits\nApril 1973 cover featuring November 1972 Playmate Lenna Sjööblom, photographed by Don Azuma.",
        nft:new GLTFShape('models/Satoshi_NFT.glb'),
        transform:new Transform({position: new Vector3(103.68,3.9,19)}),
        triggerPos:new Vector3(-4,-2,0),
    },
    twentyOne:{
        link:"",
        image:"images/twentyOne.png",
        address:"",
        tokenId:"",
        title:"2021 —> 1861",
        description:"It can be a challenge to comprehend NFTs in 2021, so imagine how the concept would have been received in 1861. In addition to the direct connection to the Liquid Summer theme courtesy of Domenico Morelli’s dreamy 1861 bathing beauties, fused with a poolside image of 2015 Playmate Monica Sims, 2021 —> 1861  is a multi-era mashup that speaks to the fluidity of time, the liquidity of crypto, and the sometimes unbelievable evolution of technology itself.",
        nft:new GLTFShape('models/2021_NFT.glb'),
        transform:new Transform({position: new Vector3(109,4.1,33.73)}),
        triggerPos:new Vector3(0,-2,-4)
    },
    puzzled:{
        link:"",
        image:"images/puzzled.png",
        address:"",
        tokenId:"",
        title:"Puzzled",
        description:"Clever cut-outs and puzzle-themed imagery, often born from the imagination of founding art director and Rabbit Head logo creator Arthur Paul, have made recurring appearances within the pages of PLAYBOY magazine and on some of its most iconic covers--some of which have been transformed into actual puzzles that have given readers a special way to take the Rabbit home. Slimesunday gives a digital nod to the tradition with this cheeky adaptation of an image from a 2000 pictorial shot in Fiji.\n\nHidden Rabbit Head Clue\nOur Rabbit is no beach bum; he knows that without a strong backbone, beauty is only skin deep.\n\nOriginal Credits\nAugust 1997 Playmate Kalin Olson, April 1997 Playmate Kelly Marie Monaco and January 1996 Playmate Victoria Fuller, photographed by Richard Fegley",
        nft:new GLTFShape('models/Puzzled_NFT.glb'),
        transform:new Transform({position: new Vector3(55.43, 4.1, 4.16)}),
        triggerPos:new Vector3(0,-2,4)
    },
    redacted:{
        link:"",
        image:"images/redacted.png",
        address:"",
        tokenId:"",
        title:"Redacted",
        description:"Redacted marries two classic Playboy themes that are as relevant today as they were at the brand’s inception: fine art and freedom-of-speech. Redacted pays its respects to these key components of Playboy’s DNA through collage material that features an article about a Reagan-era attempt to censor PLAYBOY, layered atop contemporary photography and illustration.\n\nHidden Rabbit Head Clue\nWhen it comes to standing up for free speech, our Rabbit firmly believ   es you should raise your fist and hodl on tight to your convictions.\n\nOriginal Credits\nApril 2018 Playmate Nereyda Bird photographed by Wiissa for the pictorial “Bird of Paradise.” Collage material from “Defying the Anti-Porn Police” by James R. Petersen, illustrated by Rob Stites.",
        nft:new GLTFShape('models/Redacted_NFT.glb'),
        transform:new Transform({position: new Vector3(52.987,4.1,33.73)}),
        triggerPos:new Vector3(0,-2,-4)
    },
    liquid:{
        link:"",
        image:"images/liquid.png",
        address:"",
        tokenId:"",
        title:"Liquid Summer",
        description:"March 2019 Playmate Miki Hamano and photographer Ana Dias are recurring Playboy contributors who embody the spirit of the brand on both creative and personal levels, so it's fitting that an image from their pictorial serves as the primary source material for the collection’s eponymous work. Both exude a level of confidence that only comes from being comfortable in their own skin. As a result, they light up every room, or in this case--every classic Playboy beach shoot--that they visit.\n\nHidden Rabbit Head Clue\nWhether daring to dive into deep waters or lounging luxuriously on the beach, our Rabbit isn’t afraid to make a repeat appearance.\n\nOriginal Credits\nMarch 2019 Playmate Miki Hamano photographed by Ana Dias",
        nft:new GLTFShape('models/Beach_NFT.glb'),
        transform:new Transform({position: new Vector3(99.67,4.1,33.73)}),
        triggerPos:new Vector3(0,-2,-6)
    },
    mosaic:{
        link:"",
        image:"images/mosaic.png",
        address:"",
        tokenId:"",
        title:"Mosaic",
        description:"Mosaic was one of the first pieces Slimesunday created for Liquid Summer, and it quickly cemented some of the key creative and conceptual throughlines that ripple throughout the collection: censorship, transformation, and a thoughtful balance between style and substance. Although pixelation is usually associated with censorship, Mosaic challenges that preconception by fusing it with collage, and transforming the original photograph into a different version of itself.\n\nHidden Rabbit Head Clue\nOur Rabbit can always take the heat, but knows that cooling off can be just as sweet.\n\nOriginal Credits\nApril 2018 Playmate Nereyda Bird photographed by Wiissa",
        nft:new GLTFShape('models/Mosaic_NFT.glb'),
        transform:new Transform({position: new Vector3(103.2,4.1,4.16)}),
        triggerPos:new Vector3(0,-2,3)
    }
    }

    name:string
    popup:ui.CustomPrompt

    constructor(name:any, parent:Entity){
        super()
        this.name = name
        this.setParent(parent)
        this.addComponent(this.data[name].nft)
        this.addComponent(this.data[name].transform)
        
        this.addComponent(new OnPointerDown(()=>{
          this.showPopup(this.data[name])
        }))
        
        this.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(5,4,3),this.data[name].triggerPos),
        {
          onCameraEnter: ()=>{
            hoverText.visible = true
          },
          onCameraExit: ()=>{
            hoverText.visible = false
        },
          enableDebug: false
        }))
       

        this.popup = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,500,400,true)
        this.popup.addText("", 100, 185,Color4.Black(), 25)
        this.popup.addIcon(this.data[name].image, -150,50,200,200,{
          sourceHeight:1024,
          sourceWidth:1024,
          sourceLeft:0,
          sourceTop:0
        })
        this.popup.addButton("Close", -150,-150,()=>{
            this.popup.hide()
            descriptionText.visible = false
        },ui.ButtonStyles.ROUNDBLACK)
        this.popup.addButton("NiftyGateway", 150,-150,()=>{
            log('ok')
        openExternalURL(this.data[name].link)
        },ui.ButtonStyles.RED)       
    }

    showPopup(name:any){
        this.popup.show()
        this.popup.elements[0].text.value = name.title
        descriptionText.value = name.description
        descriptionText.visible = true
    }
}

new SlimeNFT("one", building)
new SlimeNFT("liquid", building)
new SlimeNFT("mosaic", building)
new SlimeNFT("redacted", building)
new SlimeNFT("puzzled", building)
new SlimeNFT("twentyOne", building)

const liquidlogo = new Entity()
liquidlogo.addComponent(new GLTFShape('models/LiquidSummer_NFT.glb'))
liquidlogo.setParent(building)
liquidlogo.addComponent(new Transform({position: new Vector3(78.97,5.1,25.34), scale: new Vector3(1.2,1.2,1.2)}))
engine.addEntity(liquidlogo)

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
          handlePoap(eventName)
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
POAPBanner.addComponentOrReplace(new OnPointerDown(()=>{
  streamSource.getComponent(AudioStream).volume = 0.1
  firesidechat.playing = true
  firesidechat.volume = .7
  firesidePlaying = true
}))
POAPBanner.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(2,4,3),new Vector3(-1.5,0,1.5)),
{
  onCameraEnter: ()=>{
    !firesidePlaying?  hoverText.visible = true : null
    !firesidePlaying? hoverText.value = "Click to start Fireside Chat guided tour" : null
  },
  onCameraExit: ()=>{
    
    hoverText.visible = false
    hoverText.value = "Click NFT for info"
},
  enableDebug: false
}))

var firesidePlaying = false
const audioCube = new Entity()
const chatClip = new AudioClip("sounds/playboy_audio.mp3")
export var firesidechat = new AudioSource(chatClip)
audioCube.addComponent(firesidechat)
audioCube.addComponent(new Transform({
  position: new Vector3(0, 2,0)
}))
engine.addEntity(audioCube)
audioCube.setParent(Attachable.AVATAR)


var screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(new Material())
screen.getComponent(Material).albedoColor = Color4.Black()
screen.addComponent(new Transform({
  position: new Vector3(48.2,8,21),
  rotation: Quaternion.Euler(0,90,0),
  scale: Vector3.Zero()
}))
engine.addEntity(screen)


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


/*
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
*/

const canvas = new UICanvas()
export var descriptionText = new UIText(canvas)
descriptionText.height = 25
descriptionText.value = ""
descriptionText.width = 275
descriptionText.textWrapping = true
descriptionText.fontSize = 9
descriptionText.positionY = 140
descriptionText.positionX = 100
descriptionText.color = Color4.Black()
descriptionText.vTextAlign = 'top'
descriptionText.vAlign = "center"
descriptionText.hAlign = "center"
descriptionText.visible = true

export var hoverText = new UIText(canvas)
hoverText.height = 25
hoverText.value = "Click NFT for info"
hoverText.width = 275
hoverText.fontSize = 20
hoverText.positionY = 10
hoverText.positionX = 20
hoverText.color = Color4.White()
hoverText.vAlign = "bottom"
hoverText.hAlign = "center"
hoverText.visible = false

const playvideo = new UIImage(canvas, new Texture("images/PlayVideo.png"))
playvideo.sourceLeft = 0 
playvideo.sourceTop = 0
playvideo.sourceWidth = 512
playvideo.sourceHeight = 512
playvideo.height = 100
playvideo.width = 100
playvideo.vAlign = "bottom"
playvideo.hAlign = "center"
playvideo.onClick = new OnClick((e)=>{
  clipHidden.playing = false
  clipHidden.looping = false
  clipShow.looping = false
  clipShow.play()
  playvideo.visible = false
  engine.removeSystem(ava)
  var delay = new Entity()
  engine.addEntity(delay)
  delay.addComponentOrReplace(new utils.Delay(3100,()=>{
    screen.getComponent(Transform).scale = new Vector3(12,6.75,1)
    engine.removeEntity(streamSource)
    var texture = new VideoTexture(new VideoClip("https://vod.dcl.guru/2021-01-23-3LAUAfterparty-F.mp4"))
    var newMat = new BasicMaterial()
    newMat.texture = texture
    screen.addComponentOrReplace(newMat)
    texture.playing = true
    texture.volume = .1
    engine.removeEntity(delay)
  }))
})
playvideo.visible = false

export class avapos{
  update(){
    if(Camera.instance.position.x < 75 && Camera.instance.position.x > 45 && Camera.instance.position.z > 12 &&  Camera.instance.position.z < 23){
      playvideo.visible = true
    }
    else{
      playvideo.visible = false
    }
  }
}
var ava  = new avapos()
engine.addSystem(ava)