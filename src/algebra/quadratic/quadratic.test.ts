import quadratic from "./quadratic";

describe("quadratic", () => {
  test("should solve for x", () => {
    let roots = quadratic(1, 2, 1);
    expect(roots.includes(-1)).toBeTruthy();

    roots = quadratic(1, 1, 0.25);
    expect(roots.includes(-0.5)).toBeTruthy();

    roots = quadratic(1, -6, 8);
    expect(roots.includes(4)).toBeTruthy();
    expect(roots.includes(2)).toBeTruthy();

    roots = quadratic(2, 4, -6);
    expect(roots.includes(1)).toBeTruthy();
    expect(roots.includes(-3)).toBeTruthy();

    roots = quadratic(1, 1, 2);
    expect(roots.includes(NaN)).toBeTruthy();
  });
});
