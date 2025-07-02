/**
 * Sorts an array of objects by a specified property key.
 *
 * @template T - Type of the items in the array.
 * @param array - The array to sort.
 * @param key - The key to sort by.
 * @param direction - 'asc' (default) or 'desc' for descending order.
 * @returns A new array sorted by the specified key.
 *
 * @example
 * ```ts
 * sortBy([{a: 3}, {a: 1}, {a: 2}], 'a'); // [{a: 1}, {a: 2}, {a: 3}]
 * sortBy([{a: 'b'}, {a: 'a'}], 'a', 'desc'); // [{a: 'b'}, {a: 'a'}]
 * ```
 */
export default function sortBy<T extends Record<string, any>>(
  array: T[],
  key: keyof T,
  direction: "asc" | "desc" = "asc"
): T[] {
  const sorted = [...array].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];

    if (valA < valB) return direction === "asc" ? -1 : 1;
    if (valA > valB) return direction === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
}
