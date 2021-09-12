const building = new Entity()
building.addComponent(new Transform({position: new Vector3(0, 0, 0)}))
building.addComponent(new GLTFShape('models/building.glb'))
engine.addEntity(building)

const car = new Entity()
car.addComponent(new Transform({position: new Vector3(104, 0.2, 19)}))
car.addComponent(new GLTFShape('models/car.glb'))
engine.addEntity(car)