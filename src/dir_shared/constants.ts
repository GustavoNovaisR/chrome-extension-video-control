import CommandsPathList from "./interfaces/commandsPathList.interface"
import Constants from "./interfaces/constants.interface"

const commandsPathList: CommandsPathList = {
    back5Seconds: "commands/back5SecondsCommand.js",
    forward5Seconds: "commands/forward5SecondsCommand.js",
    playPause: "commands/playPauseCommand.js",
    lessSpeed: "commands/lessSpeedCommand.js",
    moreSpeed: "commands/moreSpeedCommand.js",

    turnUpSound: "commands/turnUpSoundCommand.js",
    turnDownSound: "commands/turnDownSoundCommand.js",

    decrease1Speed: "commands/decrease1SpeedCommand.js",
    add1Speed: "commands/add1SpeedCommand.js",
    back10Seconds: "commands/back10SecondsCommand.js",
    forward10Seconds: "commands/forward10SecondsCommand.js",

    currentSpeed: "commands/currentSpeedCommand.js",
    retriveIframes: "commands/retriveIframesCommand.js" // coming soon ...
}

const constants: Constants = {
    speedStorageName: 'speed',
    initialSpeed: '1',
    commands: Object.keys(commandsPathList),
    hotkeys: {
        j: 'back5Seconds',
        k: 'playPause',
        l: 'forward5Seconds',
        ",": 'lessSpeed',
        ".": 'moreSpeed',
        arrowleft: 'back5Seconds',
        arrowright: 'forward5Seconds',

        arrowup: 'turnUpSound',
        arrowdown: 'turnDownSound',
    }
}

export { constants, commandsPathList }