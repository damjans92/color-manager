export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react-jsx",
        esModuleInterop: true,
      },
    },
  },
};
