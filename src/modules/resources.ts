export default {
  sounds: {
    infoPopUpOpen: new AudioClip("sounds/navigationForwardSelection.mp3"),
    infoPopUpClose: new AudioClip("sounds/navigationBackSelection.mp3"),
  },
  models: {
    building: new GLTFShape("models/building.glb"),
  },
  nfts:[
    {position: new Vector3(49,4,33.76), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(57,4,33.76), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(50,4,4.26), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(57,4,4.26), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(64,4,4.26), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(67.7,4,7.96), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(103.7,4,21.96), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(97.1,4,4.26), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(7,7,1)},    {position: new Vector3(103.7,4,15.96), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(99.3,4,33.76), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(73.7,4,24.96), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(84.7,4,24.96), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(110.3,4,33.76), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(7,7,1)},
    {position: new Vector3(108.3,4,4.26), rotation: Quaternion.Euler(0,180,0), scale: new Vector3(7,7,1)}
  ],
  personal: {position: new Vector3(104.3,4,19.36), rotation: Quaternion.Euler(0,270,0), scale: new Vector3(10,10,1)}
}
