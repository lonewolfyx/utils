import antfu from '@antfu/eslint-config'

export default antfu({
    type: 'lib',
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    yaml: {
        overrides: {
            'yaml/indent': ['error', 2],
        },
    },
})
