// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@hooks': '<rootDir>/src/hooks/index.ts',
    '^@interfaces': '<rootDir>/src/interfaces/index.ts',
    '^@layouts/(.*)$': '<rootDir>/src/components/layouts/$1',
    '^@mocks': '<rootDir>/src/mocks/index.ts',
    '^@molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
