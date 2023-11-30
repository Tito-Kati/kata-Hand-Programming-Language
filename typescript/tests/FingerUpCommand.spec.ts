import {FingerUpCommand} from "../src/FingerUpCommand";
import {Memory} from "../src/Memory";

describe('src/FingerUpCommand', () => {
    it('should match 👆 emoji', () => {
        const command = new FingerUpCommand()

        expect(command.matches('👆')).toBe(true)
    });

    it('should not match other emojis', () => {
        const command = new FingerUpCommand()

        expect(command.matches('👊')).toBe(false)
    });

    it('should increment current memory value', () => {
        const command = new FingerUpCommand()
        const memory = new Memory()

        command.run(memory)

        expect(memory.currentPointerValue()).toBe(1)
    });

    it('should increment current memory value twice', () => {
        const command = new FingerUpCommand()
        const memory = new Memory()

        command.run(memory)
        command.run(memory)

        expect(memory.currentPointerValue()).toBe(2)
    });
})
