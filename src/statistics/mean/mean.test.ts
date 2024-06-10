import mean from "./mean";

describe("mean", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(mean([])).toBeNaN();
    expect(mean(array)).toBeNaN();
    expect(mean(["a", "b"])).toBeNaN();
  });
  test("should find the mean of an array", () => {
    expect(mean([1, 2, 3, 4])).toBe(2.5);
    expect(mean([-1, 2, -3, 4])).toBe(0.5);
    expect(mean([-1, -2, -3, -4])).toBe(-2.5);
    expect(mean(array, (obj) => obj.x)).toBe(5);
    expect(mean(array, (obj) => obj["y"])).toBe(-2.5);
    expect(mean(array, ({ z }) => z)).toBe(7.5);
    expect(mean(array, ({ x, y }) => x + y)).toBe(2.5);
  });
});
