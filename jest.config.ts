import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  // this is a workaround since enabling coverage breaks sourceMaps
  // See: https://github.com/kulshekhar/ts-jest/issues/917
  // See: https://github.com/facebook/jest/issues/5739
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!dist/**', '!node_modules/**'],
  coverageDirectory: '<rootDir>/reports/coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['js', 'ts', 'json'],
  preset: 'ts-jest',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/reports/unittests',
        outputName: 'junit.xml',
      },
    ],
  ],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
}

export default config
