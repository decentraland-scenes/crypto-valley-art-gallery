import { Delay } from "@dcl/ecs-scene-utils";
import * as UI from "@dcl/ui-scene-utils";
import { getUserData } from "@decentraland/Identity";
import { getCurrentRealm } from "@decentraland/EnvironmentAPI";
import { signedFetch } from "@decentraland/SignedFetch";
import * as utils from "@dcl/ecs-scene-utils";
@Component("cooldown")
export class Cooldown {}

const POAP_SERVER = "poap-api.decentraland.org";

export class Dispenser extends Entity {
  eventName: string;
  constructor(transform: TranformConstructorArgs, eventName: string) {
    super("poapbooth");
    engine.addEntity(this);

    this.addComponent(new GLTFShape("src/poap/poap_dispenser.glb"));
    this.addComponent(new Transform(transform));

    this.addComponent(new Animator());
    this.getComponent(Animator).addClip(new AnimationState("Idle_POAP", { looping: true }));
    this.getComponent(Animator).addClip(new AnimationState("Action_POAP", { looping: false }));
    this.getComponent(Animator).getClip("Idle_POAP").play();

    this.eventName = eventName;

    let button = new Entity();
    button.addComponent(new GLTFShape("src/poap/poap_button.glb"));
    button.addComponent(new Animator());
    button.getComponent(Animator).addClip(new AnimationState("Button_Action", { looping: false }));
    button.setParent(this);
    button.addComponent(
      new OnPointerDown(
        () => {
          if (button.hasComponent(Cooldown)) return;
          button.addComponent(new Cooldown());
          button.addComponent(
            new utils.Delay(5000, () => {
              button.removeComponent(Cooldown);
            })
          );
          button.getComponent(Animator).getClip("Button_Action").stop();
          button.getComponent(Animator).getClip("Button_Action").play();
          makeTransaction(eventName);
        },
        { hoverText: "Get Attendance Token" }
      )
    );
    engine.addEntity(button);
  }

  public activate(): void {
    log("hello");
    this.getComponent(Animator).getClip("Idle_POAP").stop();
    this.getComponent(Animator).getClip("Action_POAP").stop();
    this.getComponent(Animator).getClip("Action_POAP").play();

    this.addComponentOrReplace(
      new Delay(4000, () => {
        this.getComponent(Animator).getClip("Idle_POAP").stop();
        this.getComponent(Animator).getClip("Action_POAP").stop();
        this.getComponent(Animator).getClip("Idle_POAP").play();
      })
    );
  }
}

async function makeTransaction(event: string) {
  const userData = await getUserData();
  if (!userData?.hasConnectedWeb3) {
    log("no wallet");
    return;
  }
  const realm = await getCurrentRealm();

  const url = `https://${POAP_SERVER}/claim/${event}`;
  let method = "POST";
  let headers = { "Content-Type": "application/json" };
  let body = JSON.stringify({
    address: userData?.publicKey,
    catalyst: realm?.domain,
    room: realm?.layer,
  });

  try {
    let response = await fetch(url, {
      headers: headers,
      method: method,
      body: body,
    });
    let data = await response.json();
    if (response.status == 200) {
      UI.displayAnnouncement("The POAP was sent to your address", 3);
      ///sceneMessageBus.emit("activatePoap", {});
    } else {
      UI.displayAnnouncement(`Oops, there was an error: "${data.error}"`, 3);
    }
  } catch {
    log("error fetching from POAP server ", url);
  }

  return;
}

export async function getToken(userId: any): Promise<string> {
  let body = JSON.stringify({
    address: userId,
  });
  let response = await signedFetch(`http://localhost:5000/token`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: body,
  });
  let data = await response.json();
  log(data);
  return data.token;
}
