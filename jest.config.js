module.exports = {
    globals: {
      DEBUG: false,
      userAgent: 'nodejs',
      __JEST__: true,
      __SAFE_RENDER__: true,
    },
    // transform: {
    //   js$: '<rootDir>/jest/babel.config.js',
    // },
    clearMocks: true,
    collectCoverageFrom: [
      'packages/**/*.js'
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '.stories.js',
      '.helper.js',
      '.data.js',
      '.spec.js',
      '.exclude.js',
    ],
    coverageThreshold: {
      global: {
        branches: 56,
        functions: 66,
        lines: 63,
        statements: 63,
      },
    },
    setupFiles: [
      './setupTests.js',
    ],
    snapshotSerializers: [
      'enzyme-to-json/serializer',
      './jest/component-prop-serializer',
    ],
    roots: [
      '<rootDir>',
    ],
    modulePaths: [
      '<rootDir>',
      '<rootDir>/.storybook',
    ],
    moduleNameMapper: {
      '^.+\\.(css|scss)$': 'identity-obj-proxy',
    },
    testURL: 'http://some.test',
  };
  