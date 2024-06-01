import permutation from "./permutation";

describe("permutation", () => {
  test("should return NaN", () => {
    expect(permutation(2.5, 1)).toBeNaN();
    expect(permutation(2, 1.5)).toBeNaN();
    expect(permutation(1, 2)).toBeNaN();
    expect(permutation(-1, 2)).toBeNaN();
    expect(permutation(1, -2)).toBeNaN();
  });
  test("should calculate the permutations without replacement", () => {
    expect(permutation(0, 0)).toBe(1);
    expect(permutation(1, 1)).toBe(1);
    expect(permutation(10, 0)).toBe(1);
    expect(permutation(10, 2)).toBe(90);
    expect(permutation(10, 3)).toBe(720);
    expect(permutation(10, 4, { replacement: false })).toBe(5040);
    expect(permutation(10, 5, { replacement: false })).toBe(30240);
    expect(permutation(10, 6, { replacement: false })).toBe(151200);
  });
  test("should calculate the permutations with replacement", () => {
    expect(permutation(0, 0, { replacement: true })).toBe(1);
    expect(permutation(10, 0, { replacement: true })).toBe(1);
    expect(permutation(10, 2, { replacement: true })).toBe(100);
    expect(permutation(10, 3, { replacement: true })).toBe(1000);
    expect(permutation(10, 4, { replacement: true })).toBe(10000);
    expect(permutation(10, 5, { replacement: true })).toBe(100000);
    expect(permutation(10, 6, { replacement: true })).toBe(1000000);
  });
});
