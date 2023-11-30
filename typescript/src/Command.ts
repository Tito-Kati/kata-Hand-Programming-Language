import {Memory} from "./Memory";

export interface Command {
    matches(emoji: string): boolean
    run(memory: Memory): void | string
}
