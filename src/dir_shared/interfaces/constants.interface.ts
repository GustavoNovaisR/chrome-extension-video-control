import { Hotkeys } from './hotkeys.interface';

export default interface Constants {
    speedStorageName: string
    initialSpeed: string | number
    commands: string[]
    hotkeys: {
        [K in Hotkeys]: string
    }
}
