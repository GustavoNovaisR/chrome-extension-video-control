import { SenderMessage } from "../dir_shared/interfaces/SenderMessage.interface"

(() => {
    const videos = new Set<HTMLVideoElement>()
    let playbackRate
    const allTagsVideo = (<HTMLVideoElement[]><any>document.getElementsByTagName('video'))

    for (let videoTag of allTagsVideo) {
        videos.add(videoTag)
    }

    for (let video of videos) {
        (video.paused) ? video.play() : video.pause()

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