import sumBy from "./sumBy";

describe("sumBy", () => {
  const array = [
    { x: 1, y: 0 },
    { x: -2, y: 1 },
    { x: 3, y: 2 }
  ];

  test("should be NaN", () => {
    expect(sumBy(array, (o) => o.z)).toBeNaN();
  });
  test("should sum an array", () => {
    expect(sumBy([], (o) => o.y)).toBe(0);
    expect(sumBy(array, (o) => o.x)).toBe(2);
    expect(sumBy(array, (o) => o.y)).toBe(3);
    expect(sumBy(array, ({ x, y }) => x + y)).toBe(5);
  });
});
