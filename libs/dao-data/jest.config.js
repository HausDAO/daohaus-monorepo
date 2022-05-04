module.exports = {
  displayName: 'data',
  testEnvironment: 'node',
  preset: '../../jest.preset.js',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },

  transformIgnorePatterns: ['node_modules/(?!(@self.*\\.[tj]s)$)'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/dao-data',
};
