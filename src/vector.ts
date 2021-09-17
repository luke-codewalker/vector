export class Vector {
    components: number[];

    constructor(...args: number[]) {
        this.components = args;
    }

    get dimensions(): number {
        return this.components.length;
    }
}