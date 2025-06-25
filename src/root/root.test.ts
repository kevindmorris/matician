import root from "./root";

describe("root", () => {
  it("computes the square root by default", () => {
    expect(root(9)).toBe(3);
    expect(root(16)).toBe(4);
  });

  it("computes the cube root when degree is 3", () => {
    expect(root(27, 3)).toBe(3);
    expect(root(8, 3)).toBe(2);
  });

  it("computes other roots", () => {
    expect(root(16, 4)).toBe(2);
  });

  it("handles decimal values", () => {
    expect(root(81, 4)).toBe(3);
  });

  it("returns NaN for even-degree root of negative number", () => {
    expect(root(-16, 2)).toBeNaN(); // complex root not supported
  });

  it("throws an error for zeroth root", () => {
    expect(() => root(10, 0)).toThrow("Zeroth root is undefined");
  });
});
