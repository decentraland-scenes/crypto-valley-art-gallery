import resources from './resources'
import * as utils from '@dcl/ecs-scene-utils'

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
  new AudioStream('https://streaming.radionomy.com/JamendoLounge') // change to DJ set
)
streamSource.getComponent(AudioStream).volume = 0.075
engine.addEntity(streamSource)

// Videos

//1
const waveVideoClip = new VideoClip(
  'https://player.vimeo.com/external/570332974.m3u8?s=4ae5758275151cae7c8fb7b3d901a3db81e1b2dc'
)
const waveVideoTexture = new VideoTexture(waveVideoClip)
const waveMaterial = new BasicMaterial()
waveMaterial.texture = waveVideoTexture

let waveScreen = new Entity()
waveScreen.addComponent(new PlaneShape())
waveScreen.addComponent(
  new Transform({
    position: new Vector3(58.4, 4.1, 4.3),
    rotation: Quaternion.Euler(0, 0, 0),
    scale: new Vector3(4.6, 5.85, 4.55),
  })
)
waveScreen.addComponent(waveMaterial)
// waveVideoTexture.play()
waveVideoTexture.loop = true

engine.addEntity(waveScreen)

//2
const rekodeVideoClip = new VideoClip(
  'https://player.vimeo.com/external/570333036.m3u8?s=7c9ab886923e7e40dabee75718938d5e34992262'
) //streaming link
const rekodeVideoTexture = new VideoTexture(rekodeVideoClip)
const rekodeMaterial = new BasicMaterial()
rekodeMaterial.texture = rekodeVideoTexture

let rekodeScreen = new Entity()
rekodeScreen.addComponent(new PlaneShape())
rekodeScreen.addComponent(
  new Transform({
    position: new Vector3(54.8, 4.15, 33.7),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(4.75, 5.9, 4.5),
  })
)
rekodeScreen.addComponent(rekodeMaterial)
// rekodeVideoTexture.play()
rekodeVideoTexture.loop = true

engine.addEntity(rekodeScreen)

//3
const dayVideoClip = new VideoClip(
  'https://player.vimeo.com/external/570332821.m3u8?s=8048205c843edc3c81e2bf460805e4a33f1335f1'
) //streaming link
const dayVideoTexture = new VideoTexture(dayVideoClip)
const dayMaterial = new BasicMaterial()
dayMaterial.texture = dayVideoTexture

let dayScreen = new Entity()
dayScreen.addComponent(new PlaneShape())
dayScreen.addComponent(
  new Transform({
    position: new Vector3(104.3, 4, 19.4),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(3.2, 5.8, 3.4),
  })
)
dayScreen.addComponent(dayMaterial)
// dayVideoTexture.play()
dayVideoTexture.loop = true

engine.addEntity(dayScreen)

//4
const pbsrVideoClip = new VideoClip(
  'https://player.vimeo.com/external/570332927.m3u8?s=cb75c792367b86f7971bc5d0a6afcbf11d25b0d7'
) //streaming link
const pbsrVideoTexture = new VideoTexture(pbsrVideoClip)
const pbsrMaterial = new BasicMaterial()
pbsrMaterial.texture = pbsrVideoTexture

let pbsrScreen = new Entity()
pbsrScreen.addComponent(new PlaneShape())
pbsrScreen.addComponent(
  new Transform({
    position: new Vector3(79, 5.1, 25.7),
    rotation: Quaternion.Euler(0, 0, 0),
    scale: new Vector3(4, 6.9, 3),
  })
)
pbsrScreen.addComponent(pbsrMaterial)
// pbsrVideoTexture.play()
pbsrVideoTexture.loop = true

engine.addEntity(pbsrScreen)

//5
const mbsjqVideoClip = new VideoClip(
  'https://player.vimeo.com/external/570332881.m3u8?s=446d33847392ef94d603ffe0b77869ac3ae242e0'
) //streaming link
const mbsjqVideoTexture = new VideoTexture(mbsjqVideoClip)
const mbsjqMaterial = new BasicMaterial()
mbsjqMaterial.texture = mbsjqVideoTexture

let mbsjqScreen = new Entity()
mbsjqScreen.addComponent(new PlaneShape())
mbsjqScreen.addComponent(
  new Transform({
    position: new Vector3(103.71, 4, 18.88),
    rotation: Quaternion.Euler(0, -90, 0),
    scale: new Vector3(3.3, 6, 3.4),
  })
)
mbsjqScreen.addComponent(mbsjqMaterial)
// mbsjqVideoTexture.play()
mbsjqVideoTexture.loop = true

engine.addEntity(mbsjqScreen)

//1
let waveTriggerBox = new utils.TriggerBoxShape(
  new Vector3(18, 20, 22),
  new Vector3(57.7, 3.8, 4.3)
)
const waveTriggerEntity = new Entity()
engine.addEntity(waveTriggerEntity)
// Create trigger for entity
waveTriggerEntity.addComponent(
  new utils.TriggerComponent(waveTriggerBox, {
    onCameraEnter: () => {
      waveVideoTexture.playing = !waveVideoTexture.playing
      waveVideoTexture.loop = true
    },
    onCameraExit: () => {
      waveVideoTexture.playing = false
      // engine.addEntity(placeholderG)
    },
    // enableDebug: true,
  })
)

//2
let rekodeTriggerBox = new utils.TriggerBoxShape(
  new Vector3(18, 20, 22),
  new Vector3(57.7, 3.8, 31)
)
const rekodeTriggerEntity = new Entity()
engine.addEntity(rekodeTriggerEntity)
// Create trigger for entity
rekodeTriggerEntity.addComponent(
  new utils.TriggerComponent(rekodeTriggerBox, {
    onCameraEnter: () => {
      rekodeVideoTexture.playing = !rekodeVideoTexture.playing
      rekodeVideoTexture.loop = true
    },
    onCameraExit: () => {
      rekodeVideoTexture.playing = false
      // engine.addEntity(placeholderG)
    },
    // enableDebug: true,
  })
)

//3
let dayTriggerBox = new utils.TriggerBoxShape(
  new Vector3(18, 20, 22),
  new Vector3(110, 4, 19.1)
)
const dayTriggerEntity = new Entity()
engine.addEntity(dayTriggerEntity)
// Create trigger for entity
dayTriggerEntity.addComponent(
  new utils.TriggerComponent(dayTriggerBox, {
    onCameraEnter: () => {
      dayVideoTexture.playing = !dayVideoTexture.playing
      dayVideoTexture.loop = true
    },
    onCameraExit: () => {
      dayVideoTexture.playing = false
      // engine.addEntity(placeholderG)
    },
    // enableDebug: true,
  })
)

//4
let pbrsTriggerBox = new utils.TriggerBoxShape(
  new Vector3(24, 20, 22),
  new Vector3(79, 5.1, 25.7)
)
const pbrsTriggerEntity = new Entity()
engine.addEntity(pbrsTriggerEntity)
// Create trigger for entity
pbrsTriggerEntity.addComponent(
  new utils.TriggerComponent(pbrsTriggerBox, {
    onCameraEnter: () => {
      pbsrVideoTexture.playing = !pbsrVideoTexture.playing
      pbsrVideoTexture.loop = true
    },
    onCameraExit: () => {
      pbsrVideoTexture.playing = false
      // engine.addEntity(placeholderG)
    },
    // enableDebug: true,
  })
)

//5
let mbsjqTriggerBox = new utils.TriggerBoxShape(
  new Vector3(24, 20, 22),
  new Vector3(95, 4, 18.88)
)
const mbsjqTriggerEntity = new Entity()
engine.addEntity(mbsjqTriggerEntity)
// Create trigger for entity
mbsjqTriggerEntity.addComponent(
  new utils.TriggerComponent(mbsjqTriggerBox, {
    onCameraEnter: () => {
      mbsjqVideoTexture.playing = !mbsjqVideoTexture.playing
      mbsjqVideoTexture.loop = true
    },
    onCameraExit: () => {
      mbsjqVideoTexture.playing = false
      // engine.addEntity(placeholderG)
    },
    //  enableDebug: true,
  })
)

Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, true, (e) => {
  log(`pos: `, Camera.instance.position)
  log(`rot: `, Camera.instance.rotation)
})


//Under Auction Text

let auctionText = new GLTFShape('models/auctionText.glb')
let animator = new Animator()
const playTextClip = new AnimationState('Text')
const pauseTextClip = new AnimationState('Static')
animator.addClip(playTextClip)
animator.addClip(pauseTextClip)

//1
const KathyText = new Entity()
KathyText.addComponent(new Transform({
  position: new Vector3(85.3,5.7,25.05),
  rotation: Quaternion.Euler(0,180,0),
  scale: new Vector3(1.5,1.5,1.5)
}))
KathyText.addComponent(auctionText)
KathyText.addComponent(animator)
playTextClip.play()
playTextClip.looping = true
engine.addEntity(KathyText)

//2
const MBSJQText = new Entity()
MBSJQText.addComponent(new Transform({
  position: new Vector3(103.7,4.5,15),
  rotation: Quaternion.Euler(0,-90,0),
  scale: new Vector3(1.5,1.5,1.5)
}))
MBSJQText.addComponent(auctionText)
MBSJQText.addComponent(animator)
playTextClip.play()
playTextClip.looping = true
engine.addEntity(MBSJQText)

//3
const DayText = new Entity()
DayText.addComponent(new Transform({
  position: new Vector3(104.3,4.35,23.3),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(1.5,1.5,1.5)
}))
DayText.addComponent(auctionText)
DayText.addComponent(animator)
playTextClip.play()
playTextClip.looping = true
engine.addEntity(DayText)

//4
const WaveText = new Entity()
WaveText.addComponent(new Transform({
  position: new Vector3(53.9,4.05,4.3),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1.5,1.5,1.5)
}))
WaveText.addComponent(auctionText)
WaveText.addComponent(animator)
playTextClip.play()
playTextClip.looping = true
engine.addEntity(WaveText)

//5
const rekText = new Entity()
rekText.addComponent(new Transform({
  position: new Vector3(59.9,4.35,33.7),
  rotation: Quaternion.Euler(0,180,0),
  scale: new Vector3(1.5,1.5,1.5)
}))
rekText.addComponent(auctionText)
rekText.addComponent(animator)
playTextClip.play()
playTextClip.looping = true
engine.addEntity(rekText)