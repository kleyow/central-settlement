'use strict'

module.exports = {
  verbose: false,
  // preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.js'],
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  clearMocks: false,
  coverageThreshold: {
  /* Adjust accordingly when integration testing is phased in. */
    global: {
      statements: 0,
      functions: 0,
      branches: 0,
      lines: 0
    }
  },
  // setupFiles: ['<rootDir>/test/int/global_setup.js' ],
  globalSetup: '<rootDir>/test/int/global_setup.js',
  // globalTeardown: '<rootDir>/test/int/global_tear_down.js',
  reporters: ['jest-junit', 'default'],
  coverageDirectory: '<rootDir>/coverage_integration/'
}