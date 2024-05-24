import sumBy from "./sumBy";

describe("sumBy module", () => {
  test("sum of array to be undefined", () => {
    expect(sumBy([{ x: 1 }, { x: -2 }, { x: 3 }], (o) => o.y)).toBeNaN();
  });
  test("should sum an array", () => {
    expect(sumBy([], (o) => o.y)).toBe(0);
    expect(sumBy([{ x: 1 }, { x: 2 }, { x: 3 }], (o) => o.x)).toBe(6);
    expect(sumBy([{ x: 1 }, { x: -2 }, { x: 3 }], (o) => o.x)).toBe(2);
  });
});
