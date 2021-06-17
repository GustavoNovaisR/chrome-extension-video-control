import { SenderMessage } from "../dir_shared/interfaces/SenderMessage.interface"

(() => {
    const videos = new Set<HTMLVideoElement>()
    let playbackRate
    const allTagsVideo = (<HTMLVideoElement[]><any>document.getElementsByTagName('video'))
    const secChanging = 10
    const checkLogic = (video: HTMLVideoElement) => ((secChanging) < video.currentTime)

    for (let videoTag of allTagsVideo) {
        videos.add(videoTag)
    }

    for (let video of videos) {

        if (checkLogic(video)) {
            video.currentTime -= secChanging
        } else {
            video.currentTime = 0
        }

        playbackRate = video.playbackRate
    }
    if (playbackRate) {
        
        const message: SenderMessage = {
            type: 'updatePlaybackRate',
            payload: playbackRate.toString(),
        }
        chrome.runtime.sendMessage(message);
    }
})()