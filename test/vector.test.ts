import { expect } from 'chai';
import { Vector } from '../src/vector';

describe('Vector', () => {
    describe('Creation', () => {
        it('Should create a vector and initialize it correctly', () => {
            const vector = new Vector(3, 6, 7);
            expect(vector.components.length).to.equal(3);
            expect(vector.components).to.have.same.members([3, 6, 7]);
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
})