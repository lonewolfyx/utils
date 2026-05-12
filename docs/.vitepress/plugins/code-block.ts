import type MarkdownIt from 'markdown-it'

/**
 * Markdown-it plugin that rewrites code block (fence) rendering.
 *
 * Uses Tailwind utility classes for all styling.
 * Copy functionality is handled by a global click-delegation listener
 * registered in theme/index.ts via enhanceApp.
 */
export function codeBlockPlugin(md: MarkdownIt): void {
    const defaultFence = md.renderer.rules.fence!.bind(md.renderer.rules)

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const info = token.info.trim()
        const lang = info.split(/\s+/)[0] || 'text'
        const rawCode = token.content
        const escapedCode = md.utils.escapeHtml(rawCode)

        // Use the default renderer to get Shiki-highlighted HTML inside <pre><code>
        const highlighted = defaultFence(tokens, idx, options, env, self)

        // Extract the inner <pre><code>...</code></pre> from the default output
        const preMatch = highlighted.match(/<pre[^>]*>([\s\S]*)<\/pre>/)
        const inner = preMatch ? preMatch[1] : `<code>${escapedCode}</code>`

        // Store raw code in data attribute for the global copy handler
        const dataCode = md.utils.escapeHtml(rawCode)

        return `<div class="rounded-lg border bg-code-bg border-code-border overflow-hidden my-4">
<div class="flex items-center justify-between px-3 py-1.5 bg-code-header-bg border-b border-code-border">
<span class="text-[0.65rem] font-semibold tracking-wider uppercase select-none text-code-line-number">${md.utils.escapeHtml(lang)}</span>
<button class="text-[0.7rem] px-2 py-0.5 rounded cursor-pointer bg-transparent text-code-line-number" data-code="${dataCode}" data-copy>Copy</button>
</div>
<div class="overflow-x-auto">
<pre tabindex="0"><code>${inner}</code></pre>
</div>
</div>`
    }
}
