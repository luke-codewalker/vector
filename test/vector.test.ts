import { expect } from 'chai';
import { Vector } from '../src/vector';

describe('Vector', () => {
    describe('Creation', () => {
        it('Should create a vector and initialize it correctly', () => {
            const vector = new Vector(3, 6, 7);
            expect(vector.components.length).to.equal(3);
            expect(vector.components).to.have.same.members([3, 6, 7]);
        })

        it('Should create empty vectors with empty component array and allow setting values later', () => {
            const vector = new Vector();
            expect(vector.components.length).to.equal(0);
            vector.components.push(1);
            expect(vector.components).to.have.same.members([1]);
        })

        it('Should give correct dimensions', () => {
            const vector = new Vector(12, 6);
            expect(vector.dimensions).to.equal(2);
        })

        it('Should provide correct values with accessors for x, y, z', () => {
            const vector = new Vector(6, 89);
            expect(vector.x).to.equal(6);
            expect(vector.y).to.equal(89);
            expect(vector.z).to.equal(undefined);

            const otherVector = new Vector(90, 123, 0);
            expect(otherVector.x).to.equal(90);
            expect(otherVector.y).to.equal(123);
            expect(otherVector.z).to.equal(0);
        })
    })

    describe('Addition', () => {
        describe('Instance method', () => {
            it('Should add two vectors', () => {
                const vector = new Vector(6, 89, 0);
                const otherVector = new Vector(90, 111, 14);
                vector.add(otherVector);
                expect(vector.components).to.have.same.members([96, 200, 14]);
            })

            it('Should throw an error on incorrect dimensions', () => {
                const vector = new Vector(6, 89);
                const otherVector = new Vector(90, 123, 0);
                expect(() => vector.add(otherVector)).to.throw();
            })
        })

        describe('Static method', () => {
            it('Should add two vectors with static method', () => {
                const vector = new Vector(6, 89, 0);
                const otherVector = new Vector(90, 111, 14);
                const sumVector = Vector.add(vector, otherVector);

                expect(sumVector.components).to.have.same.members([96, 200, 14]);
            })

            it('Should throw an error on incorrect dimensions', () => {
                const vector = new Vector(6, 89);
                const otherVector = new Vector(90, 123, 0);
                expect(() => Vector.add(vector, otherVector)).to.throw();
            })
        })
    })

    describe('Subtraction', () => {
        describe('Instance method', () => {
            it('Should subtract two vectors', () => {
                const vector = new Vector(6, 200, 14);
                const otherVector = new Vector(90, 89, 0);
                vector.subtract(otherVector);
                expect(vector.components).to.have.same.members([-84, 111, 14]);
            })

            it('Should throw an error on incorrect dimensions', () => {
                const vector = new Vector(6, 89);
                const otherVector = new Vector(90, 123, 0);
                expect(() => vector.subtract(otherVector)).to.throw();
            })
        })

        describe('Static method', () => {
            it('Should subtract two vectors with static method', () => {
                const vector = new Vector(10, 201, 15);
                const otherVector = new Vector(90, 89, 1);
                const sumVector = Vector.subtract(vector, otherVector);
                expect(sumVector.components).to.have.same.members([-80, 112, 14]);
            })

            it('Should throw an error on incorrect dimensions', () => {
                const vector = new Vector(6, 89);
                const otherVector = new Vector(90, 123, 0);
                expect(() => Vector.subtract(vector, otherVector)).to.throw();
            })
        })

    })

    describe('Scalar multiplication', () => {
        it('Should multiply with scalar', () => {
            const vector = new Vector(7, 12, 0);
            vector.multiply(5);
            expect(vector.components).to.have.same.members([35, 60, 0]);
        })
    })

    describe('Scalar division', () => {
        it('Should divide with scalar', () => {
            const vector = new Vector(8, 12, 0);
            vector.divide(2);
            expect(vector.components).to.have.same.members([4, 6, 0]);
        })
    })

    describe('Dot product', () => {
        it('Should calculate the correct dot product', () => {
            const vector = new Vector(8, 12, 0);
            const otherVector = new Vector(-1, 2, 0);
            const dotProduct = Vector.dot(vector, otherVector);
            expect(dotProduct).to.be.equal(16);
        })

        it('Should throw an error on incorrect dimensions', () => {
            const vector = new Vector(6, 89);
            const otherVector = new Vector(90, 123, 0);
            expect(() => Vector.dot(vector, otherVector)).to.throw();
        })
    })


    describe('Cross product', () => {
        it('Should calculate the correct cross product', () => {
            const vector = new Vector(8, 12, 0);
            const otherVector = new Vector(-3, 84, 7);
            const crossProductVector = Vector.cross(vector, otherVector);
            expect(crossProductVector.components).to.have.same.members([84, -56, 708]);
        })

        it('Should throw an error on incorrect dimensions', () => {
            const vector = new Vector(6, 89);
            const otherVector = new Vector(90, 0);
            expect(() => Vector.cross(vector, otherVector)).to.throw();
        })
    })

    describe('Magnitude', () => {
        it('Should calculate magnitude squared correctly', () => {
            const vector = new Vector(2, 8, 5);
            expect(vector.magnitudeSquared()).to.be.equal(93);
        })

        it('Should calculate magnitude correctly', () => {
            const vector = new Vector(2, 8, 10);
            expect(vector.magnitude()).to.be.equal(Math.sqrt(168));
        })
    })
})