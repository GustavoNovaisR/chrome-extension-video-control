import CommandsController from "./controllers/commands.controller";
import { constants } from "./dir_shared/constants";
import { SenderMessage, SenderMessageCommand } from "./dir_shared/interfaces/SenderMessage.interface";

const commandsController = CommandsController.initilize()

// update Speed initial value
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        [constants.speedStorageName]: constants.initialSpeed
    });
    console.log('onInstalled extension');
});

try {
    chrome.runtime.onMessage.addListener(
        (request: SenderMessage, sender, sendResponse) => {
            let message = { response: "Key received successfully!" }
            if (CommandIsCorrect(request)) {
                console.log('é command :>> ', CommandIsCorrect(request));
                handleCommand(request)
            }
            if (hotkeysIsCorrect(request, sender)) {
                if (request.tabId !== undefined) {
                    handleHotkey(request.payload as string, request.tabId)
                } else {
                    let tabId = sender?.tab?.id
                    handleHotkey(request.payload as string, tabId)
                }
            }
            sendResponse(message)
        })
} catch (error) { }

// checkers
function CommandIsCorrect(request: SenderMessage): boolean {
    if (!request) return false;

    if (request.type !== 'command') return false;
    if (request.tabId === undefined) return false;

    let isCommand = constants.commands
        .includes(request.payload);

    if (!isCommand) return false;
    return true
}

function hotkeysIsCorrect(request: SenderMessage, sender?: chrome.runtime.MessageSender) {
    if (!request) return false;
    if (request.type !== 'keypress') return false;

    // If request in contentScript
    if (request.tabId === undefined) {
        if (!sender) return false;
        if (!sender.tab) return false;
        if (!sender.tab.id) return false;
    }

    let isHotkey = Object
        .keys(constants.hotkeys)
        .includes((request.payload as string).toLowerCase());

    if (!isHotkey) return false

    return true
}

// handlers 
function handleCommand(request: SenderMessage) {
    const { payload: command, tabId, type } = request as SenderMessageCommand
    if (type === 'command') {
        if (constants.commands.includes(command)) {
            if (!tabId) return
            console.log('hadleCommand :>> ');
            commandsController
                .executeCommand(command, tabId)
        }
    }
}

function handleHotkey(hotkey: string, tabId: number | undefined) {
    // @ts-ignore
    const commandname = constants.hotkeys[hotkey]
    if (constants.commands.includes(commandname)) {
        if (!tabId) return
        console.log('handleHotkey :>> ');
        commandsController
            .executeCommand(commandname, tabId)
    }

}

