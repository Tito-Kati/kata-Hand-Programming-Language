import {Memory} from "./Memory";

export interface Command {
    run(memory: Memory): void | string
}
