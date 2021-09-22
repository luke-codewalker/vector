export class Vector {
    components: number[];

    constructor(...args: number[]) {
        this.components = args;
    }

    // Accessors
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

    // Static methods
    static add(first: Vector, second: Vector): Vector {
        if (first.dimensions !== second.dimensions) {
            throw new Error(`Can't add vectors of different dimensions. First vector: ${first.dimensions}, second vector ${second.dimensions} `);
        }

        const components: number[] = [];

        for (let i = 0; i < first.components.length; i++) {
            components.push(first.components[i] + second.components[i]);
        }

        return new Vector(...components);
    }

    static subtract(first: Vector, second: Vector): Vector {
        if (first.dimensions !== second.dimensions) {
            throw new Error(`Can't subtract vectors of different dimensions. First vector: ${first.dimensions}, second vector ${second.dimensions} `);
        }

        const components: number[] = [];

        for (let i = 0; i < first.components.length; i++) {
            components.push(first.components[i] - second.components[i]);
        }

        return new Vector(...components);
    }

    static dot(first: Vector, second: Vector): number {
        if (first.dimensions !== second.dimensions) {
            throw new Error(`Can't calculate dot product for vectors of different dimensions. First vector: ${first.dimensions}, second vector ${second.dimensions} `);
        }

        return first.components.reduce((sum, component, index) => sum += component * second.components[index], 0);
    }

    // Instance methods
    add(other: Vector): void {
        if (other.dimensions !== this.dimensions) {
            throw new Error(`Can't add vectors of different dimensions. This vector: ${this.dimensions}, the other vector ${other.dimensions} `);
        }

        for (let i = 0; i < this.components.length; i++) {
            this.components[i] += other.components[i];
        }
    }

    subtract(other: Vector): void {
        if (other.dimensions !== this.dimensions) {
            throw new Error(`Can't subtract vectors of different dimensions. This vector: ${this.dimensions}, the other vector ${other.dimensions} `);
        }

        for (let i = 0; i < this.components.length; i++) {
            this.components[i] -= other.components[i];
        }
    }

    multiply(scalar: number): void {
        for (let i = 0; i < this.components.length; i++) {
            this.components[i] *= scalar;
        }
    }

    divide(scalar: number): void {
        for (let i = 0; i < this.components.length; i++) {
            this.components[i] /= scalar;
        }
    }
}