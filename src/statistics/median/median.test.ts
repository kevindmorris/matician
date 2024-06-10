import median from "./median";

describe("median", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(median([])).toBeNaN();
    expect(median(array)).toBeNaN();
    expect(median(["a", "b"])).toBeNaN();
  });
  test("should find the median of an array", () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
    expect(median([-1, 2, -3, 4])).toBe(0.5);
    expect(median([-1, -2, -3, -4])).toBe(-2.5);
    expect(median([2, 4, 3, -1, 5])).toBe(3);
    expect(median(array, (obj) => obj.x)).toBe(5);
    expect(median(array, (obj) => obj["y"])).toBe(-2.5);
    expect(median(array, ({ z }) => z)).toBe(6.5);
    expect(median(array, ({ x, y }) => x + y)).toBe(2.5);
  });
});
