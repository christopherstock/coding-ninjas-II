module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
        'eslint-plugin-react-refresh',
        'eslint-plugin-prefer-arrow',
        'eslint-plugin-import',
        'react-refresh'
    ],
    rules: {
        '@typescript-eslint/typedef': [
            'warn', {
                arrayDestructuring: false,
                arrowParameter: true,
                memberVariableDeclaration: true,
                objectDestructuring: true,
                parameter: true,
                propertyDeclaration: true,
                variableDeclaration: false
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/consistent-type-definitions': 'off',
        'indent': [
            'warn',
            4,
            {"SwitchCase": 1}
        ],
        "import/extensions": ['off', 'ignorePackages'],
        'object-curly-spacing': ['warn', 'always'],
        'react/jsx-curly-spacing': [
            'warn',
            'always',
            {spacing: {"objectLiterals": "never"}},
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'off', {
                multiline: {
                    delimiter: 'none',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/quotes': ['warn', 'single'],
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/semi': ['off', null],
        '@typescript-eslint/type-annotation-spacing': ['warn', {
            before: false,
            after: true
        }],
        '@typescript-eslint/unified-signatures': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/no-use-before-define': 'off',
        'arrow-body-style': ['warn', 'always'],
        'arrow-parens': ['warn', 'as-needed'],
        camelcase: 'warn',
        'comma-dangle': [
            'warn', {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'never'
            }
        ],
        complexity: 'warn',
        'require-jsdoc': [
            'off', {
                'require':
                    {
                        'FunctionDeclaration': true,
                        'MethodDefinition': true,
                        'ClassDeclaration': true,
                        'ArrowFunctionExpression': true,
                        'FunctionExpression': true
                    }
            }
        ],
        'constructor-super': 'warn',
        curly: 'warn',
        'dot-notation': 'warn',
        'eol-last': 'warn',
        eqeqeq: ['warn', 'always'],
        'guard-for-in': 'warn',
        'id-blacklist': ['warn', 'any', 'Number', 'number', 'String', 'string', 'Boolean', 'boolean'],
        'id-match': 'warn',
        'import/no-deprecated': 'warn',
        'import/order': 'warn',
        'linebreak-style': 'off',
        'brace-style': [
            'warn',
            '1tbs',
            {
                'allowSingleLine': true,
            },
        ],
        'max-classes-per-file': ['warn', 1],
        'max-len': [
            'warn', {
                'code': 120,
                'tabWidth': 4
            }
        ],
        'new-parens': 'off',
        'newline-per-chained-call': 'off',
        'no-bitwise': 'warn',
        'no-caller': 'warn',
        'no-cond-assign': 'warn',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-empty': 'warn',
        'no-empty-function': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        'no-eval': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-semi': 'warn',
        'no-fallthrough': 'warn',
        'no-invalid-this': 'warn',
        'no-irregular-whitespace': 'error',
        'no-multiple-empty-lines': ['warn', { "max": 2, "maxEOF": 0, "maxBOF": 0 }],
        'no-new-wrappers': 'warn',
        '@typescript-eslint/no-shadow': [
            'warn', {
                hoist: 'all',
            },
        ],
        'no-throw-literal': 'warn',
        'no-trailing-spaces': 'warn',
        'no-undef-init': 'warn',
        'no-underscore-dangle': 'warn',
        'no-unsafe-finally': 'warn',
        'no-unused-expressions': 'warn',
        'no-unused-labels': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'object-shorthand': 'off',
        'one-var': ['warn', 'never'],
        'prefer-arrow/prefer-arrow-functions': [
            'warn', {
                disallowPrototype: false,
                singleReturnOnly: true,
                classPropertiesAllowed: false,
            },
        ],
        'quote-props': 'off',
        radix: 'warn',
        'space-before-function-paren': ['warn', 'never'],
        'space-in-parens': ['warn'],
        'space-infix-ops': ['warn'],
        'keyword-spacing': ['warn'],
        'spaced-comment': ['warn', 'always', {
            markers: ['/'],
            line: {
                markers: ['/'],
                exceptions: ['-', '+', '/']
            }
        }],
        'use-isnan': 'warn',
        'valid-typeof': 'off',
        '@typescript-eslint/array-type': [
            'warn', {
                'default': 'array'
            }
        ]
    },
};
