import lcm from "./lcm";

describe("lcm", () => {
  it("calculates LCM of two positive integers", () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(3, 7)).toBe(21);
  });

  it("returns 0 if either number is 0", () => {
    expect(lcm(0, 5)).toBe(0);
    expect(lcm(7, 0)).toBe(0);
  });

  it("calculates LCM with negative inputs", () => {
    expect(lcm(-4, 6)).toBe(12);
    expect(lcm(4, -6)).toBe(12);
    expect(lcm(-4, -6)).toBe(12);
  });

  it("throws an error for non-integer input", () => {
    expect(() => lcm(5.5, 3)).toThrow("Both arguments must be integers");
  });

  it("returns the absolute number when both are equal", () => {
    expect(lcm(5, 5)).toBe(5);
  });
});
