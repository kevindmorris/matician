import permutation from "./permutation";

describe("permutation module", () => {
  test("P(1, 2) to be undefined", () => {
    expect(permutation(1, 2)).toBeNaN();
  });
  test("P(-1, -2) to be undefined", () => {
    expect(permutation(-1, 2)).toBeNaN();
  });
  test("P(1, -2) to be undefined", () => {
    expect(permutation(1, -2)).toBeNaN();
  });
  test("P(10, 2) to be 90", () => {
    expect(permutation(10, 2)).toBe(90);
  });
  test("P(10, 2) to be 90", () => {
    expect(permutation(10, 2, { replacement: false })).toBe(90);
  });
  test("Pr(10, 2) to be 100", () => {
    expect(permutation(10, 2, { replacement: true })).toBe(100);
  });
  test("P(10, 3) to be 720", () => {
    expect(permutation(10, 3)).toBe(720);
  });
  test("P(10, 3) to be 720", () => {
    expect(permutation(10, 3, { replacement: false })).toBe(720);
  });
  test("Pr(10, 3) to be 1000", () => {
    expect(permutation(10, 3, { replacement: true })).toBe(1000);
  });
});
