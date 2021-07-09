import { Delay } from "@dcl/ecs-scene-utils"
import * as UI from "@dcl/ui-scene-utils"

import { getUserData } from "@decentraland/Identity"
import { getCurrentRealm } from "@decentraland/EnvironmentAPI"

const POAP_SERVER = "poapapi.dcl.guru";

export class Dispenser extends Entity {
  idleAnim = new AnimationState("Idle_POAP", { looping: true })
  buyAnim = new AnimationState("Action_POAP", { looping: false })
  buttonAnim = new AnimationState("Button_Action", { looping: false })
  eventName: string
  clickable: boolean = true
  timeToClickable: number = 0
  poapServer = ""

  constructor(transform: TranformConstructorArgs, eventName: string) {
    super("poapbooth")
    engine.addEntity(this)

    this.addComponent(new GLTFShape("src/poap/poap_dispenser.glb"))
    this.addComponent(new Transform(transform))

    this.addComponent(new Animator())
    this.getComponent(Animator).addClip(this.idleAnim)
    this.getComponent(Animator).addClip(this.buyAnim)
    this.idleAnim.play()

    this.eventName = eventName

    let button = new Entity()
    button.addComponent(new GLTFShape("src/poap/poap_button.glb"))
    button.addComponent(new Animator())
    button.getComponent(Animator).addClip(this.buttonAnim)
    button.setParent(this)
    button.addComponent(
      new OnPointerDown(
        (e) => {
         if (!this.clickable) {
            UI.displayAnnouncement("POAP SPAMMER!\nRefresh scene to try again.", 5)
            return
          }
          this.clickable = false
          
          log('claiming poap --> ' + this.eventName)
          button.getComponent(Animator).getClip("Action").stop()
          button.getComponent(Animator).getClip("Action").play()
          //sceneMessageBus.emit('activatePoap', {})
          //this.makeTransaction(poapServer, this.esventName)
          this.handlePoap(this.eventName)
        },
        { hoverText: "Claim poap", showFeedback:true }
      )
    )
    engine.addEntity(button)
  }

  public activate(): void {
    let anim = this.getComponent(Animator)

    anim.getClip("Idle_POAP").stop()
    anim.getClip("Action_POAP").stop()

    anim.getClip("Action_POAP").play()

    this.addComponentOrReplace(
      new Delay(4000, () => {
        anim.getClip("Action_POAP").stop()

        anim.getClip("Idle_POAP").play()
      })
    )
  }

  async handlePoap(eventName: string) {
    log(eventName)
    const userData = await getUserData()
    if (!userData.hasConnectedWeb3) {
      log("no wallet")
      return
    }

    const realm = await getCurrentRealm();

    //const url = 'https://lkdcl.co/dcl/smartitems/sendpoap'

    const url = `https://${POAP_SERVER}/claim/${eventName}`;
  

    let body = JSON.stringify({
      address: userData?.publicKey,
      catalyst: realm?.domain,
      room: realm?.layer,
    });
  
    try {
      let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
      })
      let data = await response.json()
      log('Poap status: ', data)
  
      if (data.success === true) {
        if (data.dead) {
          UI.displayAnnouncement('This event is no longer valid.', 5)
        } else if (data.already) {
          UI.displayAnnouncement(
            'You already claimed a\nPOAP token for this event!',
            5
          )
        } else {
          UI.displayAnnouncement(
            "POAP was sent to your address!\nhttps/\/\:app.poap.xyz",
            5
          )
        }
      } else {
        UI.displayAnnouncement(data.error, 5)
      }
    } catch {
      log('error fetching from token server ', url)
    }
  }

  async makeTransaction(poapServer: string, event: string) {
    const userData = await getUserData()
    if (!userData.hasConnectedWeb3) {
      log("no wallet")
      return
    }
    const realm = await getCurrentRealm()

    const url = poapServer
    let method = "POST"
    let headers = { "Content-Type": "application/json" }
    let body = JSON.stringify({
      address: userData.publicKey,
      catalyst: realm.domain,
      event: event,
      room: realm.layer,
    })

    try {
      let response = await fetch(url, {
        headers: headers,
        method: method,
        body: body,
      })
      let data = await response.json()
      this.clickable = true
      if (response.status == 200) {
        UI.displayAnnouncement("The POAP was sent to your address", 3)
        //messageBus.emit("activatePoap", {})
      } else {
        UI.displayAnnouncement(`Oops, there was an error: "${data.error}"`, 3)
      }
    } catch {
      this.clickable = true
      log("error fetching from POAP server ", url)
    }

    return
  }
}