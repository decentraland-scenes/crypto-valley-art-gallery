import { NFT } from "./nft"
import resources from "../resources"
import { data } from "../data"

// Sound
const sound = new Entity()
sound.addComponent(new Transform())
sound.getComponent(Transform).position = Camera.instance.position
sound.addComponent(new AudioSource(resources.sounds.infoPopUpOpen))
engine.addEntity(sound)

// Picture frames v2 styles
enum PictureFrameStyle {
  Classic = 0,
  Baroque_Ornament,
  Diamond_Ornament,
  Minimal_Wide,
  Minimal_Grey,
  Blocky,
  Gold_Edges,
  Gold_Carved,
  Gold_Wide,
  Gold_Rounded,
  Metal_Medium,
  Metal_Wide,
  Metal_Slim,
  Metal_Rounded,
  Pins,
  Minimal_Black,
  Minimal_White,
  Tape,
  Wood_Slim,
  Wood_Wide,
  Wood_Twigs,
  Canvas,
}

// Number of objects in the json file
let count = Object.keys(data).length

// Load pictures
export function loadPictures(parent: Entity): void {
  for (let i = 0; i < count; i++) {
    const picture = new NFT(
      new NFTShape("ethereum://" + data[i].contract_address + "/" + data[i].token_id, {
        style: PictureFrameStyle[String(data[i].frame)],
        color: Color3.FromHexString(data[i].color),
      }),
      new Transform({
        position: new Vector3(+data[i].position_x, +data[i].position_y, +data[i].position_z),
        rotation: Quaternion.Euler(+data[i].rotation_x, +data[i].rotation_y, +data[i].rotation_z),
        scale: new Vector3(+data[i].scale_x, +data[i].scale_y, +data[i].scale_z),
      })
    )

    picture.addComponent(
      new OnPointerDown(
        () => {
          openNFTDialog("ethereum://" + data[i].contract_address + "/" + data[i].token_id)
          sound.getComponent(AudioSource).playOnce()
        },
        {
          button: ActionButton.PRIMARY,
          showFeedback: true,
          hoverText: "More Info",
        }
      )
    )
    picture.setParent(parent)
  }
}

