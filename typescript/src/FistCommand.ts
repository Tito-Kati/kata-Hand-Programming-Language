import {Command} from "./Command";
import {Memory} from "./Memory";

export  class FistCommand implements Command{
    matches(emoji: string): boolean {
        return false;
    }

    run(memory: Memory) {
        return '';
    }
}
