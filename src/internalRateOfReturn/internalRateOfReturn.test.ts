import internalRateOfReturn from './internalRateOfReturn';

describe('internalRateOfReturn', () => {
  it('calculates IRR for typical cash flows', () => {
    const cashFlows = [-1000, 300, 420, 680];
    const irr = internalRateOfReturn(cashFlows);
    expect(irr).toBeCloseTo(0.1634, 4); // ~16.34%
  });

  it('returns 0 if all cash flows are 0', () => {
    expect(() => internalRateOfReturn([0, 0, 0])).toThrow("IRR did not converge");
  });

  it('throws for non-converging IRR', () => {
    const cashFlows = [-100, 20, 20, 20]; // unlikely to converge to 0 NPV
    expect(() => internalRateOfReturn(cashFlows, 0.9)).toThrow("IRR did not converge");
  });
});
