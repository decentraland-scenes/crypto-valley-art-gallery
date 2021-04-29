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

const oneSatoshi = new Entity()
oneSatoshi.addComponent(new GLTFShape('models/Satoshi_NFT.glb'))
oneSatoshi.setParent(building)
oneSatoshi.addComponent(new Transform({position: new Vector3(103.7,3.9,19)}))
engine.addEntity(oneSatoshi)

const girl2021 = new Entity()
girl2021.addComponent(new GLTFShape('models/2021_NFT.glb'))
girl2021.setParent(building)
girl2021.addComponent(new Transform({position: new Vector3(109,4.1,33.73)}))
engine.addEntity(girl2021)

const beach = new Entity()
beach.addComponent(new GLTFShape('models/Beach_NFT.glb'))
beach.setParent(building)
beach.addComponent(new Transform({position: new Vector3(99.67,4.1,33.73)}))
engine.addEntity(beach)

const mosaic = new Entity()
mosaic.addComponent(new GLTFShape('models/Mosaic_NFT.glb'))
mosaic.setParent(building)
mosaic.addComponent(new Transform({position: new Vector3(103.2,4.1,4.16)}))
engine.addEntity(mosaic)

const puzzled = new Entity()
puzzled.addComponent(new GLTFShape('models/Puzzled_NFT.glb'))
puzzled.setParent(building)
puzzled.addComponent(new Transform({position: new Vector3(55.43, 4.1, 4.16)}))
engine.addEntity(puzzled)

const redacted = new Entity()
redacted.addComponent(new GLTFShape('models/Redacted_NFT.glb'))
redacted.setParent(building)
redacted.addComponent(new Transform({position: new Vector3(52.987,4.1,33.73)}))
engine.addEntity(redacted)

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
