import multiply from "./multiply";

describe("multiply", () => {
  test("should multiply two numbers", () => {
    expect(multiply(3, 2)).toBe(6);
    expect(multiply(3, -2)).toBe(-6);
    expect(multiply(-3, 2)).toBe(-6);
    expect(multiply(-3, -2)).toBe(6);
  });
  test("should multiply more than 2 numbers", () => {
    expect(multiply(3, 2, 0)).toBe(0);
    expect(multiply(3, -2, 2)).toBe(-12);
    expect(multiply(-3, 2, -2)).toBe(12);
    expect(multiply(-3, -2, 2)).toBe(12);
  });
});
