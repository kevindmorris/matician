import divide from "./divide";

describe("divide module", () => {
  test("divides 4 / 2 to equal 2", () => {
    expect(divide(4, 2)).toBe(2);
  });
  test("divides 4 / (-2) to equal (-2)", () => {
    expect(divide(4, -2)).toBe(-2);
  });
  test("divides (-4) / 2 to equal (-2)", () => {
    expect(divide(-4, 2)).toBe(-2);
  });
  test("divides (-4) / (-2) to equal 2", () => {
    expect(divide(-4, -2)).toBe(2);
  });
  test("divides 4 / 0 to be undefined", () => {
    expect(divide(4, 0)).toBe(Infinity);
  });
});
