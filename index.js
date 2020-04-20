module.exports = {
    extends: [
        './base.js'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        'import/extensions': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars-experimental': 'error'
    },
    plugins: [
        '@typescript-eslint'
    ],
    parserOptions: {
        project: './tsconfig.json'
    }
};
