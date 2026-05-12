import Layout from './Layout.vue'
import './style.css'

export default {
    Layout,
    enhanceApp() {
        if (typeof document !== 'undefined') {
            document.addEventListener('click', (e) => {
                const target = (e.target as HTMLElement).closest('[data-copy]') as HTMLElement | null
                if (!target)
                    return

                const code = target.getAttribute('data-code')
                if (!code)
                    return

                navigator.clipboard.writeText(code)
                target.textContent = 'Copied!'
                setTimeout(() => {
                    target.textContent = 'Copy'
                }, 2000)
            })
        }
    },
}
