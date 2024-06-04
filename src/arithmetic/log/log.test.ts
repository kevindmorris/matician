import log from "./log";

describe("log", () => {
  test("should be undefined", () => {
    expect(log(-1, 2)).toBeUndefined();
    expect(log(0, 2)).toBeUndefined();
    expect(log(8, -1)).toBeUndefined();
    expect(log(8, 0)).toBeUndefined();
    expect(log(8, 1)).toBeUndefined();
  });
  test("should find the logaritm of a number", () => {
    expect(log(8, 2)).toBeCloseTo(3, 8);
    expect(log(27, 3)).toBeCloseTo(3, 8);
    expect(log(27, 5)).toBeCloseTo(2.047818583458, 8);
    expect(log(27, 9)).toBeCloseTo(1.5, 8);
  });
});
