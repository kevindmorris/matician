import rectangularPrism from "./rectangularPrism";

describe("rectangularPrism", () => {
  test("should find the volume of a rectangular prism", () => {
    expect(rectangularPrism(1, 2, 3)).toBeCloseTo(6, 4);
    expect(rectangularPrism(1, 2, 4)).toBeCloseTo(8, 4);
    expect(rectangularPrism(2, 3, 2)).toBeCloseTo(12, 4);
  });
});
