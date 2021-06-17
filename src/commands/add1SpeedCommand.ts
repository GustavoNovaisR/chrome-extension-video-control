import { SenderMessage } from "../dir_shared/interfaces/SenderMessage.interface"

(() => {
    const videos = new Set<HTMLVideoElement>()
    let playbackRate
    const allTagsVideo = (<HTMLVideoElement[]><any>document.getElementsByTagName('video'))
    const secChanging = 1
    const maxSpeed = 10
    const checkLogic = (video: HTMLVideoElement) => ((maxSpeed - secChanging) > video.playbackRate)

    for (let videoTag of allTagsVideo) {
        videos.add(videoTag)
    }

    for (let video of videos) {
        if (checkLogic(video)) {
            video.playbackRate += secChanging
        } else {
            video.playbackRate = maxSpeed
        }

        playbackRate = video.playbackRate
    }

    if (playbackRate) {
        const message: SenderMessage = {
            type: 'updatePlaybackRate',
            payload: playbackRate.toString(),
        }
        chrome.runtime.sendMessage(message);

        chrome.storage.sync.set({
            ['speed']: message.payload
        });
    }
})()
