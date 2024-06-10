import sum from "./sum";

describe("sum", () => {
  const array = [
    { x: 2, y: -1, z: 1 },
    { x: 4, y: -2, z: 4 },
    { x: 6, y: -3, z: 9 },
    { x: 8, y: -4, z: 16 }
  ];

  test("should be NaN", () => {
    expect(sum([])).toBeNaN();
    expect(sum(array)).toBeNaN();
    expect(sum(["a", "b"])).toBeNaN();
  });
  test("should sum an array", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([-1, 2, -3, 4])).toBe(2);
    expect(sum([-1, -2, -3, -4])).toBe(-10);
    expect(sum(array, (obj) => obj.x)).toBe(20);
    expect(sum(array, (obj) => obj["y"])).toBe(-10);
    expect(sum(array, ({ z }) => z)).toBe(30);
    expect(sum(array, ({ x, y }) => x + y)).toBe(10);
  });
});
