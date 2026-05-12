import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
}

const HASH_WITHOUT_FRAGMENT_RE = /#.*?(?=:~:|$)/
const HASH_OR_QUERY_RE = /[?#].*$/
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?(?:\.(?:md|html))?$/

export const inBrowser = typeof document !== 'undefined'

export function isActive(
    currentPath: string,
    matchPath?: string,
    asRegex: boolean = false,
): boolean {
    if (matchPath === undefined) {
        return false
    }

    currentPath = normalize(`/${currentPath}`)

    if (asRegex) {
        return new RegExp(matchPath).test(currentPath)
    }

    if (normalize(matchPath) !== currentPath) {
        return false
    }

    const hashMatch = matchPath.match(HASH_WITHOUT_FRAGMENT_RE)

    if (hashMatch) {
        return (inBrowser ? location.hash : '') === hashMatch[0]
    }

    return true
}

export function normalize(path: string): string {
    return decodeURI(path)
        .replace(HASH_OR_QUERY_RE, '')
        .replace(INDEX_OR_EXT_RE, '$1')
}
