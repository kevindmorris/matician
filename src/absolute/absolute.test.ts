import absolute from "./absolute";

describe("absolute", () => {
  it("returns the same value for positive numbers", () => {
    expect(absolute(5)).toBe(5);
    expect(absolute(123.45)).toBe(123.45);
  });

  it("returns the positive equivalent for negative numbers", () => {
    expect(absolute(-5)).toBe(5);
    expect(absolute(-123.45)).toBe(123.45);
  });

  it("returns 0 when input is 0", () => {
    expect(absolute(0)).toBe(0);
  });

  it("handles edge cases like -0 correctly", () => {
    expect(Object.is(absolute(-0), 0)).toBe(true);
  });
});
