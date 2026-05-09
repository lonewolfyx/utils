/**
 * Function
 */
export type Fn<T = void> = () => T

export type Task = (() => Promise<unknown>) | Promise<unknown>
