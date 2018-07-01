module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "arrow-parens": [
            "error",
        ],
        "arrow-spacing": [
            "error",
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "comma-style": [
            "error"
        ],
        "curly": [
            "error",
            "all"
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "jsx-quotes": [
            "error",
            "prefer-single",
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "newline-after-var": [
            "error"
        ],
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 2
            }
        ],
        "no-else-return": [
            "error"
        ],
        "no-empty-function": [
            "error"
        ],
        "no-extra-parens": [
            "error",
            "all",
            {
                "ignoreJSX": "all",
                "nestedBinaryExpressions": false,
                "enforceForArrowConditionals": false
            }
        ],
        "no-magic-numbers": [
            "error",
            {
                "ignore": [
                    -1,
                    0,
                    1,
                    2,
                    3,
                    4,
                    100
                ]
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2,
                "maxEOF": 1,
                "maxBOF": 1
            }
        ],
        "no-tabs": [
            "error"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "no-unused-vars": [
            "error",
            {
                "varsIgnorePattern": "^_",
                "argsIgnorePattern": "^_"
            }
        ],
        "no-var": [
            "error",
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/jsx-indent": [
            "error",
            4,
        ],
        "react/jsx-key": [
            "error",
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 2,
            },
        ],
        "react/jsx-no-duplicate-props": [
            "error",
            {
                "ignoreCase": true,
            },
        ],
        "react/jsx-no-undef": [
            "error",
        ],
        "react/jsx-pascal-case": [
            "error",
        ],
        "react/jsx-tag-spacing": [
            "error",
        ],
        "react/jsx-wrap-multilines": [
            "error",
        ],
        "react/jsx-boolean-value": [
            "error",
            "always",
        ],
        "react/jsx-equals-spacing": [
            "error",
            "never",
        ],
        "react/jsx-handler-names": [
            "error",
        ],
        "react/jsx-closing-bracket-location": [
            "error",
            "after-props",
        ],
        "react/jsx-curly-spacing": [
            "error",
            "never",
        ],
        "react/jsx-first-prop-new-line": [
            "error",
            "multiline",
        ],
        "react/jsx-boolean-value": [
            "error",
            "always",
        ],
        "react/sort-prop-types": [
            "error",
            {
                "callbacksLast": true,
                "ignoreCase": false,
                "requiredFirst": true,
            },
        ],
        "react/sort-comp": [
            "error",
        ],
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": true,
            }
        ],
        "react/no-string-refs": [
            "error",
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-style": [
            "error"
        ],
        "semi-spacing": [
            "error"
        ],
        "space-in-parens": [
            "error"
        ],
        "space-before-blocks": [
            "error"
        ],
        "space-infix-ops": [
            "error"
        ],
        "sort-imports": [
            "error"
        ],
        "sort-vars": [
            "error"
        ]
    }
};

// vim: syntax=javascript ts=4 sw=4 sts=4 sr et
