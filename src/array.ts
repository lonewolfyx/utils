import { readFile } from 'node:fs/promises'

/**
 * Read a JSON file and parse its contents.
 *
 * @param path - The path to the JSON file.
 * @returns The parsed JSON value.
 * @example
 * ```ts
 * const config = await readJsonFile<Config>('./config.json')
 * ```
 * @category IO
 */
export async function readJsonContent<T = unknown>(path: string): Promise<T> {
    const content = await readFile(path, 'utf-8')
    return JSON.parse(content) as T
}
