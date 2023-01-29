/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  moduleNameMapper: {
    '^axios$': 'axios/dist/axios.js',
    'src/(.*)': './src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/mocks/styleMock.js',
    '/^components/(.*)$/': '<rootDir>/src/components/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  roots: ['src'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['<rootDir>/src'],
};
