import './popup.css'// para ativar o webpack e  minificar o css
import { constants } from '../dir_shared/constants'
import { SenderMessage } from '../dir_shared/interfaces/SenderMessage.interface';

console.log('Iniciando o Popup')

// get Buttons UI
const buttons: HTMLButtonElement[] = []
document.querySelectorAll('button')
    .forEach(btn => buttons.push(btn))

//uptade state of UI Button
chrome.storage.sync
    .get(constants.speedStorageName, ({ speed }) => updateUiButton(speed))

// set Mouse Click Eventss
for (const button of buttons) {
    button.addEventListener('click', sendcommand, false)
}

async function sendcommand(ev: Event) {
    const optionsQuery = {
        active: true,
        currentWindow: true
    }
    let [tab] = await chrome.tabs.query(optionsQuery);
    let button = ev.target as HTMLButtonElement

    const sendCommandData: SenderMessage = {
        type: 'command',
        payload: button.id,
        tabId: tab.id
    }
    chrome.runtime.sendMessage(sendCommandData);
}

// set KeyDown Events
document.onkeydown = async (keyDownEvent) => {
    const nameKeyPressed = keyDownEvent.key.toLowerCase()
    let isHotkey = Object
        .keys(constants.hotkeys)
        .includes(nameKeyPressed);

    if (isHotkey) {
        const optionsQuery = { active: true, currentWindow: true }
        let [tab] = await chrome.tabs.query(optionsQuery);

        const sendKeypress: SenderMessage = {
            type: 'keypress',
            payload: nameKeyPressed,
            tabId: tab.id
        }
        chrome.runtime.sendMessage(sendKeypress);
    }
}

// Receiver Update Message
chrome.runtime.onMessage.addListener(
    function (request: SenderMessage, sender, sendResponse) {
        console.log('Message retrive Popup', request)
        if (request.type === 'updatePlaybackRate') {
            chrome.storage.sync
                .get(constants.speedStorageName, ({ speed }) => updateUiButton(speed))
        }
        sendResponse('ok')
    }
)

// Helper
function retriveButton(nameCommand: string) {
    const [btn] = buttons
        .filter((btn) => constants.commands.includes(nameCommand) && btn.id === nameCommand)
    return btn
}

function updateUiButton(value: string) {
    const element = retriveButton('currentSpeed')
    element.innerHTML = '↺ ' + value
}