// Input
const input = Input.instance

input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, true, (event) => {
  log("Hit Point: ", event.hit.hitPoint)
})

// Building
const building = new Entity()
building.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
building.addComponent(new GLTFShape("models/building.glb"))
engine.addEntity(building)

// Music
const streamSource = new Entity()
streamSource.addComponent(
  new AudioStream("https://streaming.radionomy.com/JamendoLounge")
)
streamSource.getComponent(AudioStream).volume = 0.075
engine.addEntity(streamSource)

// Stills
const stills = new Entity()
stills.addComponent(new GLTFShape("models/stillArtworks.glb"))
engine.addEntity(stills)