import {Command} from "./Command";
import {Memory} from "./Memory";

export  class FistCommand implements Command{
    run(memory: Memory) {
        return '';
    }
}
