import antfu from '@antfu/eslint-config'

export default antfu({
    type: 'lib',
    typescript: true,
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    yaml: {
        overrides: {
            'yaml/indent': ['error', 2],
        },
    },
    vue: {
        overrides: {
            'vue/no-template-shadow': 'off',
            'vue/block-order': [
                'error',
                {
                    order: ['template', 'script', 'style'],
                },
            ],
        },
    },
    rules: {
        'no-unused-vars': 'off',
        'regexp/no-unused-capturing-group': 'off',
        'node/prefer-global/process': 'off',
        'unused-imports/no-unused-vars': 'off',
        'e18e/prefer-static-regex': 'off',
    },
})
