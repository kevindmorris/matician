import meanBy from "./meanBy";

describe("meanBy", () => {
  const array = [
    { x: 2, y: -1 },
    { x: 4, y: -2 },
    { x: 6, y: -3 },
    { x: 8, y: -4 }
  ];

  test("should be NaN", () => {
    expect(meanBy(array)).toBeNaN();
    expect(meanBy(["a", "b"])).toBeNaN();
    expect(meanBy(array, (o) => o.z)).toBeNaN();
  });
  test("should find the mean of an array", () => {
    expect(meanBy([])).toBe(0);
    expect(meanBy([], (o) => o.y)).toBe(0);
    expect(meanBy([1, 2, 3])).toBe(2);
    expect(meanBy(array, (o) => o.x)).toBe(5);
    expect(meanBy(array, (o) => o.y)).toBe(-2.5);
    expect(meanBy(array, ({ x, y }) => x + y)).toBe(2.5);
  });
});
