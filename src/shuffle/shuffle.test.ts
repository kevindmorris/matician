import shuffle from './shuffle';

describe('shuffle', () => {
  it('returns array with same elements in different order', () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle(original);
    expect(shuffled.sort()).toEqual(original.sort());
    expect(shuffled).not.toEqual(original); // Might fail if same order randomly
  });
});
