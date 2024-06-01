import medianBy from "./medianBy";

describe("medianBy module", () => {
  const array = [
    { x: 2, y: -1 },
    { x: 4, y: -2 },
    { x: 6, y: -3 },
    { x: 8, y: -4 }
  ];

  test("should be NaN", () => {
    expect(medianBy(array)).toBeNaN();
    expect(medianBy(["a", "b"])).toBeNaN();
    expect(medianBy(array, (o) => o.z)).toBeNaN();
  });
  test("should find the mean of an array", () => {
    expect(medianBy([])).toBe(0);
    expect(medianBy([], (o) => o.y)).toBe(0);
    expect(medianBy([1, 2, 3])).toBe(2);
    expect(medianBy(array, (o) => o.x)).toBe(5);
    expect(medianBy(array, (o) => o.y)).toBe(-2.5);
    expect(medianBy(array, ({ x, y }) => x + y)).toBe(2.5);
  });
});
