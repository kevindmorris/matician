import range from "./range";

describe("range", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(range([])).toBeNaN();
    expect(range(array)).toBeNaN();
    expect(range(["a", "b"])).toBeNaN();
  });
  test("should find the range of an array", () => {
    expect(range([1, 2, 3, 4])).toBe(3);
    expect(range([-1, 2, -3, 4])).toBe(7);
    expect(range([-1, -2, -3, -4])).toBe(3);
    expect(range(array, (obj) => obj.x)).toBe(6);
    expect(range(array, (obj) => obj["y"])).toBe(3);
    expect(range(array, ({ z }) => z)).toBe(15);
    expect(range(array, ({ x, y }) => x + y)).toBe(3);
  });
});
