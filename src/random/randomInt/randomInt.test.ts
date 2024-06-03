import randomInt from "./randomInt";

describe("randomInt", () => {
  test("should throw an error", () => {
    expect(() => randomInt(1.1)).toThrow("Invalid parameters");
    expect(() => randomInt(1, 1.1)).toThrow("Invalid parameters");
    expect(() => randomInt(1.1, 2)).toThrow("Invalid parameters");
    expect(() => randomInt(2, 1)).toThrow("Invalid parameters");
  });
  test("should toss a coin", () => {
    const valid = [0, 1];
    const array = Array.from({ length: 1000 }, () => {
      return randomInt();
    });

    expect(array.every((e) => valid.includes(e))).toBeTruthy();
  });
  test("should produce a random integer from 0 to 3", () => {
    const valid = [0, 1, 2, 3];
    const array = Array.from({ length: 1000 }, () => {
      return randomInt(3);
    });

    expect(array.every((e) => valid.includes(e))).toBeTruthy();
  });
  test("should produce a random integer from 0 to 11", () => {
    const valid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const array = Array.from({ length: 1000 }, () => {
      return randomInt(11);
    });

    expect(array.every((e) => valid.includes(e))).toBeTruthy();
  });
  test("should produce a random integer from -2 to 1", () => {
    const valid = [-2, -1, 0, 1];
    const array = Array.from({ length: 1000 }, () => {
      return randomInt(-2, 1);
    });

    expect(array.every((e) => valid.includes(e))).toBeTruthy();
  });
});
