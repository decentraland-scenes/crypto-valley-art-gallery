import { isPreviewMode } from "@decentraland/EnvironmentAPI"
import { getUserData } from "@decentraland/Identity"
import { getParcel } from "@decentraland/ParcelIdentity"
import { signedFetch } from "@decentraland/SignedFetch"



export class ClaimDispenser extends Entity{

    clickable:Entity
    
    constructor(transform:TranformConstructorArgs){
        super()
        this.addComponent(new Transform(transform))
        this.addComponent(new GLTFShape("src/xverse_claim.glb"))
        engine.addEntity(this)

        this.clickable = new Entity()
        this.clickable.addComponent(new Transform({position: new Vector3(0,1.5,0)}))
        this.clickable.addComponent(new BoxShape())
        this.clickable.addComponent(new Material())
        this.clickable.getComponent(Material).albedoColor = new Color4(0,0,0,0)
        this.clickable.setParent(this)
        this.clickable.addComponent(new OnPointerDown(()=>{
            claimWearable(this)
        }, {hoverText:"Claim Gitex Wearable"}))

        //wssconn()
    }
}

export async function claimWearable(ent:Entity){
    let userData = await getUserData()
    if(userData?.hasConnectedWeb3){
      log('attempting to claim')
  
      try{
        const parcel = await getParcel()

        let baseParcel = parcel.land.sceneJsonData.scene.base
        let response = await signedFetch("https://lkdcl.co/neat/dcl/claimgitex?&base=" + baseParcel)
        let json
        if (response.text) {
          json = await JSON.parse(response.text)
          log(json)
        }
    
        if (json && json.valid) {
          log("we have valid request")
          if(json.claim){
            log('we claimed')
            showMessage("NEAT Claimed!", 5, CLEAR_UI, null)
          //  ui.displayAnnouncement("NEAT claimed!")
          }
        }
        else{
          log('invalid request =>', json.reason)
          showMessage("Error: " + json.reason, 5, CLEAR_UI, null)
          //ui.displayAnnouncement("Error: " + json.reason)
        }
        //engine.removeEntity(ent)
      }
      catch(errr){
        log('error =>', error)
        showMessage("Error: " + errr, 5, CLEAR_UI, null)
      }

    }
    else{
      showMessage("Error: WEB3 not enabled", 5, CLEAR_UI, null)
    }
}

export let socket:WebSocket
export const wssconn = async () => {
  //startAnalytics();
  const parcel = await getParcel();
  const baseParcel = parcel.land.sceneJsonData.scene.base;

    let isPreview = await isPreviewMode();
    const useLocal = false;
  
    let baseUrl = "wss://lkdcl.co/neat/dcl/wss";
  
    if (useLocal && isPreview) {
      baseUrl = "ws://localhost:7779";
    }

    let userData = await getUserData()

    if(userData?.hasConnectedWeb3){
    socket = new WebSocket(baseUrl + `?scene=${baseParcel}` + `&user=` + userData.userId);
  
    if (!socket) {
      return;
    }
  
    socket.onopen = (ev) => { 
      log("connected to neat web socket");
      socket.send(JSON.stringify({ action: "join", name: userData!.userId }));
    };
  
    socket.onclose = function (event) {
      log("neat socket closed");
    };
  
    socket.onmessage = function (event) {

      if (event.data === '__ping__') {
        log('pinging neat server')
        socket.send(JSON.stringify({keepAlive: userData!.userId}));
    }
    else{
      const message = JSON.parse(event.data);
      log(message)
      
      switch (message.action) {
        case "init":
          //initScene(message.sceneData);
          log('initalizing scene for neat')
          break;
      }
    }
    };
  }
};

export let canvas = new UICanvas()

export var neatText = new UIText(canvas)
neatText.value = ""
neatText.vAlign = "center"
neatText.hAlign = "center"
neatText.hTextAlign = "center"
neatText.fontSize = 50
neatText.positionX = 0
neatText.height = 30
neatText.color = Color4.Yellow()
neatText.visible = false

export function showMessage(
    message: string,
    time: number,
    action: string,
    entity: any
  ) {
    neatText.visible = true
    neatText.value = message
    engine.addSystem(new NeatSystem(time, action, entity, false))
  }
  
  export var STOP_ANIMATE = "stopanimate"
  export var CLEAR_UI = "clearUI"
  export var CLEAR_PRESS = "clearpress"
  export var CHECK_VALID = 'checkvalid'
  
  export var showing = false
  export var invalidCounter = 0
  
  export type PeerResponse = {
    ok: boolean
    peers: {
      id: string
      address: string
      lastPing: number
      parcel: [number, number]
      position: [number, number, number]
    }[]
  }
  
  export class NeatSystem {
      base:number
      timer:number
      action:string
      entity:any
      loop: boolean
  
      constructor(time:number, action:string, entity:any, loop: boolean){
          this.base = time
          this.timer = time
          this.entity = entity
          this.action = action
          this.loop = loop
      }
      async update(dt: number) {
          if (this.timer > 0) {
            this.timer -= dt
          } else {
            this.timer = this.base
            switch(this.action){
               case CLEAR_UI:
                  neatText.visible = false
                  break;
  
                case CLEAR_PRESS:
                this.entity.enablePress(false)
                  break;
            }
            if(!this.loop){
              engine.removeSystem(this)
            }
          }
        }
      }