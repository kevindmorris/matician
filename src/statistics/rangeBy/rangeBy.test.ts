import rangeBy from "./rangeBy";

describe("rangeBy", () => {
  const array = [
    { x: 2, y: -1 },
    { x: 4, y: -2 },
    { x: 6, y: -3 },
    { x: 8, y: -4 }
  ];

  test("should be NaN", () => {
    expect(rangeBy([])).toBeNaN();
    expect(rangeBy([], (o) => o.y)).toBeNaN();
    expect(rangeBy(array)).toBeNaN();
    expect(rangeBy(["a", "b"])).toBeNaN();
    expect(rangeBy(array, (o) => o.z)).toBeNaN();
  });
  test("should find the range of an array", () => {
    expect(rangeBy([1, 2, 3])).toBe(2);
    expect(rangeBy(array, (o) => o.x)).toBe(6);
    expect(rangeBy(array, (o) => o.y)).toBe(3);
    expect(rangeBy(array, ({ x, y }) => x + y)).toBe(3);
  });
});
