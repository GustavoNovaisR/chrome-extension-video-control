import { Hotkeys } from "./dir_shared/interfaces/hotkeys.interface"
import { constants } from "./dir_shared/constants"
import { SenderMessage } from "./dir_shared/interfaces/SenderMessage.interface"

const hotkeys = Object.keys(constants.hotkeys) as Hotkeys[]

console.log('initializing contentScript ....');

// Restore playBackRate in storage extension
chrome.storage.sync.get(constants.speedStorageName, ({ speed }) => {
    const videos = new Set<HTMLVideoElement>()
    const allTagsVideo = (<HTMLVideoElement[]><any>document.getElementsByTagName('video'))

    for (let videoTag of allTagsVideo)
        videos.add(videoTag)
    for (let video of videos)
        video.playbackRate = speed
});


// The "hotkeys" were inspired by the 'youtube hotkeys.' that's why I decided to disable them if the site was youtube. 
// As "hotkeys" foram inspiradas nas 'hotkeys do youtube". por isso eu resolvi desativa-las se o site fosse do youtube. Para que não houvesem eventos duplicados
const URL = ()=> window.location.href
const isYoutube = URL().match(/^https:\/\/(www.)?(youtube).(com)/)//\/(watch)+(\?v=)

if (!isYoutube) {

    // Keypress Events
    document.onkeydown = (keyDownEvent) => {
        // checkers 
        const isTypingInInput: boolean = (document.activeElement?.tagName === 'INPUT')
        const isTypingInTextarea: boolean = (document.activeElement?.tagName === 'TEXTAREA')
        const isDocumentFocus: boolean = document.hasFocus()

        if (isTypingInInput) return
        if (isTypingInTextarea) return
        if (!isDocumentFocus) return

        const keyName = keyDownEvent.key.toLowerCase() as Hotkeys | string

        if (!(hotkeys as Array<Hotkeys | string>).includes(keyName)) return

        const keypress: SenderMessage = {
            type: 'keypress',
            payload: keyName,
            tabId: undefined // tabID is sent by variable "Sender" 
        }
        //sender
        chrome.runtime.sendMessage(keypress)
    }
}




