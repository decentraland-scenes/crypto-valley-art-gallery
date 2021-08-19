//////////////////////////
// LEMANS

import { hud } from "./builderhud/BuilderHUD"
import { Dispenser } from "./poap/poap"




const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(-8, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)
hud.attachToEntity(_scene)



let lemans = new Entity()
lemans.addComponent(new GLTFShape("models/lemans1.glb"))
lemans.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
engine.addEntity(lemans)
lemans.setParent(_scene)
  

let lemans1 = new Entity()
lemans1.addComponent(new GLTFShape("models/nftExt1.glb"))
lemans1.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans1.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans1)
lemans1.setParent(_scene)

let lemans2 = new Entity()
lemans2.addComponent(new GLTFShape("models/nftExt2.glb"))
lemans2.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans2.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans2)
lemans2.setParent(_scene)

let lemans3 = new Entity()
lemans3.addComponent(new GLTFShape("models/nft3.glb"))
lemans3.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans3.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans3)
lemans3.setParent(_scene)

let lemans4 = new Entity()
lemans4.addComponent(new GLTFShape("models/nft4.glb"))
lemans4.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans4.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans4)
lemans4.setParent(_scene)

let lemans5 = new Entity()
lemans5.addComponent(new GLTFShape("models/nft5.glb"))
lemans5.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans5.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans5)
lemans5.setParent(_scene)

let lemans6 = new Entity()
lemans6.addComponent(new GLTFShape("models/nft6.glb"))
lemans6.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans6.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans6)
lemans6.setParent(_scene)

let lemans7 = new Entity()
lemans7.addComponent(new GLTFShape("models/nft7.glb"))
lemans7.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans7.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans7)
lemans7.setParent(_scene)

let lemans8 = new Entity()
lemans8.addComponent(new GLTFShape("models/nft8.glb"))
lemans8.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans8.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans8)
lemans8.setParent(_scene)

let lemans9 = new Entity()
lemans9.addComponent(new GLTFShape("models/nft9.glb"))
lemans9.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans9.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans9)
lemans9.setParent(_scene)

let lemans10 = new Entity()
lemans10.addComponent(new GLTFShape("models/nft10.glb"))
lemans10.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans10.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans10)
lemans10.setParent(_scene)

let lemans11 = new Entity()
lemans11.addComponent(new GLTFShape("models/nft11.glb"))
lemans11.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans11.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans11)
lemans11.setParent(_scene)

let lemans12 = new Entity()
lemans12.addComponent(new GLTFShape("models/nft12.glb"))
lemans12.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans12.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans12)
lemans12.setParent(_scene)

let lemans13 = new Entity()
lemans13.addComponent(new GLTFShape("models/nft13.glb"))
lemans13.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans13.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans13)
lemans13.setParent(_scene)

let lemans14 = new Entity()
lemans14.addComponent(new GLTFShape("models/videoExit.glb"))
lemans14.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans14.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans14)
lemans14.setParent(_scene)

let lemans15 = new Entity()
lemans15.addComponent(new GLTFShape("models/video1.glb"))
lemans15.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans15.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans15)
lemans15.setParent(_scene)

let lemans16 = new Entity()
lemans16.addComponent(new GLTFShape("models/video2.glb"))
lemans16.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans16.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans16)
lemans16.setParent(_scene)

let lemans17 = new Entity()
lemans17.addComponent(new GLTFShape("models/video4.glb"))
lemans17.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans17.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans17)
lemans17.setParent(_scene)

let lemans18 = new Entity()
lemans18.addComponent(new GLTFShape("models/videoExitLeft.glb"))
lemans18.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans18.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans18)
lemans18.setParent(_scene)

let lemans19 = new Entity()
lemans19.addComponent(new GLTFShape("models/videoTeaser.glb"))
lemans19.addComponent(new Transform({ 
    position: new Vector3(8, 0, 8), 
    scale: new Vector3(1, 1, 1)
    }))
lemans19.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    )
  })
)
engine.addEntity(lemans19)
lemans19.setParent(_scene)


let poapbooth = new Dispenser({position: new Vector3(115,0.15,14.4), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, "","5893")
hud.attachToEntity(poapbooth)


let playedVideo = false

const screenHolder = new Entity
screenHolder.setParent(_scene)
screenHolder.addComponent(new Transform({position: new Vector3(55.8,12,27), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
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
hud.attachToEntity(screenHolder)

clipHidden.playing = false
clipHidden.looping = false
clipShow.looping = false


var videoTexture = new VideoTexture(new VideoClip("https://dclteam.s3.us-west-1.amazonaws.com/lemans.mp4"))
var screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(new BasicMaterial())
screen.getComponent(BasicMaterial).texture = videoTexture
screen.addComponent(new Transform({position: new Vector3(56,8.1,27), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(0,0,0)}))
engine.addEntity(screen)
screen.setParent(_scene)
videoTexture.playing = false



/// Para meter una animación: 

///const luzColumnas = new Entity()
///luzColumnas.addComponent(transform) 
///const luzColumnasAnimator = new Animator()
///luzColumnasAnimator.addClip(flash1W)
///flash1W.play()
///flash1W.looping = true 
///engine.addEntity(luzColumnas)


let canvas = new UICanvas()
const playvideo = new UIText(canvas)
playvideo.height = 50
playvideo.width = 100
playvideo.vAlign = "bottom"
playvideo.hAlign = "center"
playvideo.value = "Press E to play video"
playvideo.fontSize = 20

Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, ()=>{
  if(!playedVideo){
    playedVideo = true
    play()
  }
})

export function play(){
  clipHidden.playing = false
  clipHidden.looping = false
  clipShow.looping = false
  clipShow.play()
  playvideo.visible = false
  var delay = new Entity()
  engine.addSystem(new DelaySystem())
}

export class DelaySystem{

  timer = 3
  time = 3

  update(dt:number){
    if(this.timer > 0){
      this.timer -= dt
    }
    else{
      screen.getComponent(Transform).scale = new Vector3(12,6.75,1)
      videoTexture.playing = true
      videoTexture.volume = .8
      engine.removeSystem(this)
    }
  }
}