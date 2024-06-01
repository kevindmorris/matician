import stdevBy from "./stdevBy";

describe("stdevBy", () => {
  const array = [
    { x: 2, y: -1 },
    { x: 4, y: -2 },
    { x: 6, y: -3 },
    { x: 8, y: -4 }
  ];

  test("should be NaN", () => {
    expect(stdevBy(array)).toBeNaN();
    expect(stdevBy(["a", "b"])).toBeNaN();
    expect(stdevBy(array, (o) => o.z)).toBeNaN();
  });
  test("should find the standard deviation of an array", () => {
    expect(stdevBy([])).toBe(0);
    expect(stdevBy([], (o) => o.y)).toBe(0);
    expect(stdevBy([1, 2, 3])).toBe(1);
    expect(stdevBy(array, (o) => o.x)).toBe(Math.sqrt(20 / 3));
    expect(stdevBy(array, (o) => o.y)).toBe(Math.sqrt(5 / 3));
    expect(stdevBy(array, ({ x, y }) => x + y)).toBe(Math.sqrt(5 / 3));
  });
});
