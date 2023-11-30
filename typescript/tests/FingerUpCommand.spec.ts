import {FingerUpCommand} from "../src/FingerUpCommand";
import {Memory} from "../src/Memory";

describe('src/FingerUpCommand', () => {
    it('should increment current memory value', () => {
        const command = new FingerUpCommand()
        const memory = new Memory()

        command.run(memory)

        expect(memory.currentPointerValue()).toBe(1)
    });
})
