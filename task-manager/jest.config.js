module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    coverageProvider: 'v8',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    roots: ['<rootDir>/src'],
    testMatch: [
      '**/__tests__/**/*.+(ts|tsx|js)',
      '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'esbuild-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', "<rootDir>/src/tests/setupTests.ts"],
  };