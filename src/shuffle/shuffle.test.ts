import shuffle from "./shuffle";

describe("shuffle", () => {
  test("returns array with same elements", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);

    // Contains same elements, regardless of order
    expect(shuffled.sort()).toEqual([...original].sort());
  });

  test("does not mutate original array", () => {
    const original = [1, 2, 3, 4, 5];
    shuffle(original);
    expect(original).toEqual([1, 2, 3, 4, 5]);
  });

  test("can return different order", () => {
    const original = [1, 2, 3, 4, 5];
    let changed = false;
    for (let i = 0; i < 10; i++) {
      const shuffled = shuffle(original);
      if (!shuffled.every((val, idx) => val === original[idx])) {
        changed = true;
        break;
      }
    }
    expect(changed).toBe(true);
  });
});
