module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    ignorePatterns: [
        'build/',
        'dist/',
        'node_modules/',
        '.snapshots/',
        '*.min.js',
    ],
    extends: [
        'google',
        'plugin:react/recommended',
        'plugin:jest/recommended',
    ],
    plugins: [
        'babel',
        'import',
        'react',
        'prettier',
        '@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: '16',
        },
    },
    rules: {
        'space-before-function-paren': 0,
        'react/prop-types': 0,
        'react/jsx-indent': 0,
        'react/jsx-handler-names': 0,
        'react/jsx-fragments': 0,
        'react/no-unused-prop-types': 0,
        'indent': ['error', 4],
        'max-len': [
            'error', {
                'code': 140,
                'ignoreComments': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'no-unused-vars': 'off',
        'import/export': 0,
        'object-curly-spacing': ['error', 'always'],
        'valid-jsdoc': 'off',
        'linebreak-style': 'off',
    },
};
