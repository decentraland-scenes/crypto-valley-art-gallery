import * as utils from '@dcl/ecs-scene-utils'

export class CustomNFT extends Entity implements ISystem{
    
    type:string
    vTexture:VideoTexture
    timer:number = 0
    length:number
    content:string
    contentEntity:Entity

    constructor(nft:any){
        super(nft.title)
        this.type = nft.type
        this.timer = nft.length
        this.length = nft.length
        this.content = nft.link
        //currentNFT.link = nft.link

        engine.addEntity(this)
        this.addComponent(new Transform(nft.transform))
        this.addComponent(new Material())
        this.getComponent(Material).albedoColor = Color4.White()

        this.contentEntity = new Entity("content-"+nft.title)
        this.contentEntity.addComponent(new PlaneShape())
        this.contentEntity.addComponent(new Transform({position: new Vector3(-0.007,0.55,-0.025), rotation: nft.type == "video" ? Quaternion.Euler(0,180,0) : Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
        this.contentEntity.setParent(this)
        this.contentEntity.addComponent(new BasicMaterial())
        
        if(nft.popup){
            this.contentEntity.addComponent(new OnPointerDown(()=>{
                openExternalURL(nft.location)
            },{
                showFeedback: true, hoverText:"Visit Automobilist"
            }))
        }
        
        switch(this.type){
            case "video":
                this.vTexture = new VideoTexture(new VideoClip(this.content))
                //this.addPlaceholder()
                if(nft.auto){
                    this.contentEntity.getComponent(BasicMaterial).texture = this.vTexture
                    this.vTexture.playing = true
                }
                else{
                    this.vTexture.playing = false
                }
                break;

            case "image":
                this.contentEntity.getComponent(BasicMaterial).texture = new Texture(this.content)
                break;
        }
    
        if(this.type == "video"){
            this.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(nft.trigger.size, nft.trigger.position),
            {
                enableDebug: false,
                onCameraEnter:()=>{
                    //this.hidePlaceholder()
                    this.getComponent(Transform).scale = nft.show
                    this.vTexture.playing = true
                    engine.addSystem(this)
                    message.visible = true
                    var delay = new Entity()
                    delay.addComponent(new utils.Delay(3000,()=>{
                        message.visible = false
                        engine.removeEntity(delay)
                    }))
                    engine.addEntity(delay)    
                },
                onCameraExit:()=>{
                    this.vTexture.playing = false
                    //this.addPlaceholder()
                    engine.removeSystem(this)
                }
            }))
        }

    }

    /*
    addPlaceholder(){
        this.contentEntity.addComponentOrReplace(new Material())
        this.contentEntity.getComponent(Material).albedoColor = Color4.Black()

        if(this.contentEntity.hasComponent(BasicMaterial)){
            this.contentEntity.removeComponent(BasicMaterial)
        }
    }

    hidePlaceholder(){
        this.contentEntity.removeComponent(Material)
        this.contentEntity.addComponentOrReplace(new BasicMaterial())
        this.contentEntity.getComponent(BasicMaterial).texture = this.vTexture
        this.contentEntity.getComponent(BasicMaterial).alphaTest = 0
        this.contentEntity.getComponent(Transform).rotation.y = 180
    }
    */

    update(dt:number){
        if(this.vTexture.playing){
            this.timer += dt
            if(this.timer > this.length){
                this.vTexture = new VideoTexture(new VideoClip(this.content))
                this.contentEntity.getComponent(BasicMaterial).texture = this.vTexture
                this.vTexture.playing = true
                this.timer = 0
            }
        }
    }
}

const canvas = new UICanvas()

const message = new UIText(canvas)
message.value = "Loading video....please wait"
message.fontSize = 15
message.width = 120
message.height = 30
message.vAlign = "bottom"
message.positionX = -80
message.visible = false