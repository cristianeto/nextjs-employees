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
    '^@atoms': '<rootDir>/src/components/atoms/index.ts',
    '^@constants': '<rootDir>/src/constants/index.ts',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@hooks': '<rootDir>/src/hooks/index.ts',
    '^@interfaces': '<rootDir>/src/interfaces/index.ts',
    '^@layouts': '<rootDir>/src/components/layouts/index.ts',
    '^@mocks': '<rootDir>/src/mocks/index.ts',
    '^@molecules': '<rootDir>/src/components/molecules/index.ts',
    '^@organisms': '<rootDir>/src/components/organisms/index.ts',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@screens': '<rootDir>/src/screens/index.ts',
    '^@services': '<rootDir>/src/services/index.ts',
    '^@utils': '<rootDir>/src/utils/index.ts',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
