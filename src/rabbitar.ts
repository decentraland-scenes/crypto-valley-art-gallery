

import * as utils from '@dcl/ecs-scene-utils'
import { isPreviewMode } from '@decentraland/EnvironmentAPI'
import * as crypto from '@dcl/crypto-scene-utils'
import { hud } from './builderhud/BuilderHUD'
import resources from './modules/resources'
import { getUserData } from '@decentraland/Identity'

export let nfts:any[] = []
export let holder = false
export let personal: Entity
export let holdertimer: Entity
export let rabbitwall:Entity
export let userData:any

export let galleryMusic: any


export async function createRabbitar(parent: Entity){
    log('here')

    userData = await getUserData()
    log(userData)

    // Music
    galleryMusic = new Entity()
    galleryMusic.addComponent(
    new AudioStream("https://streaming.radionomy.com/JamendoLounge")
    )
    galleryMusic.getComponent(AudioStream).volume = 0.075
    engine.addEntity(galleryMusic)

    let texture = new Texture("images/rabbitar.png")
    rabbitwall = new Entity("Rabbit Wall")
    rabbitwall.addComponent(new PlaneShape())
    rabbitwall.addComponent(new Transform({position: new Vector3(104,6.6,19), rotation: Quaternion.Euler(0,90,180), scale: new Vector3(30,13,1)}))
    rabbitwall.addComponent(new Material())
    rabbitwall.getComponent(Material).albedoTexture = texture
    rabbitwall.getComponent(Material).alphaTexture = texture
    rabbitwall.getComponent(Material).emissiveTexture = texture
    rabbitwall.getComponent(Material).emissiveIntensity = 1
    rabbitwall.getComponent(Material).emissiveColor = Color3.White()
    rabbitwall.getComponent(Material).roughness = 0.6
    //rabbitwall.getComponent(PlaneShape).withCollisions = false
    rabbitwall.setParent(parent)
    hud.attachToEntity(rabbitwall)


    for(var i = 0; i < resources.nfts.length; i++){
        let nft = new Entity("nft-"+i)
        nft.addComponent(new NFTShape("ethereum://0x65c234d041f9ef96e2f126263727dfa582206d82/0"))
        nft.addComponent(new Transform(resources.nfts[i]))
        nft.setParent(parent)
        nfts.push(nft)
        hud.attachToEntity(nft)
    }


    holdertimer = new Entity()
    engine.addEntity(holdertimer)
    holdertimer.addComponent(new utils.Interval(1000,()=>{
        if(!holder){
            checkNFTHolder()
        }
    }))
    

    let nfttimer = new Entity()
    engine.addEntity(nfttimer)
    nfttimer.addComponent(new utils.Interval(1000,()=>{

        if(Math.floor(Date.now()/1000) >= 1){
            log('nft are revealed')
            engine.removeEntity(nfttimer)

            let refreshrate = new Entity()
            engine.addEntity(refreshrate)
            refreshrate.addComponent(new utils.Interval(10000,()=>{
                refreshNFTs()
            }))
        }
    }))

    personal = new Entity("personal")
    personal.addComponent(new NFTShape("ethereum://0x65c234d041f9ef96e2f126263727dfa582206d82/0"))
    personal.addComponent(new Transform(resources.personal))
    personal.setParent(parent)
    hud.attachToEntity(personal)


    let musictrigger = new Entity("music trigger")
    //musictrigger.addComponent(new BoxShape())
    musictrigger.addComponent(new Transform({position: new Vector3(113.1,3,19.36), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(18,5,31)}))
    musictrigger.setParent(parent)
    musictrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(18,5,31), new Vector3(0,0,0)),{
        enableDebug: false,
        onCameraEnter:()=>{
            log('stop gallery music, play private party music')
            galleryMusic.addComponentOrReplace(
                new AudioStream("https://radio1.streamserver.link/radio/8010/100hit-aac")
                )
                galleryMusic.getComponent(AudioStream).volume = 0.1

        },
        onCameraExit:()=>{
            log('stop party music, play gallery music')
            galleryMusic.addComponentOrReplace(
                new AudioStream("https://streaming.radionomy.com/JamendoLounge")
                )
                galleryMusic.getComponent(AudioStream).volume = 0.075

        }
    }))
    hud.attachToEntity(musictrigger)
    
}

export function refreshNFTs(){
    for(var i = 0; i < nfts.length; i++){
        let rand =  Math.floor(Math.random() * (11952 - 0 + 1) + 0)
        nfts[i].addComponentOrReplace(new NFTShape("ethereum://0x65c234d041f9ef96e2f126263727dfa582206d82/"+rand))
    }
}

Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, ()=>{
    log('position', Camera.instance.position)
})

export async function checkNFTHolder(){
    userData = await getUserData()
    if(userData.hasConnectedWeb3){
        holder = await crypto.nft.checkTokens('0x65c234d041f9ef96e2f126263727dfa582206d82')
        //log("rabbitar ", holder)
      
        if (await isPreviewMode() || holder) {
         // log('is preview mode')
          engine.removeEntity(holdertimer)
          rabbitwall.getComponent(PlaneShape).withCollisions = false

          getRandomRabbitar()
        }
    }
    else{
      //  log('not web 3')
        engine.removeEntity(holdertimer)
    }

}

export async function getRandomRabbitar(){
const uri = 'https://api.opensea.io/api/v1/assets?owner='+ userData.publicKey+'&order_direction=desc&offset=0&limit=20&collection=playboyrabbitars';

let tokens = []
    fetch(uri)
    .then(res => res.json())
    .then((json) => {
            let data = json
            let assets = data.assets;
            if(assets.length != 0) {
                for(var i = 0;i< assets.length;i++) {
                 // log("token id is", assets[i].token_id)
                  tokens.push(assets[i].token_id)
                }
            }
    }).then(()=>{
        if(tokens.length > 0){
            //log('we have some tokens')
            let rand =  Math.floor(Math.random() * (tokens.length -1 - 0 + 1) + 0)
            //log('showing token id for', rand)
            personal.addComponentOrReplace(new NFTShape("ethereum://0x65c234d041f9ef96e2f126263727dfa582206d82/"+rand))
        }
    })
}