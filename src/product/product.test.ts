import product from "./product";

describe("product", () => {
  it("calculates the product of positive numbers", () => {
    expect(product([2, 3, 4])).toBe(24);
  });

  it("calculates the product including zero", () => {
    expect(product([2, 0, 4])).toBe(0);
  });

  it("calculates the product of negative numbers", () => {
    expect(product([-2, -3])).toBe(6);
    expect(product([-2, 3])).toBe(-6);
  });

  it("returns 1 for an empty array", () => {
    expect(product([])).toBe(1);
  });

  it("returns the value itself for a single-element array", () => {
    expect(product([7])).toBe(7);
  });

  it("handles floating point numbers", () => {
    expect(product([1.5, 2])).toBe(3);
  });
});
