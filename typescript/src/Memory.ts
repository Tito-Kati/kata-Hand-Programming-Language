
export class Memory {

    private value: number = 0;

    currentPointerValue(): number {
        return this.value;
    }

    incrementCurrentPointer() {
        this.value++;
    }
}
