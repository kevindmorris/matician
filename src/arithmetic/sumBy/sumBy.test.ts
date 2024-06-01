import sumBy from "./sumBy";

describe("sumBy", () => {
  const array = [
    { x: 2, y: -1 },
    { x: 4, y: -2 },
    { x: 6, y: -3 },
    { x: 8, y: -4 }
  ];

  test("should be NaN", () => {
    expect(sumBy(array)).toBeNaN();
    expect(sumBy(["a", "b"])).toBeNaN();
    expect(sumBy(array, (o) => o.z)).toBeNaN();
  });
  test("should sum an array", () => {
    expect(sumBy([])).toBe(0);
    expect(sumBy([], (o) => o.y)).toBe(0);
    expect(sumBy([1, 2, 3])).toBe(6);
    expect(sumBy(array, (o) => o.x)).toBe(20);
    expect(sumBy(array, (o) => o.y)).toBe(-10);
    expect(sumBy(array, ({ x, y }) => x + y)).toBe(10);
  });
});
