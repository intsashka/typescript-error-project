import type {Linter} from 'eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';

const config: Linter.Config[] = [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            'react-hooks': pluginReactHooks
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            'react/prop-types': 'off',
            'react-hooks/exhaustive-deps': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-curly-brace-presence': ['error', 'never'],
        },
    },
];

export default config;
