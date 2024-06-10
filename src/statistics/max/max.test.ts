import max from "./max";

describe("max", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(max([])).toBeNaN();
    expect(max(array)).toBeNaN();
    expect(max(["a", "b"])).toBeNaN();
  });
  test("should find the maximum in an array", () => {
    expect(max([1, 2, 3, 4])).toBe(4);
    expect(max([-1, 2, -3, 4])).toBe(4);
    expect(max([-1, -2, -3, -4])).toBe(-1);
    expect(max(array, (obj) => obj.x)).toBe(8);
    expect(max(array, (obj) => obj["y"])).toBe(-1);
    expect(max(array, ({ z }) => z)).toBe(16);
    expect(max(array, ({ x, y }) => x + y)).toBe(4);
  });
});
