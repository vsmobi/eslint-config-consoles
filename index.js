module.exports = {
    "extends": [
        "airbnb-typescript"
    ],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/comma-dangle": [
            "error",
            "never"
        ],
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                "functions": false
            }
        ],
        "import/no-default-export": "error",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "linebreak-style": "off",
        "max-len": [
            "error",
            {
                "code": 140,
                "tabWidth": 4
            }
        ],
        "no-plusplus": "off",
        "object-curly-newline": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-props-no-spreading": "off",
        "react/jsx-tag-spacing": "off",
        "react/require-default-props": "off",
        "react/forbid-prop-types": "off",
        "react/prop-types": "off",
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    }
}
;
