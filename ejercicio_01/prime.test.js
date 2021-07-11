const prime = require("./primeNumers")

describe("prime", () => {
    test("when it is from 0 to 12", () => {
        const expected = [2,3,5,7,11];
        const result = getPrimeNumbersBetween(0,12);
        expected(expected).toBe(result);
    });

    test("when it is from 6 to 20", () => {
        const expected = [7,11,13,17,19];
        const result = getPrimeNumbersBetween(6,20);
        expected(expected).toBe(result);
    });

    test("when it is from 0 to 1", () => {
        const expected = null;
        const result = getPrimeNumbersBetween(0,1);
        expected(expected).toBe(result);
    });

    test("when it is from -10 to 5", () => {
        const expected = [2,3,5];
        const result = getPrimeNumbersBetween(-10,5);
        expected(expected).toBe(result);
    });

    test("when it is from 12 to 4", () => {
        const expected = null;
        const result = getPrimeNumbersBetween(12,4);
        expected(expected).toBe(result);
    });
});