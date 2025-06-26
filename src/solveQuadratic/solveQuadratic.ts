/**
 * Solves a quadratic equation of the form ax² + bx + c = 0.
 *
 * Returns roots as an array of objects: { real: number, imag: number }.
 * Ensures no -0 values in results.
 *
 * @param a - Coefficient of x²
 * @param b - Coefficient of x
 * @param c - Constant term
 * @returns An array of two roots (real or complex)
 *
 * @example
 * ```ts
 * solveQuadratic(1, 0, -4); // [{ real: 2, imag: 0 }, { real: -2, imag: 0 }]
 * solveQuadratic(1, 0, 4);  // [{ real: 0, imag: 2 }, { real: 0, imag: -2 }]
 * ```
 */
export default function solveQuadratic(
  a: number,
  b: number,
  c: number
): { real: number; imag: number }[] {
  if (a === 0) throw new Error('Coefficient "a" cannot be zero for a quadratic equation.');

  const discriminant = b * b - 4 * a * c;
  const twoA = 2 * a;

  const normalize = (x: number): number => (Object.is(x, -0) ? 0 : x);

  if (discriminant >= 0) {
    const sqrtDisc = Math.sqrt(discriminant);
    return [
      { real: normalize((-b + sqrtDisc) / twoA), imag: 0 },
      { real: normalize((-b - sqrtDisc) / twoA), imag: 0 },
    ];
  } else {
    const sqrtDisc = Math.sqrt(-discriminant);
    return [
      { real: normalize(-b / twoA), imag: normalize(sqrtDisc / twoA) },
      { real: normalize(-b / twoA), imag: normalize(-sqrtDisc / twoA) },
    ];
  }
}
