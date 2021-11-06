import resources from "./modules/resources"
import { createRabbitar } from "./rabbitar"


export let _scene = new Entity("scene")
_scene.addComponent(new Transform({}))
engine.addEntity(_scene)




const building = new Entity()
building.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
building.addComponent(resources.models.building)
building.setParent(_scene)

createRabbitar(_scene)