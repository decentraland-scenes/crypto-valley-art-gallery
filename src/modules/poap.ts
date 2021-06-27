import { Dispenser } from "./dispenser";

// POAP BOOTH
let POAPBooth = new Dispenser(
  {
    position: new Vector3(43.5, 0.14, 14.5),
    rotation: Quaternion.Euler(0, 90, 0),
  },
  "3442"
);

// MAKE POAP BOOTH MULTIPLAYER
export let sceneMessageBus = new MessageBus();

sceneMessageBus.on("activatePoap", () => {
  POAPBooth.activate();
});

// POAP BANNER
let POAPBanner = new Entity();
POAPBanner.addComponent(
  new Transform({
    position: new Vector3(43.75, 0.14, 12.5),
    rotation: Quaternion.Euler(0, 45, 0),
  })
);
POAPBanner.addComponent(new GLTFShape("models/poap/POAP_Banner.glb"));
engine.addEntity(POAPBanner);

POAPBanner.addComponent(
  new OnPointerDown(
    (e) => {
      openExternalURL("https://www.poap.xyz/");
    },
    { hoverText: "Learn More" }
  )
);
