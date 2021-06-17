type SenderMessage = SenderMessageKeypress | SenderMessageCommand | SenderMessageUpdatePlaybackRate | SenderMessageIframesRequest

interface SenderMessageKeypress {
    type: 'keypress'
    payload: string
    tabId?: number | undefined;
}
interface SenderMessageCommand {
    type: 'command'
    payload: string
    tabId?: number | undefined;
}
interface SenderMessageUpdatePlaybackRate {
    type: 'updatePlaybackRate'
    payload: string
    tabId?: number | undefined;
}
interface SenderMessageIframesRequest {
    type: 'iframesRequest'
    payload: string[]
    tabId?: number | undefined;
}

export { SenderMessage, SenderMessageKeypress, SenderMessageCommand, SenderMessageUpdatePlaybackRate, SenderMessageIframesRequest }

// export interface SenderMessage {
//     type: 'keypress' | 'command' | 'updatePlaybackRate' | 'iframesRequest'
//     payload: string | string[]
//     tabId?: number | undefined;
// }