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

