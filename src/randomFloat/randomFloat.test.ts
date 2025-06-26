import randomFloat from "./randomFloat";

describe("randomFloat", () => {
  it("generates floats within range", () => {
    for (let i = 0; i < 100; i++) {
      const val = randomFloat(1, 2);
      expect(val).toBeGreaterThanOrEqual(1);
      expect(val).toBeLessThan(2);
    }
  });
});
