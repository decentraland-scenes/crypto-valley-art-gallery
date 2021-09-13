import * as utils from '@dcl/ecs-scene-utils'
import { hud } from './builderhud/BuilderHUD'
import { Dispenser } from './poap/poap'


Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, ()=>{
    log('position', Camera.instance.position)
})

const building = new Entity()
building.addComponent(new Transform({position: new Vector3(0, 0, 0)}))
building.addComponent(new GLTFShape('models/building.glb'))
engine.addEntity(building)

const car = new Entity()
car.addComponent(new Transform({position: new Vector3(104, 0.2, 19)}))
car.addComponent(new GLTFShape('models/car.glb'))
engine.addEntity(car)
car.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0,10,0)))

export let DIRECTION = {
    NORTH: "north",
    SOUTH: "south",
    EAST: "east",
    WEST: "west"
}

export class VideoScreen extends Entity implements ISystem{

    texture:VideoTexture
    depth = 5
    offset = this.depth
    vtime:number = 0
    timer:number = 0

    constructor(name: string, direction: string, texture:string, transform: TranformConstructorArgs, loop:boolean, length?: number, triggerPos?: Vector3, click?:boolean, link?:string){
        super(name)
        engine.addEntity(this)

        this.texture = new VideoTexture(new VideoClip(texture))
        this.addComponent(new Transform(transform))
        this.addComponent(new Material())
        this.addComponent(new PlaneShape())
        this.getComponent(Material).albedoTexture = this.texture

        this.texture.playing = true
        let d = new Entity()
        d.addComponent(new utils.Delay(2500,()=>{
            this.texture.playing = false
        }))
        engine.addEntity(d)

        if(click){
            this.addComponent(new OnPointerDown(()=>{
                openExternalURL(link ? link : "")
            }))
        }

        hud.attachToEntity(this)
        
        let t = this.getComponent(Transform).scale.clone()
        let p = this.getComponent(Transform).position.clone()

        switch(direction){
            case DIRECTION.NORTH:
                this.offset *= -1
                break;
        }

        let tpos = triggerPos ? triggerPos : new Vector3(0, 0, this.offset)
        
        this.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(t.x, t.y, 5), tpos),{
            enableDebug:false,
            onCameraEnter:()=>{
                this.texture.reset()
                this.texture.playing = true
            },
            onCameraExit:()=>{
                this.texture.playing = false
            }
        }))

        if(loop){
            this.vtime = length ? length : 0
            this.timer = 0
        }
    }

    update(dt:number){
        if(this.timer > 0){
            this.timer -= dt
        }
        else{
            this.timer = this.vtime
            this.texture.reset()
            this.texture.playing = true
        }
    }
}

new VideoScreen("white dame", DIRECTION.NORTH, "https://dclteam.s3.us-west-1.amazonaws.com/white_dame.mp4", {position: new Vector3(104.84,4.09,33.74), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(10.3,5.75,1)}, false, 0, undefined, true, "https://superrare.com/automobilist")
new VideoScreen("3500 gt", DIRECTION.NORTH, "https://dclteam.s3.us-west-1.amazonaws.com/3500gt.mp4", {position: new Vector3(72.98,5.09,25.07), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(4.8,4.8,1)}, true, 6, new Vector3(0, -3,-5), true, "https://superrare.com/automobilist")
new VideoScreen("250 f", DIRECTION.NORTH, "https://dclteam.s3.us-west-1.amazonaws.com/250f.mp4", {position: new Vector3(79,5.09,25.07), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(4.8,4.8,1)}, true, 7,  new Vector3(0, -3,-5), true, "https://superrare.com/automobilist")
new VideoScreen("mc20", DIRECTION.NORTH, "https://dclteam.s3.us-west-1.amazonaws.com/mc20.mp4", {position: new Vector3(85.16,5.09,25.07), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(4.8,4.8,1)}, true, 7, new Vector3(0, -3,-5), true, "https://superrare.com/automobilist")



let poap = new Dispenser({position: new Vector3(115.16,0.09,13.07), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(1,1,1)}, "", "7475")
hud.attachToEntity(poap)


export class ClickableArea extends Entity{

    constructor(name:string, transform: TransformConstructorArgs, link:string){
        super(name)
        engine.addEntity(this)
        this.addComponent(new BoxShape())
        this.addComponent(new BasicMaterial())
        this.getComponent(BasicMaterial).alphaTest = 1
        this.getComponent(BasicMaterial).texture = new Texture("src/builderhud/transparent.png")
        this.addComponent(new Transform(transform))
        this.addComponent(new OnPointerDown(()=>{
            openExternalURL(link)
        }))
        engine.addEntity(this)
        hud.attachToEntity(this)
    }
}

let screen = new Entity("screen")
screen.addComponent(new GLTFShape("models/ScreenHolder.glb"))
screen.addComponent(new Transform({position: new Vector3(50,12.3,20), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
engine.addEntity(screen)
hud.attachToEntity(screen)
screen.addComponent(new Animator())
screen.getComponent(Animator).addClip(new AnimationState("Show"))
screen.getComponent(Animator).getClip("Show").looping = false
screen.getComponent(Animator).getClip("Show").play()


let livescreen = new Entity("live screen")
livescreen.addComponent(new PlaneShape())
livescreen.addComponent(new Transform({position: new Vector3(50.11,8.44,20), rotation: Quaternion.Euler(360,90,360), scale: new Vector3(12,7,1)}))
livescreen.addComponent(new Material())
engine.addEntity(livescreen)
hud.attachToEntity(livescreen)
livescreen.getComponent(PlaneShape).visible = false

let livedelay = new Entity()
engine.addEntity(livedelay)
livedelay.addComponent(new utils.Delay(3500,()=>{
    livescreen.getComponent(PlaneShape).visible = true
    let livetexture = new VideoTexture(new VideoClip("https://lkdcl.co/dcl/streams/live/cryptovalleygallery/index.m3u8"))
    livescreen.getComponent(Material).albedoTexture = livetexture
    livetexture.playing = true
}))



new ClickableArea("click1", {position: new Vector3(102.6,3.8,4.4), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(14,6,1)}, "https://superrare.com/automobilist" )
new ClickableArea("click2", {position: new Vector3(114,6.1,5.9), rotation: Quaternion.Euler(0,315,0), scale: new Vector3(3.2,1.8,0.3)}, "https://superrare.com/automobilist" )
new ClickableArea("click3", {position: new Vector3(114,4.1,5.9), rotation: Quaternion.Euler(0,315,0), scale: new Vector3(3.2,1.8,0.3)}, "https://superrare.com/automobilist" )
new ClickableArea("click4", {position: new Vector3(114,2.1,5.9), rotation: Quaternion.Euler(0,315,0), scale: new Vector3(3.2,1.8,0.3)}, "https://superrare.com/automobilist" )
new ClickableArea("click5", {position: new Vector3(90.2,5.9,8.2), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(4,1.22,1)}, "https://superrare.com/automobilist" )
new ClickableArea("click6", {position: new Vector3(90.2,4.4,8.2), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(4,1.22,1)}, "https://superrare.com/automobilist" )
new ClickableArea("click7", {position: new Vector3(90.2,2.6,8.2), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(4,1.22,1)}, "https://superrare.com/automobilist" )



new ClickableArea("click8", {position: new Vector3(56.6,3.8,4.4), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(14,6,1)}, "https://superrare.com/automobilist" )
new ClickableArea("click9",  {position: new Vector3(67.3,3,8.4), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(3.9,2,1)}, "https://superrare.com/automobilist" )
new ClickableArea("click10", {position: new Vector3(67.3,5.4,8.2), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(3.9,2,1)}, "https://superrare.com/automobilist" )
new ClickableArea("click11", {position: new Vector3(43.7,5.4,5.9), rotation: Quaternion.Euler(0,225,0), scale: new Vector3(3.9,2,1)}, "https://superrare.com/automobilist" )
new ClickableArea("click12", {position: new Vector3(43.7,3.1,5.9), rotation: Quaternion.Euler(0,225,0), scale: new Vector3(3.9,2,1)}, "https://superrare.com/automobilist" )
new ClickableArea("click13", {position: new Vector3(52.6,3.8,33.4), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(14,6,1)}, "https://superrare.com/automobilist" )

