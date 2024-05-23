import factorial from "../factorial";

/**
 * A discrete probability distribution that represents the likelihood of `x` successes in `n` trials, each with a probability of success `p`.
 * @since 1.0.0
 * @param {number} n The number of trials.
 * @param {number} x The number of successes.
 * @param {number} p The probability of a success.
 * @returns {number} Returns the probability of observing a specific number of successful outcomes in a specified number of trials.
 */
export default function binomial(n: number, x: number, p: number): number {
  if (
    !Number.isInteger(n) ||
    n < 1 ||
    !Number.isInteger(x) ||
    x < 1 ||
    x > n ||
    p < 0 ||
    p > 1
  )
    return NaN;

  return (
    (factorial(n) * Math.pow(p, x) * Math.pow(1 - p, n - x)) /
    (factorial(x) * factorial(n - x))
  );
}
