module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['**/*.test.tsx', '**/*.test.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};