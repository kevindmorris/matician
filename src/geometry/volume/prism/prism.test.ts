import prism from "./prism";

describe("prism", () => {
  test("should find the volume of a prism", () => {
    expect(prism(1, 2)).toBeCloseTo(2, 4);
    expect(prism(2, 2)).toBeCloseTo(4, 4);
    expect(prism(2, 3)).toBeCloseTo(6, 4);
  });
});
