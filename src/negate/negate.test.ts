import negate from "./negate";

describe("negate", () => {
  it("negates a positive number", () => {
    expect(negate(10)).toBe(-10);
  });

  it("negates a negative number", () => {
    expect(negate(-7)).toBe(7);
  });

  it("negates zero", () => {
    const result = negate(0);
    expect(result).toBe(-0);
    expect(Object.is(result, -0)).toBe(true); // specifically check for -0
  });

  it("handles floating point numbers", () => {
    expect(negate(3.14)).toBe(-3.14);
    expect(negate(-2.71)).toBe(2.71);
  });
});
