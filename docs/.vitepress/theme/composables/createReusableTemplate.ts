import type { SetupContext, SlotsType, VNodeChild } from 'vue'

export function createReusableTemplate<T extends Record<string, any> = Record<string, any>>(): [{
    setup: (_: Record<string, any>, context: SetupContext<object, SlotsType<{
        default: (props: T) => VNodeChild
    }>>) => () => void
}, (props: T) => VNodeChild] {
    let render: ((props: T) => VNodeChild) | null

    const DefineTemplate = {
        setup(_: Record<string, any>, context: SetupContext<object, SlotsType<{ default: (props: T) => VNodeChild }>>) {
            return () => {
                render = context.slots.default
            }
        },
    }

    const UseTemplate = (props: T): VNodeChild => render?.(props)

    return [DefineTemplate, UseTemplate]
}
