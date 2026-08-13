export function isUrl(link: string): boolean {
    // 只支持 http:// 和 https://，必须有域名部分
    return /^(https?):\/\/[^ \t\r\n\f\v\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]{2,}$/.test(link)
}
