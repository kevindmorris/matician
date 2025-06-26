import randomSample from './randomSample';

describe('randomSample', () => {
  const arr = [1, 2, 3, 4, 5];

  it('returns sample of correct size', () => {
    const sample = randomSample(arr, 3);
    expect(sample.length).toBe(3);
    sample.forEach(x => expect(arr.includes(x)).toBe(true));
  });

  it('throws if size > array length', () => {
    expect(() => randomSample(arr, 6)).toThrow();
  });
});
