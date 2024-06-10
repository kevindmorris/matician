import kurtosis from "./kurtosis";

describe("kurtosis", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(kurtosis([])).toBeNaN();
    expect(kurtosis([1])).toBeNaN();
    expect(kurtosis([1, 2])).toBeNaN();
    expect(kurtosis([1, 2, 3])).toBeNaN();
    expect(kurtosis(["a", "b"])).toBeNaN();
    expect(kurtosis(array)).toBeNaN();
    expect(kurtosis(array, (obj) => obj.a)).toBeNaN();
    expect(kurtosis(array, (obj) => obj["a"])).toBeNaN();
  });
  test("should find the kurtosis", () => {
    expect(kurtosis([1, 1, 2, 3])).toBeCloseTo(12.2107438, 6);
    expect(kurtosis([1, 2, 3, 3])).toBeCloseTo(12.2107438, 6);
    expect(kurtosis([-10, -9, -8, -7, 0])).toBeCloseTo(11.5039961, 6);
    expect(kurtosis(array, ({ x }) => x)).toBeCloseTo(12.3, 6);
    expect(kurtosis(array, (obj) => obj.y)).toBeCloseTo(12.3, 6);
    expect(kurtosis(array, (obj) => obj["z"])).toBeCloseTo(12.9083288, 6);
    expect(kurtosis(array, ({ x, y }) => x + y)).toBeCloseTo(12.3, 6);
  });
});
