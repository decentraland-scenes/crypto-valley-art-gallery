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

    //Non Bar Left Wall
    {artist:'Edward Bowen', title:'Unknown', origin:'Trinidad & Tobago', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/1.png', thumbnail:'resources/1thumb.png', transform:{position: new Vector3(49.1,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Edward Bowen', title:'Edge of the White Forest', origin:'Trinidad & Tobago', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/2.png', thumbnail:'resources/2thumb.png', transform:{position: new Vector3(54.1,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Edward Bowen', title:'Hed', origin:'Trinidad & Tobago', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/3.png', thumbnail:'resources/3thumb.png', transform:{position: new Vector3(59.1,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Edward Bowen', title:'Diptych', origin:'Trinidad & Tobago', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/4.png', thumbnail:'resources/4thumb.png', transform:{position: new Vector3(64.1,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
 
    //Non Bar Right Wall
    {artist:'Black Bird (Ronald Cyrille)', title:'Caribbean Lovers', origin:'Guadeloupe', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/5.png', thumbnail:'resources/5thumb.png', transform:{position: new Vector3(45.4,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Black Bird (Ronald Cyrille)', title:'Suspension', origin:'Guadeloupe', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/6.png', thumbnail:'resources/6thumb.png', transform:{position: new Vector3(50.4,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Black Bird (Ronald Cyrille)', title:'Untitled', origin:'Guadeloupe', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/7.png', thumbnail:'resources/7thumb.png', transform:{position: new Vector3(55.4,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Black Bird (Ronald Cyrille)', title:'Cultivez Garden', origin:'Guadeloupe', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/8.png', thumbnail:'resources/8thumb.png', transform:{position: new Vector3(60.4,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},

    //Middle Wall Main Area
    {artist:'La Ninfaaa (Sofia Maldonado)', title:'Unity', origin:'Puerto Rico & Cuba', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/9.png', thumbnail:'resources/9thumb.png', transform:{position: new Vector3(71.5,3.2,25.12), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'La Ninfaaa (Sofia Maldonado)', title:'Beauty', origin:'Puerto Rico & Cuba', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/10.png', thumbnail:'resources/10thumb.png', transform:{position: new Vector3(76.5,3.2,25.12), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Carlos Davila Rinaldi', title:'Ensamble', origin:'Puerto Rico', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/11.png', thumbnail:'resources/11thumb.png', transform:{position: new Vector3(81.5,3.2,25.12), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Carlos Davila Rinaldi', title:'Patidifusx', origin:'Puerto Rico', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/12.png', thumbnail:'resources/12thumb.png', transform:{position: new Vector3(86.5,3.2,25.12), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},

    //Bar Left Wall
    {artist:'Isabel Berenos', title:'Concha Shell', origin:'Curaçao', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/13.png', thumbnail:'resources/13thumb.png', transform:{position: new Vector3(97.6,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Dominique Hunter', title:'Look-out (Dusk)', origin:'Guyana', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/14.png', thumbnail:'resources/14thumb.png', transform:{position: new Vector3(102.6,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Calvert Jones', title:'The Holy Herb', origin:'St. Vincent & the Grenadines', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/15.png', thumbnail:'resources/15thumb.png', transform:{position: new Vector3(107.6,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Karly', title:'The River', origin:'Jamaica', link:'https://expressions.com', info:'Dropping on Expressions.com April 18', image:'resources/16.png', thumbnail:'resources/16thumb.png', transform:{position: new Vector3(112.6,3,33.76), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    
    //Bar Right Wall
    {artist:'Yeabtsega Getachew', title:'Queen of ...', origin:'Ethiopia', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/17.png', thumbnail:'resources/17thumb.png', transform:{position: new Vector3(93.7,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Yeabtsega Getachew', title:'Untitled', origin:'Ethiopia', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/18.png', thumbnail:'resources/18thumb.png', transform:{position: new Vector3(98.7,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Mark Eyafa', title:'Reality', origin:'Cameroon', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/19.png', thumbnail:'resources/19thumb.png', transform:{position: new Vector3(103.7,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Mark Eyafa', title:'No Name', origin:'Cameroon', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/20.png', thumbnail:'resources/20thumb.png', transform:{position: new Vector3(108.7,3,4.2), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},

    //Middle Wall Small Area
    {artist:'Oluwafunke Oladimeji', title:'Lagos River Scene', origin:'Nigeria', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/21.png', thumbnail:'resources/21thumb.png', transform:{position: new Vector3(71.5,3.2,25.54), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Oluwafunke Oladimeji', title:'Unknown', origin:'Nigeria', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/22.png', thumbnail:'resources/22thumb.png', transform:{position: new Vector3(76.5,3.2,25.54), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Themanyphacedgod (Samuel Blankson)', title:'Fighting My Demons', origin:'Ghana', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/23.png', thumbnail:'resources/23thumb.png', transform:{position: new Vector3(81.5,3.2,25.54), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},
    {artist:'Harry Odunze', title:'Myth5', origin:'Nigeria', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/24.png', thumbnail:'resources/24thumb.png', transform:{position: new Vector3(86.5,3.2,25.54), rotation: Quaternion.Euler(0,180,180), scale: new Vector3(3,3,2)}},

    //Small Area Excess 4 Images
    {artist:'Nkosana', title:'Stunna', origin:'South Africa', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/25.png', thumbnail:'resources/25thumb.png', transform:{position: new Vector3(63.82,3.2,37.24), rotation: Quaternion.Euler(0,270,180), scale: new Vector3(3,3,2)}},
    {artist:'Joyce Jazz', title:'Untitled', origin:'Angola', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/26.png', thumbnail:'resources/26thumb.png', transform:{position: new Vector3(68.8,3.2,41.84), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    {artist:'Denzel Muhumuza', title:'Matriarchy', origin:'Uganda', link:'https://expressions.com', info:'Dropping on Expressions.com this summer', image:'resources/27.png', thumbnail:'resources/27thumb.png', transform:{position: new Vector3(89.25,3.2,41.84), rotation: Quaternion.Euler(0,0,180), scale: new Vector3(3,3,2)}},
    //{artist:'Humberto Diaz', title:'Blue Meristy', origin:'Cuba', link:'https://expressions.com', info:'Write stuff here', image:'resources/28.png', thumbnail:'resources/28thumb.png', transform:{position: new Vector3(94.17,3.2,37.24), rotation: Quaternion.Euler(0,90,180), scale: new Vector3(3,3,2)}},

    //Main Area Excess 2 Images
    //{artist:'29', title:'', origin:'', link:'https://expressions.com', info:'Write stuff here', image:'resources/29.png', thumbnail:'resources/29thumb.png', transform:{position: new Vector3(67.7,3,8), rotation: Quaternion.Euler(0,90,180), scale: new Vector3(3,3,2)}},
    //{artist:'30', title:'', origin:'', link:'https://expressions.com', info:'Write stuff here', image:'resources/30.png', thumbnail:'resources/30thumb.png', transform:{position: new Vector3(90.24,3,8), rotation: Quaternion.Euler(0,270,180), scale: new Vector3(3,3,2)}},

  ],

   videonfts:[
        
      {
        frame: new GLTFShape("models/videoFrame.glb"),
        frameSize: new Vector3(1, 1, 1),
        still: new Texture("resources/blueMeristy.png"),
        thumbnail: ('resources/blueMeristythumb.png'),
        video: new VideoClip("https://player.vimeo.com/external/814273449.m3u8?s=597f6fb48d396377c65d5575c5b4eac70f4861d9"),
        transform: new Transform({position: new Vector3(94.17,3.5,37.24), rotation: Quaternion.Euler(0,90,0), scale: new Vector3(5,5,2)}),
        trigger: new utils.TriggerBoxShape(new Vector3(6, 6, 4), new Vector3(-3,-2,0)),
        title: "Blue Meristy",
        artist: 'Humberto Diaz',
        origin: 'Cuba',
        link: "https://expressions.com",
        info: 'Dropping on Expressions.com April 18'
      },
 

]

}
