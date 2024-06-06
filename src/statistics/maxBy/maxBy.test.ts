import maxBy from "./maxBy";

describe("maxBy", () => {
  const array = [
    { x: 2, y: -1 },
    { x: 4, y: -2 },
    { x: 6, y: -3 },
    { x: 8, y: -4 }
  ];

  test("should be NaN", () => {
    expect(maxBy([])).toBeNaN();
    expect(maxBy(array)).toBeNaN();
    expect(maxBy(["a", "b"])).toBeNaN();
    expect(maxBy(array, (o) => o.z)).toBeNaN();
  });
  test("should find the minimum of an array", () => {
    expect(maxBy([])).toBeNaN();
    expect(maxBy([4, 3, 2, 1])).toBe(4);
    expect(maxBy([-1, -2, -3, 4])).toBe(4);
    expect(maxBy(array, (o) => o.x)).toBe(8);
    expect(maxBy(array, (o) => o.y)).toBe(-1);
    expect(maxBy(array, ({ x, y }) => x + y)).toBe(4);
  });
});
