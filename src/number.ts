/**
 * Calculates the sum of all numbers in an array.
 *
 * @param nums - An array of numbers
 * @returns The total sum of all elements in the array
 * @example
 * ```ts
 * sum([0, 1, 2, 3, 4, 45]) // 55
 * sum([1, 2, 3]) // 6
 * sum([]) // 0
 * ```
 * @category Number
 */
export function sum(nums: number[]): number {
    return nums.reduce((acc, cur) => acc + cur, 0)
}
