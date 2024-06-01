import varianceBy from "./varianceBy";

describe("varianceBy", () => {
  const array = [
    { x: 2, y: -1 },
    { x: 4, y: -2 },
    { x: 6, y: -3 },
    { x: 8, y: -4 }
  ];

  test("should be NaN", () => {
    expect(varianceBy(array)).toBeNaN();
    expect(varianceBy(["a", "b"])).toBeNaN();
    expect(varianceBy(array, (o) => o.z)).toBeNaN();
  });
  test("should find the variance of an array", () => {
    expect(varianceBy([])).toBe(0);
    expect(varianceBy([], (o) => o.y)).toBe(0);
    expect(varianceBy([1, 2, 3])).toBe(1);
    expect(varianceBy(array, (o) => o.x)).toBe(20 / 3);
    expect(varianceBy(array, (o) => o.y)).toBe(5 / 3);
    expect(varianceBy(array, ({ x, y }) => x + y)).toBe(5 / 3);
  });
});
