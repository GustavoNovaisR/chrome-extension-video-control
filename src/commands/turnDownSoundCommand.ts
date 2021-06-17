import { SenderMessage } from "../dir_shared/interfaces/SenderMessage.interface"

(() => {
    const videos = new Set<HTMLVideoElement>()
    let playbackRate
    const allTagsVideo = (<HTMLVideoElement[]><any>document.getElementsByTagName('video'))
    const volChanging = 0.05
    const checkLogic = (video: HTMLVideoElement) =>
        ((volChanging) < video.volume)

    for (let videoTag of allTagsVideo) {
        videos.add(videoTag)
    }

    for (let video of videos) {
        if (checkLogic(video)) {
            video.volume -= volChanging
        } else {
            video.volume = 0
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