import resources from "./resources"
import { loadPictures } from "./modules/nftBuilder"
import { basicPicture } from "./modules/pictures"
import { VideoFrame } from "./modules/videoFrame"
import { videoData } from "./modules/videoData"

const building = new Entity()
building.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
)
building.addComponent(resources.models.building)
engine.addEntity(building)

// Music
const streamSource = new Entity()
streamSource.addComponent(
  new AudioStream("https://streaming.radionomy.com/JamendoLounge")
)
streamSource.getComponent(AudioStream).volume = 0.075
engine.addEntity(streamSource)

// Videos
for (let i = 0; i < videoData.length; i++) {
  const videoFrame = new VideoFrame(
    videoData[i].frame,
    videoData[i].frameSize,
    videoData[i].still,
    videoData[i].thumbNail,
    videoData[i].video,
    videoData[i].transform,
    videoData[i].trigger,
    videoData[i].title,
    videoData[i].artist,
    videoData[i].link,
  )
}

// Pictures
//loadPictures(building)

//create new picture object with parameters: image file path, position vector, Y rotation, X scale, Y scale, link URL, Title, Artist, Model
//----------------------------
let SonarDespierto = new basicPicture('images/SonarDespierto_orig.png', 'images/SonarDespierto_thumbnail.png', new Vector3(50.5,3.8,4.2), 180,  2.5, 3, 2.0, 'https://superrare.com/artwork-v2/so%C3%B1ar-despierto-27345', 'SOÑAR DESPIERTO', 'by Facu')
let Submerged = new basicPicture('images/Submerged.jpg', 'images/Submerged_thumbnail.jpg', new Vector3(55.76,3.8,33.75), 0,  8.1, 3, 2.0, 'https://superrare.com/artwork-v2/submerged-27100', 'Submerged', 'by Milton Sanz')
let Mamihlapinatapai = new basicPicture('images/Mamihlapinatapai.png', 'images/Mamihlapinatapai_thumbnail.png', new Vector3(46.5,3.8,33.75), 0,  2.5, 3, 2.0, 'https://superrare.com/artwork-v2/mamihlapinatapai-26402', 'Mamihlapinatapai', 'by Milton Sanz')
let SpiritualRebirth = new basicPicture('images/SpiritualRebirth.jpg', 'images/SpiritualRebirth_thumbnail.jpg', new Vector3(98.8,3.8,4.2), 180,  2.5, 2.875, 2.0, 'https://makersplace.com/debbiehdigital/spiritual-rebirth-1-of-1-80764/', 'Spiritual Rebirth', 'by Debbie Digital')
let rinii = new basicPicture('images/rin(ii)_v01.png', 'images/rin(ii)_v01_thumbnail.png', new Vector3(103.8,3.8,4.2), 180,  2.5, 3.825, 2.0, 'https://knownorigin.io/gallery/2343000-rin-ii-luluxxx', 'rin(ii)', 'by LuluxXX & Riniifish')
let Eternity = new basicPicture('images/Eternity.png', 'images/Eternity_thumbnail.png', new Vector3(97.5,3.8,33.75), 0,  2.5, 4.425, 2.0, 'https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-3276', 'Eternity', 'by Sparrow')
let AncientGallery = new basicPicture('images/AncientGallery.jpg', 'images/AncientGallery_thumbnail.jpg', new Vector3(107.5,3.8,33.75), 0,  2.5, 2.5, 2.0, 'https://superrare.com/artwork-v2/ancient-gallery--28790', 'Ancient Gallery', 'by Killer Acid')
let Astraglade = new basicPicture('images/Astraglade_v01.png', 'images/Astraglade_thumbnail.png', new Vector3(78.4,5.2,25.1), 0,  4.375 * 0.8, 2.5 * 0.8, 2.0, 'https://nurecas.github.io/planets/', 'Astraglade', 'by Fabin Rasheed')
let Astraglade2 = new basicPicture('images/Astraglade_v02.png', 'images/Astraglade_thumbnail.png', new Vector3(78.4,2.7,25.1), 0,  4.375 * 0.8, 2.5 * 0.8, 2.0, 'https://nurecas.github.io/planets/', 'Astraglade', 'by Fabin Rasheed')
let Astraglade3 = new basicPicture('images/Astraglade_v03.png', 'images/Astraglade_thumbnail.png', new Vector3(78.4,7.7,25.1), 0,  4.375 * 0.8, 2.5 * 0.8, 2.0, 'https://nurecas.github.io/planets/', 'Astraglade', 'by Fabin Rasheed')
let FortuneTellingBird20 = new basicPicture('images/FortuneTellingBird20.jpg', 'images/FortuneTellingBird20_thumbnail.jpg', new Vector3(103.68,3.8,14.25), 90,  2.5, 2.5, 2.0, 'https://async.art/zh/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-2889?1629791698866', 'Fortune Telling Bird 2.0', 'by IOYOI')
let ChildrenOfSpace = new basicPicture('images/ChildrenOfSpace.jpg', 'images/ChildrenOfSpace_thumbnail.jpg', new Vector3(103.68,3.8,24.25), 90,  2.5, 2.5, 2.0, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/37724347662963635848339696881091927783627379649293885295953155393587333038081/', 'Children Of Space', 'by Tonran')
let TimeCurrents = new basicPicture('images/TimeCurrents.png', 'images/TimeCurrents_thumbnail.png', new Vector3(72.3,5,25.1), 0,  4.375 * 0.8, 2.5 * 0.8, 2.0, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/92854960588464254555946828023973119272598955986146577935146406044824070258689/', 'Time Currents', 'by metaSynth')
let CyberWonderWoman = new basicPicture('images/CyberWonderWoman.png', 'images/CyberWonderWoman_thumbnail.png', new Vector3(90.6,3.775,8), -90,  2.5, 3.825, 2.0, 'https://opensea.io/assets/0x4690b1efab2ea1232fb95a89e175abd3331b0f62/5', 'Cyber Wonder Woman', 'by TingSong')
let CrashingIntoMotherboard = new basicPicture('images/CrashingIntoMotherboard.png', 'images/CrashingIntoMotherboard_thumbnail.png', new Vector3(75,5,25.6), 180,  4.425 * 1.2, 2.5 * 1.2, 2.0, 'https://superrare.com/artwork-v2/crashing-into-motherboard---%E6%92%9E%E4%B8%8A%E4%B8%BB%E6%A9%9F%E6%9D%BF-28937', 'Crashing Into Motherboard', 'Rutger Van Der Tas & IOYOI')
let UniversalPlaygroundUnderFire = new basicPicture('images/UniversalPlaygroundUnderFire.png', 'images/UniversalPlaygroundUnderFire_thumbnail.png', new Vector3(83,5,25.6), 180,  4.425 * 1.2, 2.5 * 1.2, 2.0, 'https://superrare.com/artwork-v2/universal-playground-under-fire.---%E9%81%8A%E6%A8%82%E5%A0%B4%E5%8F%97%E5%88%B0%E6%8A%A8%E6%93%8A-28943', 'Universal Playground Under Fire', 'Rutger Van Der Tas & IOYOI')