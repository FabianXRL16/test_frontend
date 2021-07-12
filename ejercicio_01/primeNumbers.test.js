import getPrimeNumbersBetween from "./primeNumbers";
// const primeNumbers = require("./primeNumbers");

describe("getPrimeNumbersBetween", () => {
    test("when it is from 0 to 12", () => {
        const expected = [2,3,5,7,11];
        const result = getPrimeNumbersBetween(0,12);
        expect(expected).toStrictEqual(result);
    });

    test("when it is from 6 to 20", () => {
        const expected = [7,11,13,17,19];
        const result = getPrimeNumbersBetween(6,20);
        expect(expected).toStrictEqual(result);
    });

    test("when it is from 0 to 1", () => {
        const expected = [];
        const result = getPrimeNumbersBetween(0,1);
        expect(expected).toStrictEqual(result);
    });

    test("when it is from -10 to 5", () => {
        const expected = [2,3,5];
        const result = getPrimeNumbersBetween(-10,5);
        expect(expected).toStrictEqual(result);
    });

    test("when it is from 12 to 4", () => {
        const expected = [5,7,11];
        const result = getPrimeNumbersBetween(12,4);
        expect(expected).toStrictEqual(result);
    });

    test("when only one parameter is entered", () => {
        const expected = [];
        const result = getPrimeNumbersBetween(19);
        expect(expected).toStrictEqual(result);
    });

    test("when a string is entered at least in one parameter", () => {
        const expected = [];
        const result = getPrimeNumbersBetween("letters",4);
        expect(expected).toStrictEqual(result);
    });

    test("when a string is entered at least in one parameter", () => {
        const expected = [];
        const result = getPrimeNumbersBetween(-5,"letters");
        expect(expected).toStrictEqual(result);
    });

    test("when are strins", () => {
        const expected = [];
        const result = getPrimeNumbersBetween("letters","letters");
        expect(expected).toStrictEqual(result);
    });
});