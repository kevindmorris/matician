import sample from "./sample";

describe("sample", () => {
  test("should be undefined", () => {
    expect(sample([])).toBeUndefined();
  });
  test("should sample an array", () => {
    const array = [0, 1, 2, 3];

    Array(1000).forEach(() => {
      const value = sample(array);
      expect(array.includes(value)).toBeTruthy();
    });
  });
  test("should sample an array of objects", () => {
    const array = [{ x: 1 }, { x: 2 }, { x: 3 }];

    Array(1000).forEach(() => {
      const value = sample(array);
      expect(array.includes(value)).toBeTruthy();
    });
  });
});
