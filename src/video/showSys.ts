//import { pivotScene } from "../scenePivot"
import * as utils from '@dcl/ecs-scene-utils'
//import { centerScene } from '../../pivot'
//import config from '../config'
import { showData } from './scheduleSetup'

export class ShowSystem {
    videoTexture: VideoTexture = new VideoTexture(new VideoClip(""))
    videoMaterial: Material = new Material()

    videoThumbnail: Texture = new Texture("resources/video_thumbnail.png")
    thumbnailMaterial: Material = new Material()

    screen: Entity
    screen2: Entity

    days: any[] = []
    started = false
    intermissionStarted = false
    day: any
    mainShow: any

    seekTime: number = 0

    constructor(days: any) {
        this.setupVideoScreen()
        this.days = days
        //engine.addSystem(this)

        Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, (e) => {
            let nextshow = Math.round((this.day.shows[0].startTime - Date.now() / 1000) / 60)
            log('NEXT SHOW IN: ', nextshow, "mins", this.day.shows[0].startTime, Date.now() / 1000)
            log(Camera.instance.position)
        })
    }

    setupVideoScreen() {
        this.videoMaterial.albedoTexture = this.videoTexture
        this.videoMaterial.emissiveTexture = this.videoTexture
        this.videoMaterial.emissiveColor = Color3.White()
        this.videoMaterial.emissiveIntensity = 1.2
        this.videoMaterial.roughness = 0.6

        this.thumbnailMaterial.albedoTexture = this.videoThumbnail
        this.thumbnailMaterial.specularIntensity = 0
        this.thumbnailMaterial.metallic = 0
        this.thumbnailMaterial.roughness = 1
        this.thumbnailMaterial.emissiveTexture = this.videoThumbnail
        this.thumbnailMaterial.emissiveIntensity = 0.75
        this.thumbnailMaterial.emissiveColor = Color3.White()
        this.thumbnailMaterial.transparencyMode = TransparencyMode.ALPHA_BLEND


        this.screen = new Entity()
        this.screen.addComponent(new PlaneShape())
        this.screen.addComponent(new Transform({
            position: new Vector3(115.861, 9.49419, 21.4056),
            scale: new Vector3(6.2 * 1.78, 6.2, 1),
            rotation: Quaternion.Euler(0, -90, 0)
        }))
        this.screen.addComponent(this.videoMaterial)
        engine.addEntity(this.screen)
        //screen.setParent(centerScene)

        this.screen2 = new Entity()
        this.screen2.addComponent(new PlaneShape())
        this.screen2.addComponent(new Transform({
            position: new Vector3(42.1223, 9.49419, 21.4056),
            scale: new Vector3(6.2 * 1.78, 6.2, 1),
            rotation: Quaternion.Euler(0, 90, 0)
        }))
        this.screen2.addComponent(this.videoMaterial)
        engine.addEntity(this.screen2)
    }

    addSystem() {
        log("ADD RUN SHOW SYSTEM")
        this.videoTexture.playing = true
        this.started = false
        this.intermissionStarted = false
        engine.addSystem(this)
    }

    removeSystem() {
        log("REMOVE RUN SHOW SYSTEM")
        this.videoTexture.playing = false
        engine.removeSystem(this)
    }

    update(dt: number) {
        if (this.days.length > 0) {
            this.day = this.days[0]
            let now = Math.floor(Date.now() / 1000)

            if (this.day.shows.length > 0) {
                let start = this.day.start

                if (now >= start) {
                    if (now >= this.day.shows[0].startTime + this.day.shows[0].length) {
                        log('we went past show, load another')

                        this.day.shows.shift()
                        this.started = false
                    }
                    else {
                        if (now >= this.day.shows[0].startTime) {
                            //log('show hasnt started, need to play blank video: ', this.day.shows[0])
                            if (!this.started) {
                                this.started = true
                                this.intermissionStarted = false
                                this.seekTime = now - this.day.shows[0].startTime

                                log('starting show', this.day.shows[0], "at seconds: ", this.seekTime)
                                
                                if (this.seekTime > 5) {
                                    log('starting show', this.day.shows[0], "at seconds: ", this.seekTime)
                                    this.playVideo(this.day.shows[0], this.seekTime)
                                }
                                else {
                                    this.playVideo(this.day.shows[0], 0)
                                }
                                
                                //this.playVideo(this.day.shows[0])
                            }
                        }
                        else {
                            //log('show hasnt started, need to play blank video: ', this.day.intermission)
                            if (!this.intermissionStarted) {
                                this.intermissionStarted = true
                                log("next show: ", this.day.shows[0])
                                this.playIntermission(this.day.intermission)
                            }
                        }
                    }
                }
                else {
                    log('in between days, need to show something: ', this.day.intermission)
                    if (!this.intermissionStarted) {
                        this.intermissionStarted = true
                        this.playIntermission(this.day.intermission)
                    }
                }
            }
            else {
                log('we ran out of shows for the day')
                if (this.days.length > 1) {
                    if (now >= this.days[1].start) {
                        log("remove day and continue on")
                        this.days.shift()
                    }
                }
                else if (this.days.length === 1) {
                    log("this is last day")
                    this.days.shift()
                }
            }
        }
        else {
            log("no more days, stop system")
            engine.removeSystem(this)
            if (!this.intermissionStarted) {
                this.intermissionStarted = true
                this.playIntermission(this.day.intermission)
            }
        }
    }

    playIntermission(intermission: any) {
        //log('play intermission')//, intermission)
        //this.playVideo({ link: intermission })
        this.screen.addComponentOrReplace(this.thumbnailMaterial)
        this.screen2.addComponentOrReplace(this.thumbnailMaterial)

        this.screen.getComponent(Transform).scale = new Vector3(6.2 * 1.78, -6.2, 1)
        this.screen2.getComponent(Transform).scale = new Vector3(6.2 * 1.78, -6.2, 1)

        this.videoTexture.playing = true
        this.videoTexture.loop = true
    }

    playVideo(show: any, seekTime:number = 0) {
        //log('play main show')//, show)
        this.screen.addComponentOrReplace(this.videoMaterial)
        this.screen2.addComponentOrReplace(this.videoMaterial)

        this.screen.getComponent(Transform).scale = new Vector3(6.2 * 1.78, 6.2, 1)
        this.screen2.getComponent(Transform).scale = new Vector3(6.2 * 1.78, 6.2, 1)

        this.videoTexture.playing = false
        this.videoTexture.loop = false
        this.videoTexture = new VideoTexture(new VideoClip(show.link))
        this.videoMaterial.albedoTexture = this.videoTexture
        this.videoMaterial.emissiveTexture = this.videoTexture
        this.videoMaterial.emissiveIntensity = 0.8
        this.videoMaterial.emissiveColor = Color3.White()
        this.videoTexture.playing = true
        this.videoTexture.seekTime(seekTime)
    }
}


//video
//let videoTexture = new VideoTexture(new VideoClip(""))
//videoTexture.loop = true
//videoTexture.playing = false
//videoTexture.volume = config.video.volume



let runShow = new ShowSystem(showData)

let videoTrigger = new Entity()
videoTrigger.addComponent(new Transform({
    position: Vector3.Zero()
}))
let triggerBox = new utils.TriggerBoxShape(new Vector3(97.6456, 20, 38.0203), new Vector3(78.9162, 10, 22.9889))//Vector3.Zero())
videoTrigger.addComponent(new utils.TriggerComponent(
    triggerBox,
    {
        enableDebug: false,
        onCameraEnter: () => {
            runShow.addSystem()
            //videoTexture.playing = true
        },
        onCameraExit: () => {
            runShow.removeSystem()
            //videoTexture.playing = false
        }
    }
))
//videoTrigger.setParent(centerScene)
engine.addEntity(videoTrigger)