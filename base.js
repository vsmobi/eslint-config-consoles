module.exports = {
    extends: [
        'eslint-config-airbnb'
    ],
    parser: 'babel-eslint',
    rules: {
        'class-methods-use-this': 'off',
        'no-shadow': 'off',
        'no-plusplus': 'off',
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'object-curly-newline': 'off',
        'comma-dangle': [
            'error',
            'never'
        ],
        'arrow-parens': [
            'error',
            'always'
        ],
        'max-len': [
            'error',
            {
                code: 140,
                tabWidth: 4
            }
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'react/destructuring-assignment': 'off',
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': 'off',
        'react/require-default-props': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-tag-spacing': 'off',
        'linebreak-style': 'off'
    },
    env: {
        browser: true,
        node: true,
        jest: true
    }
};
