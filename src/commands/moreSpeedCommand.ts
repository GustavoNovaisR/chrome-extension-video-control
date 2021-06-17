import { SenderMessage } from "../dir_shared/interfaces/SenderMessage.interface"

(() => {
    const videos = new Set<HTMLVideoElement>()
    let playbackRate
    const allTagsVideo = (<HTMLVideoElement[]><any>document.getElementsByTagName('video'))

    const secChanging = 0.25
    const maxSpeed = 10
    const checkLogic = (video: HTMLVideoElement) => ((maxSpeed - secChanging) > video.playbackRate)

    for (let videoTag of allTagsVideo) {
        videos.add(videoTag)
    }

    for (let video of videos) {

        if (checkLogic(video)) {
            video.playbackRate += secChanging
        }

        playbackRate = video.playbackRate
    }
    if (playbackRate) {

        const message: SenderMessage = {
            type: 'updatePlaybackRate',
            payload: playbackRate.toString(),
        }
        console.log('message ConstenScript :>> ', message);
        chrome.storage.sync.set({
            ['speed']: message.payload
        });
        chrome.runtime.sendMessage(message);
    }
})()