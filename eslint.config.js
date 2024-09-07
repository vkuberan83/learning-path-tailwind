// eslint.config.js
import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            ...typescriptPlugin.configs.recommended.rules,
            indent: ['error', 2],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
        },
    },
];
