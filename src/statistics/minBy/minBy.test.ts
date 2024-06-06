import minBy from "./minBy";

describe("minBy", () => {
  const array = [
    { x: 2, y: -1 },
    { x: 4, y: -2 },
    { x: 6, y: -3 },
    { x: 8, y: -4 }
  ];

  test("should be NaN", () => {
    expect(minBy([])).toBeNaN();
    expect(minBy(array)).toBeNaN();
    expect(minBy(["a", "b"])).toBeNaN();
    expect(minBy(array, (o) => o.z)).toBeNaN();
  });
  test("should find the minimum of an array", () => {
    expect(minBy([])).toBeNaN();
    expect(minBy([4, 3, 2, 1])).toBe(1);
    expect(minBy([-1, -2, -3, 4])).toBe(-3);
    expect(minBy(array, (o) => o.x)).toBe(2);
    expect(minBy(array, (o) => o.y)).toBe(-4);
    expect(minBy(array, ({ x, y }) => x + y)).toBe(1);
  });
});
