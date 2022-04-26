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

    //HUG
    {name:'Air Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Air Hug L.jpg', transform:{position: new Vector3(65.529,2.4,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Air Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Air Hug R.jpg', transform:{position: new Vector3(62.029,2.4,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Bear Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Bear Hug L.jpg', transform:{position: new Vector3(51.529,2.4,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Bear Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Bear Hug R.jpg', transform:{position: new Vector3(48.029,2.4,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Rug Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Rug Hug L.jpg', transform:{position: new Vector3(55.029,2.4,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Rug Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Rug Hug R.jpg', transform:{position: new Vector3(58.529,2.4,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Self Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Self Hug L.jpg', transform:{position: new Vector3(65.529,5.8,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Self Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Self Hug R.jpg', transform:{position: new Vector3(62.029,5.8,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Tree Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Tree Hug L.jpg', transform:{position: new Vector3(51.529,5.8,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Tree Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Tree Hug R.jpg', transform:{position: new Vector3(48.029,5.8,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Window Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Window Hug L.jpg', transform:{position: new Vector3(58.529,5.8,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Window Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Window Hug R.jpg', transform:{position: new Vector3(55.029,5.8,4.205), rotation: Quaternion.Euler(360,180,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Bug Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Bug Hug L.jpg', transform:{position: new Vector3(47.439,2.4,33.755), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Bug Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Bug Hug R.jpg', transform:{position: new Vector3(51.039,2.4,33.755), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Invisible Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Invisible Hug L.jpg', transform:{position: new Vector3(47.439,5.8,33.755), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Invisible Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Invisible Hug R.jpg', transform:{position: new Vector3(51.039,5.8,33.755), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Hedge Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Hedge Hug L.jpg', transform:{position: new Vector3(54.639,2.4,33.755), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Hedge Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Hedge Hug R.jpg', transform:{position: new Vector3(58.239,2.4,33.755), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Mom Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Mom Hug L.jpg', transform:{position: new Vector3(54.639,5.8,33.755), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Mom Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Mom Hug R.jpg', transform:{position: new Vector3(58.239,5.8,33.755), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.378,2.378,1)}},

    {name:'Pug Hug L',link:'https://opensea.io/collection/hugpass', image:'images/Pug Hug L.jpg', transform:{position: new Vector3(67.739,4.3,9.655), rotation: Quaternion.Euler(0,90,180), scale: new Vector3(2.378,2.378,1)}},
    {name:'Pug Hug R',link:'https://opensea.io/collection/hugpass', image:'images/Pug Hug R.jpg', transform:{position: new Vector3(67.739,4.3,6.255), rotation: Quaternion.Euler(0,90,180), scale: new Vector3(2.378,2.378,1)}},



    //Community
    {name:'mipha',link:'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/103889178597587691510179439327881936520818446114130883894853642566651950923777', image:'images/mipha.png', transform:{position: new Vector3(63.819,3.58,37.245), rotation: Quaternion.Euler(0,270,180), scale: new Vector3(3.578,3.578,1)}},
    {name:'makeawish',link:'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/20031069321236365831181197770557521854210195573877219293630563202203289387009/', image:'images/makeawish.jpg', transform:{position: new Vector3(68.759,3.61,41.865), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(3.578,3.578,1)}},
    {name:'oceanofspace',link:'https://foundation.app/@niftySprite/surreal-universe/2', image:'images/oceanofspace.png', transform:{position: new Vector3(89.269,3.6,41.885), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(3.578,3.578,1)}},

    {name:'april15',link:'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/59838239748301082707271173184299806470506287645244438139668863304779587125249', image:'images/april15.png', transform:{position: new Vector3(94.169,3.6,37.175), rotation: Quaternion.Euler(360,90,180), scale: new Vector3(2.478,3.468,1)}},
    {name:'avril15',link:'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/18876455738713262958468306225267522229533433078294299395977476904890795032577/', image:'images/avril15.jpg', transform:{position: new Vector3(74.539,4.98,25.555), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(4.078,5.378,1)}},
    {name:'crydiamonds',link:'https://foundation.app/@ClareVonSavage/cry-2f23/3', image:'images/crydiamonds.png', transform:{position: new Vector3(83.239,4.98,25.555), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(4.378,5.178,1)}},




    //13
    {name:'clara',link:'https://foundation.app/@PowerOfWomenNFT/powerofwomen/7', image:'images/clara.png', transform:{position: new Vector3(92.239,3.5,4.255), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'478',link:'https://opensea.io/assets/0x82712d0052c6d8185383b5554a071c440b902992/478/', image:'images/478.png', transform:{position: new Vector3(95.839,3.5,4.255), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'BossBeauties',link:'https://opensea.io/assets/0xb5c747561a185a146f83cfff25bdfd2455b31ff4/8202/', image:'images/BossBeauties.png', transform:{position: new Vector3(99.439,3.5,4.255), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'sacredSkull',link:'https://opensea.io/assets/0xcf514faa49cb3133275eb4c9420e4161970ee806/2651/', image:'images/sacredSkull.png', transform:{position: new Vector3(103.039,3.5,4.255), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'eyesOfFashion',link:'https://opensea.io/assets/0xef9e3414339a236cbfc8bf84c7fac24c2513b317/3818/', image:'images/eyesOfFashion.png', transform:{position: new Vector3(106.639,3.5,4.255), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'scene0423',link:'https://opensea.io/assets/solana/3kmqwUyKdaa6BizAM55TrM9RTrWsLkgJPQWVverYXmZ3/', image:'images/scene0423.png', transform:{position: new Vector3(110.239,3.5,4.225), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(2.478,2.478,1)}},

    {name:'pixie',link:'https://opensea.io/assets/0xb67812ce508b9fc190740871032237c24b6896a0/4920/', image:'images/pixie.jpg', transform:{position: new Vector3(113.139,3.5,33.765), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'sadGirl',link:'https://opensea.io/assets/0x335eeef8e93a7a757d9e7912044d9cd264e2b2d8/4262/', image:'images/sadGirl.png', transform:{position: new Vector3(109.139,3.5,33.765), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'8sian',link:'https://opensea.io/assets/0x198478f870d97d62d640368d111b979d7ca3c38f/8350/', image:'images/8sian.png', transform:{position: new Vector3(105.139,3.5,33.765), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'meemo',link:'https://opensea.io/assets/0xa4bc3207aa638a30a3cc6a23e71e311bfc7bf689/3062/', image:'images/meemo.png', transform:{position: new Vector3(101.139,3.5,33.765), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.478,2.478,1)}},
    {name:'botanist',link:'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/30089999654552591915784850243276809002133994391070867055332829667442416418817/', image:'images/botanist.png', transform:{position: new Vector3(97.139,3.5,33.765), rotation: Quaternion.Euler(0,360,180), scale: new Vector3(2.478,2.478,1)}},

    {name:'rainbow',link:'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/68453999623015536031728098985035135354965335863063356524046863322440498413569/', image:'images/rainbow.png', transform:{position: new Vector3(90.239,3.5,7.905), rotation: Quaternion.Euler(360,270,180), scale: new Vector3(2.478,2.478,2)}},
    {name:'girlie',link:'https://opensea.io/assets/0x4f7e2a72a99d45f4fd5a2fc211f8dc5c36a049bd/3955/', image:'images/girlie.png', transform:{position: new Vector3(114.049,3.5,6.005), rotation: Quaternion.Euler(0,135,180), scale: new Vector3(2.478,2.478,2)}},






  ],

  videonfts:[
        
     {
        frame: new GLTFShape(""),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("images/HUG.png"),
        thumbNail: (''),
        video: new VideoClip("https://player.vimeo.com/external/703230777.m3u8?s=8fd949e7f3f12b517a46bc0f1ce3430efcbd4faf"),
        transform: new Transform({position: new Vector3(78.849,5.1,25.155), rotation: Quaternion.Euler(360,360,0), scale: new Vector3(14.5,8.19,1)}),
        trigger: new utils.TriggerBoxShape(new Vector3(97, 7, 40), new Vector3(0,-1,-2)),
        title: "Video",
        artist: '',
        link: "",
      },
 

]

}
