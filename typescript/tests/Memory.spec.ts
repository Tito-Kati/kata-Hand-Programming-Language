import {Memory} from "../src/Memory";

describe('src/Memory', () => {
    it('should return 0 when memory is created', () => {
        const memory = new Memory()

        expect(memory.currentPointerValue()).toBe(0)
    });

    it('should return 1 when increment current pointer', () => {
        const memory = new Memory()

        memory.incrementCurrentPointer()

        expect(memory.currentPointerValue()).toBe(1)
    });

    it('should return 2 when increment current pointer twice', () => {
        const memory = new Memory()

        memory.incrementCurrentPointer()
        memory.incrementCurrentPointer()

        expect(memory.currentPointerValue()).toBe(2)
    });
})
