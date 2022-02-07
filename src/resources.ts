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

    {name:'1',link:'https://xoasis.io/', image:'images/001.jpg', transform:{position: new Vector3(49.629,3.2,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'2',link:'https://xoasis.io/', image:'images/002.jpg', transform:{position: new Vector3(56.629,3.2,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'3',link:'https://xoasis.io/', image:'images/003.jpg', transform:{position: new Vector3(63.629,3.2,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.878,2.878,1)}},

    {name:'4',link:'https://xoasis.io/', image:'images/004.jpg', transform:{position: new Vector3(46.129,3.2,33.745), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'5',link:'https://xoasis.io/', image:'images/005.jpg', transform:{position: new Vector3(52.909,3.2,33.775), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'6',link:'https://xoasis.io/', image:'images/006.jpg', transform:{position: new Vector3(59.629,3.2,33.775), rotation: Quaternion.Euler(360,0,180), scale: new Vector3(2.878,2.878,1)}},

    {name:'7',link:'https://xoasis.io/', image:'images/007.jpg', transform:{position: new Vector3(97.949,2.9,33.765), rotation: Quaternion.Euler(360,0,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'8',link:'https://xoasis.io/', image:'images/008.jpg', transform:{position: new Vector3(104.949,2.9,33.765), rotation: Quaternion.Euler(360,0,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'9',link:'https://xoasis.io/', image:'images/009.jpg', transform:{position: new Vector3(111.949,2.9,33.765), rotation: Quaternion.Euler(360,0,180), scale: new Vector3(2.878,2.878,1)}},
  
    {name:'King',link:'https://xoasis.io/', image:'images/King.png', transform:{position: new Vector3(96.949,2.9,4.205), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.878,2.878,1)}},
    {name:'Ninja',link:'https://xoasis.io/', image:'images/Ninja.png', transform:{position: new Vector3(105.749,2.9,4.205), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.878,2.878,1)}},

  ],

  videonfts:[
        
     {
        frame: new GLTFShape("models/frame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/Oasis.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/674358970.m3u8?s=8a2a1c05b68563a915cb66a26b203b476fd40baa"),
        transform: new Transform({position: new Vector3(78.849,4.2,25.155), rotation: Quaternion.Euler(360,360,0), scale: new Vector3(9.878,5.597,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(16, 7, 13), new Vector3(0,-1,-6.5)),
        title: "Video",
        artist: '',
        link: "",
      },
 

]

}
