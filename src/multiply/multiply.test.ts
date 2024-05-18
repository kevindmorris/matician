import multiply from "./multiply";

describe("multiply module", () => {
  test("multiplies 3 * 2 to equal 6", () => {
    expect(multiply(3, 2)).toBe(6);
  });
  test("multiplies 3 * (-2) to equal (-6)", () => {
    expect(multiply(3, -2)).toBe(-6);
  });
  test("multiplies (-3) * 2 to equal (-6)", () => {
    expect(multiply(-3, 2)).toBe(-6);
  });
  test("multiplies (-3) * (-2) to equal 6", () => {
    expect(multiply(-3, -2)).toBe(6);
  });
});
