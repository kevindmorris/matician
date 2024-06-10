import stdev from "./stdev";

describe("stdev", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(stdev([])).toBeNaN();
    expect(stdev(array)).toBeNaN();
    expect(stdev(["a", "b"])).toBeNaN();
  });
  test("should find the standard deviation of an array", () => {
    expect(stdev([1, 2, 3, 4])).toBeCloseTo(1.29099445, 6);
    expect(stdev([-1, 2, -3, 4])).toBeCloseTo(3.10912635, 6);
    expect(stdev([-1, -2, -3, -4])).toBeCloseTo(1.29099445, 6);
    expect(stdev(array, (obj) => obj.x)).toBeCloseTo(2.5819889, 6);
    expect(stdev(array, (obj) => obj["y"])).toBeCloseTo(1.29099445, 6);
    expect(stdev(array, ({ z }) => z)).toBeCloseTo(6.55743852, 6);
    expect(stdev(array, ({ x, y }) => x + y)).toBeCloseTo(1.29099445, 6);
  });
});
