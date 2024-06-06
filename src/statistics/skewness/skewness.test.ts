import skewness from "./skewness";

describe("skewness", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(skewness([])).toBeNaN();
    expect(skewness(["a", "b"])).toBeNaN();
    expect(skewness(array)).toBeNaN();
    expect(skewness(array, (obj) => obj.a)).toBeNaN();
    expect(skewness(array, (obj) => obj["a"])).toBeNaN();
  });
  test("should find the skewness", () => {
    expect(skewness([1, 2, 3])).toBeCloseTo(0, 6);
    expect(skewness([1, 1, 2, 3])).toBeCloseTo(0.854563038, 6);
    expect(skewness([1, 2, 3, 3])).toBeCloseTo(-0.854563038, 6);
    expect(skewness([-10, -9, -8, -7, 0])).toBeCloseTo(1.80361309, 6);
    expect(skewness(array, ({ x }) => x)).toBeCloseTo(0, 6);
    expect(skewness(array, (obj) => obj.y)).toBeCloseTo(0, 6);
    expect(skewness(array, (obj) => obj["z"])).toBeCloseTo(0.709295676, 6);
    expect(skewness(array, ({ x, y }) => x + y)).toBeCloseTo(0, 6);
  });
});
