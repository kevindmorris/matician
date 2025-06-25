import square from "./square";

describe("square", () => {
  it("returns the square of positive numbers", () => {
    expect(square(2)).toBe(4);
    expect(square(5)).toBe(25);
  });

  it("returns the square of negative numbers", () => {
    expect(square(-3)).toBe(9);
  });

  it("returns 0 for input 0", () => {
    expect(square(0)).toBe(0);
  });
});
