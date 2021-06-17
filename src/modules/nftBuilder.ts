import { NFT } from './nft'
import resources from "../resources"

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

/// --- CMS ---
export async function loadPictures(scene: Entity) {
  try {
    // Grab data from https://dclcms.club
    let targetUrl = 'https://dclcms.club/api/pictureframes?format=json&gallery=cvag'
    // let response = await fetch(proxyUrl + targetUrl)
    let response = await fetch(targetUrl)
    let responseData = await response.json()

    // Number of objects in JSON
    let count = Object.keys(responseData.results).length

    if (responseData.results) {
      log('Request success')
      log('Count: ', count)
      for (let i = 0; i <= count; i++) {
        // Creating picture frame v2
        const picture = new NFT(
          new NFTShape(
            'ethereum://' + responseData.results[i].contract_address + '/' + responseData.results[i].token_id,
            {
              style: PictureFrameStyle[String(responseData.results[i].frame)],
              color: Color3.FromInts(
                responseData.results[i].color_rgb[0],
                responseData.results[i].color_rgb[1],
                responseData.results[i].color_rgb[2]
              ),
            }
          ),
          // Position artwork
          new Transform({
            position: new Vector3(
              responseData.results[i].transform.position.x,
              responseData.results[i].transform.position.y,
              responseData.results[i].transform.position.z
            ),
            rotation: Quaternion.Euler(
              responseData.results[i].transform.rotation.x,
              responseData.results[i].transform.rotation.y,
              responseData.results[i].transform.rotation.z
            ),
            scale: new Vector3(
              responseData.results[i].transform.scale.x,
              responseData.results[i].transform.scale.y,
              responseData.results[i].transform.scale.z
            ),
          })
        )
        // Add link to opensea
        picture.addComponent(
          new OnPointerDown(
            () => {
              openNFTDialog(
                'ethereum://' + responseData.results[i].contract_address + '/' + responseData.results[i].token_id, responseData.results[i].comment 
              )
              sound.getComponent(AudioSource).playOnce()
            },
            {
              button: ActionButton.ANY,
              showFeedback: true,
              hoverText: 'More Info',
              distance: 12
            }
          )
        )

        picture.setParent(scene)
      }
    } else {
      log('Request failed')
    }
  } catch (error) {
    log('FAILED')
    log(error.toString())
  }
}