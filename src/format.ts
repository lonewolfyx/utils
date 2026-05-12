/**
 * Formats a number with locale-specific thousand separators
 * @param num - The number to format
 * @returns Formatted number string with commas as thousand separators
 * @example formatNumber(1234567890) // "1,234,567,890"
 */
export function formatNumber(num: number): string {
    return num.toLocaleString('en-US')
}
