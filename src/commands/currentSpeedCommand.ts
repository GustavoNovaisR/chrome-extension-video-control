import { SenderMessage } from "../dir_shared/interfaces/SenderMessage.interface"

(() => {
    chrome.storage.sync.get('speed',
        ({ speed }) => {
            const videos = new Set<HTMLVideoElement>()
            let atualSpeed
            let playbackRate

            atualSpeed = parseFloat(speed)
            const allTagsVideo = (<HTMLVideoElement[]><any>document.getElementsByTagName('video'))

            for (let videoTag of allTagsVideo) {
                videos.add(videoTag)
            }
            if (atualSpeed) {
                for (let video of videos) {
                    video.playbackRate = atualSpeed
                    playbackRate = video.playbackRate
                }
                if (playbackRate) {
                    console.log('playbackRate>>>>>', playbackRate)
                    const message: SenderMessage = {
                        type: 'updatePlaybackRate',
                        payload: playbackRate.toString(),
                    }
                    chrome.runtime.sendMessage(message);
                    console.log('EXECUTOU O CURRENT SPEED')
                }
            }
        }
    );


})()

