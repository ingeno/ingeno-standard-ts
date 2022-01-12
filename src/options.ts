import * as eslint from 'eslint';
import * as path from 'path';
// @ts-ignore
import { StandardEngineOptions } from 'standard-engine';
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-assignment
const packageJson = require('../package.json')

export const options: StandardEngineOptions = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
  version: packageJson.version,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
  homepage: packageJson.homepage,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
  bugs: packageJson.bugs.url,
  eslint: eslint,
  cmd: 'ingenots',
  tagline: 'Ingeno Typescript standards',
  eslintConfig: {
    extensions: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx'],
    overrideConfigFile: path.join(__dirname, '..', '.eslintrc.json'),
  },
};
