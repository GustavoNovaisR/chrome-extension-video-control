import { commandsPathList } from "../dir_shared/constants"

export default class CommandsController {
    constructor() {
    }
    static initilize() {
        return new CommandsController()
    }

    executeCommand(command: string, tabId: number) {

        // @ts-ignore
        const commandPath = commandsPathList[command]

        if (!commandPath) return
        if (tabId) {
            console.log('CommandsController.executeCommand :>> ', commandPath, command, tabId);
            chrome.scripting.executeScript({
                target: { allFrames: true, tabId: tabId },
                files: [commandPath]
            })
        }
    }
}