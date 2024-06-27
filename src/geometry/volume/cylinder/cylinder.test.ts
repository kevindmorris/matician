import cylinder from "./cylinder";

describe("cylinder", () => {
  test("should find the volume of a cylinder", () => {
    expect(cylinder(1, 2)).toBeCloseTo(6.28319, 4);
    expect(cylinder(2, 2)).toBeCloseTo(25.13274, 4);
    expect(cylinder(2, 3)).toBeCloseTo(37.69911, 4);
  });
});
