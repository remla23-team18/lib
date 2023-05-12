import type {Config} from 'jest';

const config: Config = {
  modulePathIgnorePatterns: ['src/__tests__/semverRegex.ts'],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
};

export default config;