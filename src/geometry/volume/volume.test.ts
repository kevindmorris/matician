import volume from "./volume";

describe("volume", () => {
  test("should find the volume of a cube", () => {
    expect(volume.cube(1)).toBeCloseTo(1, 4);
    expect(volume.cube(2)).toBeCloseTo(8, 4);
    expect(volume.cube(3)).toBeCloseTo(27, 4);
  });
  test("should find the volume of a rectangular prism", () => {
    expect(volume.rectangularPrism(1, 2, 3)).toBeCloseTo(6, 4);
    expect(volume.rectangularPrism(1, 2, 4)).toBeCloseTo(8, 4);
    expect(volume.rectangularPrism(2, 3, 2)).toBeCloseTo(12, 4);
  });
  test("should find the volume of a cylinder", () => {
    expect(volume.cylinder(1, 2)).toBeCloseTo(6.28319, 4);
    expect(volume.cylinder(2, 2)).toBeCloseTo(25.13274, 4);
    expect(volume.cylinder(2, 3)).toBeCloseTo(37.69911, 4);
  });
  test("should find the volume of a prism", () => {
    expect(volume.prism(1, 2)).toBeCloseTo(2, 4);
    expect(volume.prism(2, 2)).toBeCloseTo(4, 4);
    expect(volume.prism(2, 3)).toBeCloseTo(6, 4);
  });
  test("should find the volume of a sphere", () => {
    expect(volume.sphere(1)).toBeCloseTo(4.18879, 4);
    expect(volume.sphere(2)).toBeCloseTo(33.51032, 4);
    expect(volume.sphere(3)).toBeCloseTo(113.09734, 4);
  });
  test("should find the volume of an ellipsoid", () => {
    expect(volume.ellipsoid(1, 2, 3)).toBeCloseTo(25.13274, 4);
    expect(volume.ellipsoid(2, 3, 4)).toBeCloseTo(100.53096, 4);
    expect(volume.ellipsoid(3, 4, 5)).toBeCloseTo(251.32741, 4);
  });
  test("should find the volume of a cone", () => {
    expect(volume.cone(1, 2)).toBeCloseTo(2.0944, 4);
    expect(volume.cone(2, 1)).toBeCloseTo(4.18879, 4);
    expect(volume.cone(2, 3)).toBeCloseTo(12.56637, 4);
  });
  test("should find the volume of a pyramid", () => {
    expect(volume.pyramid(1, 1)).toBeCloseTo(0.33333, 4);
    expect(volume.pyramid(2, 1)).toBeCloseTo(0.66667, 4);
    expect(volume.pyramid(3, 2)).toBeCloseTo(2, 4);
  });
  test("should find the volume of a square pyramid", () => {
    expect(volume.squarePyramid(1, 1)).toBeCloseTo(0.33333, 4);
    expect(volume.squarePyramid(2, 1)).toBeCloseTo(1.33333, 4);
    expect(volume.squarePyramid(3, 2)).toBeCloseTo(6, 4);
  });
  test("should find the volume of a rectangular pyramid", () => {
    expect(volume.rectangularPyramid(1, 1, 2)).toBeCloseTo(0.66667, 4);
    expect(volume.rectangularPyramid(2, 1, 2)).toBeCloseTo(1.33333, 4);
    expect(volume.rectangularPyramid(3, 2, 1)).toBeCloseTo(2, 4);
  });
  test("should find the volume of a tetrahedron", () => {
    expect(volume.tetrahedron(1)).toBeCloseTo(0.11785, 4);
    expect(volume.tetrahedron(2)).toBeCloseTo(0.94281, 4);
    expect(volume.tetrahedron(3)).toBeCloseTo(3.18198, 4);
  });
});
