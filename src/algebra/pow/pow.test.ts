import pow from "./pow";

describe("pow", () => {
  test("should take a number to the power of another number", () => {
    expect(pow(0, -1)).toBe(Infinity);
    expect(pow(100, 0)).toBe(1);
    expect(pow(3, -3)).toBe(1 / 27);
    expect(pow(2, -2)).toBe(1 / 4);
    expect(pow(1, -1)).toBe(1);
    expect(pow(1, 1)).toBe(1);
    expect(pow(2, 2)).toBe(4);
    expect(pow(3, 3)).toBe(27);
  });
});
