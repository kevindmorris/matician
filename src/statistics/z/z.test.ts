import z from "./z";

describe("z", () => {
  test("should find the z score", () => {
    expect(z(-2, 0, 1)).toBe(-2);
    expect(z(-1, 0, 1)).toBe(-1);
    expect(z(0, 0, 1)).toBe(0);
    expect(z(1, 0, 1)).toBe(1);
    expect(z(2, 0, 1)).toBe(2);
  });
});
