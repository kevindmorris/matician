import randomFloat from "./randomFloat";

describe("randomInt", () => {
  test("should throw an error", () => {
    expect(() => randomFloat(2, 1)).toThrow("Invalid parameters");
  });
  test("should produce a random number from 0 to 3", () => {
    const array = Array.from({ length: 1000 }, () => {
      return randomFloat(3);
    });

    array.forEach((e) => {
      expect(e).toBeGreaterThanOrEqual(0);
      expect(e).toBeLessThanOrEqual(3);
    });
  });
  test("should produce a random number from -2 to 1", () => {
    const array = Array.from({ length: 1000 }, () => {
      return randomFloat(-2, 1);
    });

    array.forEach((e) => {
      expect(e).toBeGreaterThanOrEqual(-2);
      expect(e).toBeLessThanOrEqual(1);
    });
  });
  test("should produce a random number from -2.3 to 1.75", () => {
    const array = Array.from({ length: 1000 }, () => {
      return randomFloat(-2.3, 1.75);
    });

    array.forEach((e) => {
      expect(e).toBeGreaterThanOrEqual(-2.3);
      expect(e).toBeLessThanOrEqual(1.75);
    });
  });
});
