import * as utils from '@dcl/ecs-scene-utils'

export default {
  sounds: {
    infoPopUpOpen: new AudioClip("sounds/navigationForwardSelection.mp3"),
    infoPopUpClose: new AudioClip("sounds/navigationBackSelection.mp3"),
  },
  models: {
    building: new GLTFShape("models/building.glb"),
  },

  nfts:[

    {name:'1',link:'https://cryptoart.ai/gallery/detail/Andreas/698', image:'images/1.png', transform:{position: new Vector3(49.629,3.2,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'5',link:'https://cryptoart.ai/gallery/detail/Andreas/714', image:'images/5.png', transform:{position: new Vector3(56.629,3.2,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'6',link:'https://cryptoart.ai/gallery/detail/Andreas/711', image:'images/6.png', transform:{position: new Vector3(63.629,3.2,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.878,2.878,1)}},

    {name:'3',link:'https://cryptoart.ai/gallery/detail/Suryanto_nft/1116', image:'images/3.png', transform:{position: new Vector3(46.129,3.2,33.745), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.878,2.878,2)}},
    {name:'12',link:'https://cryptoart.ai/gallery/detail/AMartinakis/1122', image:'images/12.jpg', transform:{position: new Vector3(52.909,3.2,33.775), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(4.6023,2.9,1)}},
    {name:'4',link:'https://cryptoart.ai/gallery/detail/Pak/377', image:'images/4.png', transform:{position: new Vector3(59.629,3.2,33.775), rotation: Quaternion.Euler(360,0,180), scale: new Vector3(2.878,2.878,1)}},

    {name:'7',link:'https://cryptoart.ai/gallery/detail/Marcelo%20Cantu/1064', image:'images/7.jpg', transform:{position: new Vector3(103.679,3.2,14.115), rotation: Quaternion.Euler(360,90,180), scale: new Vector3(2.878,3.5975,1)}},
    {name:'13',link:'https://cryptoart.ai/gallery/detail/AMartinakis/1121', image:'images/13.jpg', transform:{position: new Vector3(103.679,3.2,19.105), rotation: Quaternion.Euler(360,90,180), scale: new Vector3(2.878,3.5975,1)}},
    {name:'16',link:'https://cryptoart.ai/gallery/detail/Onderwish/1128', image:'images/16.jpg', transform:{position: new Vector3(103.679,3.2,24.145), rotation: Quaternion.Euler(360,90,180), scale: new Vector3(2.878,3.5975,1)}},

  


  ],

  videonfts:[
        
    {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/8.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665155222.m3u8?s=637e17e49eb58712db95a7cb0109ea01ea94d49b"),
        transform: new Transform({position: new Vector3(97.949,2.9,33.765), rotation: Quaternion.Euler(360,360,0), scale: new Vector3(2.878,3.5975,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(4, 4, 6), new Vector3(0,-0.5, -3)),
        title: "8",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/mbsjq/1103",
      },

      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/11.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665155754.m3u8?s=d403f2a8273aca9a6f876fab2f68db7f87c41f89"),
        transform: new Transform({position: new Vector3(105.279,2.9,33.775), rotation: Quaternion.Euler(360,360,360), scale: new Vector3(2.878,3.597,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(4, 4, 6), new Vector3(0,-0.5, -3)),
        title: "11",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/AlanBolton/1119",
      },

      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/17.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665156240.m3u8?s=720d3e791413cd57422be78021ddacbd0682fa28"),
        transform: new Transform({position: new Vector3(112.599,2.9,33.775), rotation: Quaternion.Euler(360,360,0), scale: new Vector3(2.878,3.836,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(4, 4, 6), new Vector3(0,-0.5, -3)),
        title: "17",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/Custom%20Horror/1134",
      },

      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/10.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665155622.m3u8?s=95d7b8a625ede05f762fc65b06341323c41de2d6"),
        transform: new Transform({position: new Vector3(108.839,2.9,4.215), rotation: Quaternion.Euler(0,180,360), scale: new Vector3(5.114,2.878,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(4, 4, 6), new Vector3(0,-0.5, 3)),
        title: "10",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/peajey/1104",
      },

      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/15.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665156014.m3u8?s=72e68e5a8fe1bb0c9992f2a620a90807fc561c12"),
        transform: new Transform({position: new Vector3(101.309,2.9,4.205), rotation: Quaternion.Euler(0,180,360), scale: new Vector3(4.317,2.878,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(4, 4, 6), new Vector3(0,-0.5, 3)),
        title: "15",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/chmiel.art/772",
      },

      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/14.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665155918.m3u8?s=42e5e78033a3b5f8b04e0ab90b24078689f02256"),
        transform: new Transform({position: new Vector3(93.749,2.9,4.205), rotation: Quaternion.Euler(0,180,360), scale: new Vector3(5.114,2.878,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(4, 4, 6), new Vector3(0,-0.5, 3)),
        title: "14",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/chmiel.art/1127",
      },

      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/9.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665155362.m3u8?s=a6729d93c318f206976678b1a7a33f20519e17c0"),
        transform: new Transform({position: new Vector3(104.319,2.9,13.745), rotation: Quaternion.Euler(0,270,360), scale: new Vector3(2.878,2.878,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(6, 4, 4), new Vector3(3,-0.5, 0)),
        title: "9",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/OUCHHH/782",
      },

      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/2.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665155074.m3u8?s=05d4e1ab6dc45102f1ef728cf85dec0d60f89fde"),
        transform: new Transform({position: new Vector3(104.319,2.89,19.165), rotation: Quaternion.Euler(0,270,360), scale: new Vector3(2.878,3.4536,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(6, 4, 4), new Vector3(3,-0.5, 0)),
        title: "2",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/Suryanto_nft/1120",
      },

      {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/18.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/665156479.m3u8?s=f4e6e49846f4652949b816b3a4c710319c070214"),
        transform: new Transform({position: new Vector3(104.319,2.89,24.525), rotation: Quaternion.Euler(0,270,360), scale: new Vector3(2.878,2.878,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(6, 4, 4), new Vector3(3,-0.5, 0)),
        title: "18",
        artist: '',
        link: "https://cryptoart.ai/gallery/detail/Koba/766",
      },


]

}
