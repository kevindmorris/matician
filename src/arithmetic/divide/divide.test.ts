import divide from "./divide";

describe("divide", () => {
  test("should divide two numbers", () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(4, -2)).toBe(-2);
    expect(divide(-4, 2)).toBe(-2);
    expect(divide(-4, -2)).toBe(2);
  });
  test("should divide more than two numbers", () => {
    expect(divide(4, 2, -2)).toBe(-1);
    expect(divide(4, -2, 2)).toBe(-1);
    expect(divide(-4, 2, -1)).toBe(2);
    expect(divide(-4, -2, 1)).toBe(2);
  });
  test("should divide by 0", () => {
    expect(divide(4, 0)).toBe(Infinity);
    expect(divide(-4, 0)).toBe(-Infinity);
  });
});
