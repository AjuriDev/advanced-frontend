const jestConfig = {
  globals: {
    __IS_DEV__: true,
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>__mocks__/svgMock.tsx',
  },
  rootDir: '../../',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    //  С регуляркой по умолчанию могут быть проблемы на windows
    // '**/__tests__/**/*.[jt]s?(x)',
    // '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupJest.ts'],
};

export default jestConfig;
