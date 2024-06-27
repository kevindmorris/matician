import cube from "./cube";

describe("cube", () => {
  test("should find the volume of a cube", () => {
    expect(cube(1)).toBeCloseTo(1, 4);
    expect(cube(2)).toBeCloseTo(8, 4);
    expect(cube(3)).toBeCloseTo(27, 4);
  });
});
