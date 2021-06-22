import * as utils from "@dcl/ecs-scene-utils"

export const videoData = [
  {
    frame: new GLTFShape("models/videoFrames/vidFrame1280x720.glb"),
    frameSize: new Vector3(9.6, 5.4, 1),
    still: new Texture("videos/atm_our_mission_thumb.jpg"),
    video: new VideoClip("videos/atm_our_mission.mp4"),
    transform: new Transform({ position: new Vector3(48, 4.95, 36.693), scale: new Vector3(1.1, 1.1, 1), rotation: Quaternion.Euler(0, 180, 0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(12, 8, 8), new Vector3(0, 0, 5)),
    link: "https://makersplace.com/"
  },
  {
    frame: new GLTFShape("models/videoFrames/vidFrame1280x720.glb"),
    frameSize: new Vector3(9.6, 5.4, 1),
    still: new Texture("videos/breakdown_thumb.jpg"),
    video: new VideoClip("videos/breakdown.mp4"),
    transform: new Transform({ position: new Vector3(34.750, 3.2, 51), scale: new Vector3(0.5, 0.5, 0.5), rotation: Quaternion.Euler(0, -45, 0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(12, 8, 8), new Vector3(0, 0, -2.5)),
    link: "https://makersplace.com/"
  },
  {
    frame: new GLTFShape("models/videoFrames/vidFrame1280x720.glb"),
    frameSize: new Vector3(9.6, 5.4, 1),
    still: new Texture("videos/ferrari_250_gto_thumb.jpg"),
    video: new VideoClip("videos/ferrari_250_gto.mp4"),
    transform: new Transform({ position: new Vector3(61.250, 3.2, 51), scale: new Vector3(0.5, 0.5, 0.5), rotation: Quaternion.Euler(0, 45, 0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(12, 8, 8), new Vector3(0, 0, -2.5)),
    link: "https://makersplace.com/"
  }
]
