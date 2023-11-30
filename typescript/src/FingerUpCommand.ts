import {Command} from "./Command";
import {Memory} from "./Memory";

export  class FingerUpCommand implements Command{
    matches(emoji: string): boolean {
        return emoji == '👆';
    }

    run(memory: Memory) {
        memory.incrementCurrentPointer();
    }
}
