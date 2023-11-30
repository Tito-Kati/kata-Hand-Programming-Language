import {FistCommand} from "../src/FistCommand";
import {Memory} from "../src/Memory";

describe('src/FistCommand', () => {
    it('should return ascii value', () => {
        const command = new FistCommand()
        const memory = new Memory()

        expect(command.run(memory)).toBe('')
    });
})
