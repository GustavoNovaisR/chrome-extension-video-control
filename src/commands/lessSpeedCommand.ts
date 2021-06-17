import { SenderMessage } from "../dir_shared/interfaces/SenderMessage.interface"

(() => {
    const videos = new Set<HTMLVideoElement>()
    let playbackRate
    const allTagsVideo = (<HTMLVideoElement[]><any>document.getElementsByTagName('video'))

    const secChanging = 0.25
    const checkLogic = (video: HTMLVideoElement) => ((secChanging) < video.playbackRate)

    for (let videoTag of allTagsVideo) {
        videos.add(videoTag)
    }

    for (let video of videos) {
        if (checkLogic(video)) {
            video.playbackRate -= secChanging
        }
        playbackRate = video.playbackRate
    }

    if (playbackRate) {
        const message: SenderMessage = {
            type: 'updatePlaybackRate',
            payload: playbackRate.toString(),
        }

        chrome.storage.sync.set({
            ['speed']: message.payload
        });
        chrome.runtime.sendMessage(message);
    }
})()