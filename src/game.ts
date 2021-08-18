//////////////////////////
// LEMANS

import { hud } from "./builderhud/BuilderHUD"




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










/// Para meter una animación: 

///const luzColumnas = new Entity()
///luzColumnas.addComponent(transform) 
///const luzColumnasAnimator = new Animator()
///luzColumnasAnimator.addClip(flash1W)
///flash1W.play()
///flash1W.looping = true 
///engine.addEntity(luzColumnas)