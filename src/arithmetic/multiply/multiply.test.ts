import multiply from "./multiply";

describe("multiply", () => {
  test("should multiply two numbers", () => {
    expect(multiply(3, 2)).toBe(6);
    expect(multiply(3, -2)).toBe(-6);
    expect(multiply(-3, 2)).toBe(-6);
    expect(multiply(-3, -2)).toBe(6);
  });
});
