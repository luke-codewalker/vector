export class Vector {
    components: number[];

    constructor(...args: number[]) {
        this.components = args;
    }

    get dimensions(): number {
        return this.components.length;
    }

    get x(): number {
        return this.components[0];
    }

    get y(): number {
        return this.components[1];
    }

    get z(): number {
        return this.components[2];
    }
}