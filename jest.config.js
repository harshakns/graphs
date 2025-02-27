module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Use "jsdom" for frontend tests
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
