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

    {name:'1',link:'https://metahistory.gallery/warline/560', image:'resources/1.png', transform:{position: new Vector3(49.1,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.07,3,2)}},
    {name:'2',link:'https://metahistory.gallery/warline/612', image:'resources/2.png', transform:{position: new Vector3(54.1,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {name:'3',link:'https://metahistory.gallery/warline/716', image:'resources/3.png', transform:{position: new Vector3(59.1,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {name:'4',link:'https://metahistory.gallery/warline/717', image:'resources/4.png', transform:{position: new Vector3(64.1,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},

    {name:'5',link:'https://metahistory.gallery/warline/668', image:'resources/5.png', transform:{position: new Vector3(45.4,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'6',link:'https://metahistory.gallery/warline/468', image:'resources/6.png', transform:{position: new Vector3(50.4,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'7',link:'https://metahistory.gallery/warline/618', image:'resources/7.png', transform:{position: new Vector3(55.4,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'8',link:'https://metahistory.gallery/warline/719', image:'resources/8.png', transform:{position: new Vector3(60.4,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},

    {name:'9',link:'https://metahistory.gallery/warline/474', image:'resources/9.png', transform:{position: new Vector3(71.5,3.2,25.15), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'10',link:'https://metahistory.gallery/warline/674', image:'resources/10.png', transform:{position: new Vector3(76.5,3.2,25.15), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'11',link:'https://metahistory.gallery/warline/775', image:'resources/11.png', transform:{position: new Vector3(81.5,3.2,25.15), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'12',link:'https://metahistory.gallery/warline/626', image:'resources/12.png', transform:{position: new Vector3(86.5,3.2,25.15), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},

    {name:'13',link:'https://metahistory.gallery/warline/730', image:'resources/13.png', transform:{position: new Vector3(97.6,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'14',link:'https://metahistory.gallery/warline/732', image:'resources/14.png', transform:{position: new Vector3(102.6,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(2.07,3,2)}},
    {name:'15',link:'https://metahistory.gallery/warline/136', image:'resources/15.png', transform:{position: new Vector3(107.6,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'16',link:'https://metahistory.gallery/warline/635', image:'resources/16.png', transform:{position: new Vector3(112.6,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    
    {name:'17',link:'https://metahistory.gallery/warline/493', image:'resources/17.png', transform:{position: new Vector3(93.7,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {name:'18',link:'https://metahistory.gallery/warline/646', image:'resources/18.png', transform:{position: new Vector3(98.7,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {name:'19',link:'https://metahistory.gallery/warline/599', image:'resources/19.png', transform:{position: new Vector3(103.7,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {name:'20',link:'https://metahistory.gallery/warline/752', image:'resources/20.png', transform:{position: new Vector3(108.7,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},

    {name:'21',link:'https://metahistory.gallery/warline/654', image:'resources/21.png', transform:{position: new Vector3(71.5,3.2,25.54), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {name:'22',link:'https://metahistory.gallery/warline/657', image:'resources/22.png', transform:{position: new Vector3(76.5,3.2,25.54), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {name:'23',link:'https://metahistory.gallery/warline/608', image:'resources/23.png', transform:{position: new Vector3(81.5,3.2,25.54), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {name:'24',link:'https://metahistory.gallery/warline/659', image:'resources/24.png', transform:{position: new Vector3(86.5,3.2,25.54), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},

    {name:'25',link:'https://metahistory.gallery/warline/313', image:'resources/25.png', transform:{position: new Vector3(63.8,3.2,37.24), rotation: Quaternion.Euler(0,270,180), scale: new Vector3(3,3,2)}},
    {name:'26',link:'https://metahistory.gallery/warline/64', image:'resources/26.png', transform:{position: new Vector3(68.8,3.2,41.84), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'27',link:'https://metahistory.gallery/warline/327', image:'resources/27.png', transform:{position: new Vector3(89.25,3.2,41.84), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {name:'28',link:'https://metahistory.gallery/warline/544', image:'resources/28.png', transform:{position: new Vector3(94.17,3.2,37.24), rotation: Quaternion.Euler(0,90,180), scale: new Vector3(3,3,2)}},

    {name:'29',link:'https://metahistory.gallery/warline/347', image:'resources/29.png', transform:{position: new Vector3(67.7,3,8), rotation: Quaternion.Euler(0,90,180), scale: new Vector3(3,3,2)}},
    {name:'30',link:'https://metahistory.gallery/warline/558', image:'resources/30.png', transform:{position: new Vector3(90.24,3,8), rotation: Quaternion.Euler(0,270,180), scale: new Vector3(3,3,2)}},

  ],

   videonfts:[
        
      {
        frame: new GLTFShape("models/tv.glb"),
        frameSize: new Vector3(1.3, 1.3, 1),
        still: new Texture(""),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/810909065.m3u8?s=6dbd23b76b1b8cba9abfaf2aaa20b4f28ffc5823"),
        transform: new Transform({position: new Vector3(114.519,8,21.355), rotation: Quaternion.Euler(345,90,360), scale: new Vector3(8,4.5,3)}),
        trigger: new utils.TriggerBoxShape(new Vector3(98, 15, 40), new Vector3(-36,-5,2)),
        title: "Video",
        artist: '',
        link: "",
      },
 

]

}
