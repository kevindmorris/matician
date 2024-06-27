import tetrahedron from "./tetrahedron";

describe("tetrahedron", () => {
  test("should find the volume of a tetrahedron", () => {
    expect(tetrahedron(1)).toBeCloseTo(0.11785, 4);
    expect(tetrahedron(2)).toBeCloseTo(0.94281, 4);
    expect(tetrahedron(3)).toBeCloseTo(3.18198, 4);
  });
});
