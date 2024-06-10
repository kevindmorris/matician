import variance from "./variance";

describe("variance", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(variance([])).toBeNaN();
    expect(variance(array)).toBeNaN();
    expect(variance(["a", "b"])).toBeNaN();
  });
  test("should find the variance of an array", () => {
    expect(variance([1, 2, 3, 4])).toBeCloseTo(1.66666667, 6);
    expect(variance([-1, 2, -3, 4])).toBeCloseTo(9.66666667, 6);
    expect(variance([-1, -2, -3, -4])).toBeCloseTo(1.66666667, 6);
    expect(variance(array, (obj) => obj.x)).toBeCloseTo(6.66666667, 6);
    expect(variance(array, (obj) => obj["y"])).toBeCloseTo(1.66666667, 6);
    expect(variance(array, ({ z }) => z)).toBeCloseTo(43, 6);
    expect(variance(array, ({ x, y }) => x + y)).toBeCloseTo(1.66666667, 6);
  });
});
