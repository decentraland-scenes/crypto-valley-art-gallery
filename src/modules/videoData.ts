import * as utils from "@dcl/ecs-scene-utils"

export const videoData = [
  // TV STREAM
  {
    frame: new GLTFShape("models/vidFrame1024x1024.glb"),
    frameSize: new Vector3(12, 7, 1),
    still: new Texture("images/MocaShanghai_Logo.jpg"),
    video: new VideoClip(""),
    transform: new Transform({ position: new Vector3(43.5, 8.8, 21.5), scale: new Vector3(0.7, 0.7, 0.5), rotation: Quaternion.Euler(-15, -90, 0)}),
    trigger: new utils.TriggerBoxShape(new Vector3(75, 15, 35), new Vector3(35, -7, 0)),
    link: "",
  },

  // Ignite
  {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(0.85, 0.85, 1.0),
    still: new Texture("images/Ignite.png"),
    thumbNail: ('images/Ignite_thumbnail.png'),
    video: new VideoClip("videos/Ignite.mp4"),
    transform: new Transform({ position: new Vector3(63.0,3.8,4.2), scale: new Vector3(3, 3, 2.0), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5.5, 6, 10), new Vector3(0, 0, 5)),
    title: "Ignite",
    artist: 'by Arc4g',
    link: "https://zora.co/collections/zora/4963",
  },
   // Selphy
   {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(0.85, 0.85, 1.0),
    still: new Texture("images/Selphy.png"),
    thumbNail: ('images/Selphy_thumbnail.png'),
    video: new VideoClip("videos/Selphy.mp4"),
    transform: new Transform({ position: new Vector3(56.8,3.8,4.2), scale: new Vector3(3, 3, 2.0), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5.5, 6, 10), new Vector3(0, 0, 5)),
    title: "Selphy",
    artist: 'by Arc4g & Baiwei',
    link: "https://foundation.app/@baiwei/~/77080",
  },
    // Self-Recognition
     {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(0.85, 0.85, 1.0),
    still: new Texture("images/SelfRecognition.png"),
    thumbNail: ('images/SelfRecognition_thumbnail.png'),
    video: new VideoClip("videos/SelfRecognition.mp4"),
    transform: new Transform({ position: new Vector3(93.8,3.8,4.2), scale: new Vector3(3, 3, 2.0), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5.5, 6, 10), new Vector3(0, 0, 5)),
    title: "Self-Recognition",
    artist: 'by Debbie Digital & Reva',
    link: "https://makersplace.com/debbiehdigital/self-recognition-1-of-1-80749/",
    },
      // rin(ii)
    {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(0.85, 0.85, 1.0),
    still: new Texture("images/rin(ii)_v02.png"),
    thumbNail: ('images/rin(ii)_v02_thumbnail.png'),
    video: new VideoClip("videos/rin(ii)_v02.mp4"),
    transform: new Transform({ position: new Vector3(108.8,3.8,4.2), scale: new Vector3(3, 4.26, 2.0), rotation: Quaternion.Euler(0,180,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5.5, 6, 8), new Vector3(0, 0, 4)),
    title: "rin(ii)",
    artist: 'by LuluxXX & Riniifish',
    link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/52976075206626058040109150762651901835369219567962475591099848262217222848513",
    },
      // Reptyle Style
    {
    frame: new GLTFShape("models/frame.glb"),
    frameSize: new Vector3(0.85, 0.85, 1.0),
    still: new Texture("images/ReptyleStyle.png"),
    thumbNail: ('images/ReptyleStyle_thumbnail.png'),
    video: new VideoClip("videos/ReptyleStyle.mp4"),
    transform: new Transform({ position: new Vector3(102.5,3.8,33.75), scale: new Vector3(3, 4.32, 2.0), rotation: Quaternion.Euler(0,0,0) }),
    trigger: new utils.TriggerBoxShape(new Vector3(5.5, 6, 8), new Vector3(0, 0, -4)),
    title: "Reptyle Style",
    artist: 'by Jay Delay',
    link: "https://rarible.com/token/0x9b26616ee0cbd466e072e86a99b4bfa4a3489bf4:10042?tab=owners",
    },
      // Overthinking
    {
      frame: new GLTFShape("models/frame.glb"),
      frameSize: new Vector3(0.85, 0.85, 1.0),
      still: new Texture("images/Overthinking.png"),
      thumbNail: ('images/Overthinking_thumbnail.png'),
      video: new VideoClip("videos/Overthinking.mp4"),
      transform: new Transform({ position: new Vector3(112.5,3.8,33.75), scale: new Vector3(3, 4.26, 2.0), rotation: Quaternion.Euler(0,0,0) }),
      trigger: new utils.TriggerBoxShape(new Vector3(5.5, 6, 8), new Vector3(0, 0, -4)),
      title: "Overthinking",
      artist: 'by Skygolpe',
      link: "https://superrare.com/artwork-v2/overthinking-10659",
      },
      // Identity
    {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(0.85, 0.85, 1.0),
        still: new Texture("images/Identity.png"),
        thumbNail: ('images/Identity_thumbnail.png'),
        video: new VideoClip("videos/Identity.mp4"),
        transform: new Transform({ position: new Vector3(103.68,3.8,19.25), scale: new Vector3(3, 3, 2.0), rotation: Quaternion.Euler(0,90,0) }),
        trigger: new utils.TriggerBoxShape(new Vector3(8, 6, 3.5), new Vector3(-4, 0, 0)),
        title: "Identity",
        artist: 'by Baiwei',
        link: "https://foundation.app/@baiwei/~/11381",
      },
      // Avatars Way Of Death
      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(0.85, 0.85, 1.0),
        still: new Texture("images/AvatarsWayOfDeath.png"),
        thumbNail: ('images/AvatarsWayOfDeath_thumbnail.png'),
        video: new VideoClip("videos/AvatarsWayOfDeath.mp4"),
        transform: new Transform({ position: new Vector3(104.40 ,3.8,24.25), scale: new Vector3(3, 3, 2.0), rotation: Quaternion.Euler(0,-90,0) }),
        trigger: new utils.TriggerBoxShape(new Vector3(8, 6, 3.5), new Vector3(4, 0, 0)),
        title: "Avatar's Way Of Death",
        artist: 'by Xix',
        link: "https://foundation.app/@xix/~/86959",
      },
      // Crew
      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(0.85, 0.85, 1.0),
        still: new Texture("images/Crew.png"),
        thumbNail: ('images/Crew_thumbnail.png'),
        video: new VideoClip("videos/Crew.mp4"),
        transform: new Transform({ position: new Vector3(104.40 ,3.8,14.25), scale: new Vector3(3, 3, 2.0), rotation: Quaternion.Euler(0,-90,0) }),
        trigger: new utils.TriggerBoxShape(new Vector3(8, 6, 3.5), new Vector3(4, 0, 0)),
        title: "Crew",
        artist: 'by Riniifish',
        link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/44442949386796894431554556088612716344816748171023677202865271269590562766849",
      },
      // LuckyMask
      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(0.85, 0.85, 1.0),
        still: new Texture("images/LuckyMask.png"),
        thumbNail: ('images/LuckyMask_thumbnail.png'),
        video: new VideoClip("videos/LuckyMask.mp4"),
        transform: new Transform({ position: new Vector3(104.40 ,3.8,19.25), scale: new Vector3(3, 4.14, 2.0), rotation: Quaternion.Euler(0,-90,0) }),
        trigger: new utils.TriggerBoxShape(new Vector3(8, 6, 3.5), new Vector3(4, 0, 0)),
        title: "LuckyMask",
        artist: 'by N!q',
        link: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/50607888083714916310772034386603713942255032774816121732233382217531961376769",
      },
      // Starlike Inspirations
      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(0.85, 0.85, 1.0),
        still: new Texture("images/StarlikeInspirations.png"),
        thumbNail: ('images/StarlikeInspirations_thumbnail.png'),
        video: new VideoClip("videos/StarlikeInspirations.mp4"),
        transform: new Transform({ position: new Vector3(85,5,25.1), scale: new Vector3(5.31, 3, 2.0), rotation: Quaternion.Euler(0,0,0) }),
        trigger: new utils.TriggerBoxShape(new Vector3(5, 6, 8), new Vector3(0, -2, -4)),
        title: "Starlike Inspirations",
        artist: 'by Reva',
        link: "https://makersplace.com/vulcandao/starlike-inspirations-1-of-1-79089/",
      }

]