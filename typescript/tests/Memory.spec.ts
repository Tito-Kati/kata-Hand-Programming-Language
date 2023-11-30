import {Memory} from "../src/Memory";

describe('src/Memory', () => {
    it('should return 0 when memory is created', () => {
        const memory = new Memory()

        expect(memory.currentPointerValue()).toBe(0)
    });
})
