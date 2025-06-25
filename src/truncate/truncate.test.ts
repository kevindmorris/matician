import truncate from "./truncate";

describe("truncate", () => {
  it("truncates positive numbers", () => {
    expect(truncate(3.9)).toBe(3);
    expect(truncate(1.1)).toBe(1);
  });

  it("truncates negative numbers", () => {
    expect(truncate(-3.9)).toBe(-3);
    expect(truncate(-0.8)).toBe(0);
  });

  it("returns integer unchanged", () => {
    expect(truncate(5)).toBe(5);
    expect(truncate(-7)).toBe(-7);
  });

  it("truncates zero", () => {
    expect(truncate(0)).toBe(0);
  });
});
