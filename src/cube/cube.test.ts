import cube from "./cube";

describe("cube", () => {
  it("returns the cube of positive numbers", () => {
    expect(cube(2)).toBe(8);
    expect(cube(3)).toBe(27);
  });

  it("returns the cube of negative numbers", () => {
    expect(cube(-2)).toBe(-8);
    expect(cube(-3)).toBe(-27);
  });

  it("returns 0 for input 0", () => {
    expect(cube(0)).toBe(0);
  });
});
