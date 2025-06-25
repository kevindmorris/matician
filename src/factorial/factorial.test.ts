import factorial from "./factorial";

describe("factorial", () => {
  it("returns 1 for 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("returns 1 for 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("calculates factorial for small integers", () => {
    expect(factorial(3)).toBe(6); // 3 * 2 * 1
    expect(factorial(5)).toBe(120); // 5 * 4 * 3 * 2 * 1
    expect(factorial(7)).toBe(5040);
  });

  it("throws an error for negative input", () => {
    expect(() => factorial(-1)).toThrow(
      "Factorial is not defined for negative numbers"
    );
  });

  it("throws an error for non-integer input", () => {
    expect(() => factorial(4.5)).toThrow("Factorial requires an integer");
  });
});
