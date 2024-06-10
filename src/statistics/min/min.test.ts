import min from "./min";

describe("min", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(min([])).toBeNaN();
    expect(min(array)).toBeNaN();
    expect(min(["a", "b"])).toBeNaN();
  });
  test("should find the minimum in an array", () => {
    expect(min([1, 2, 3, 4])).toBe(1);
    expect(min([-1, 2, -3, 4])).toBe(-3);
    expect(min([-1, -2, -3, -4])).toBe(-4);
    expect(min(array, (obj) => obj.x)).toBe(2);
    expect(min(array, (obj) => obj["y"])).toBe(-4);
    expect(min(array, ({ z }) => z)).toBe(1);
    expect(min(array, ({ x, y }) => x + y)).toBe(1);
  });
});
