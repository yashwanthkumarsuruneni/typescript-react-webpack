module.exports = {
    roots: [
      "<rootDir>/src"
    ],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    testURL: 'http://localhost',
    collectCoverage: false,
    coverageDirectory: "./coverage",
    coverageReporters: ["lcov", "text", "text-summary"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupTestFrameworkScriptFile: "<rootDir>/src/setupEnzyme.ts"
}