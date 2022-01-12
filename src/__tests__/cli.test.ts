// @ts-ignore
import * as standardEngine from 'standard-engine';
import { cli } from '../cli';
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-assignment
const packageJson = require('../../package.json')

describe('cli', () => {
  test('exports a cli function that calls standard-engine.cli with default options', () => {
    cli();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(standardEngine.cli).toHaveBeenCalledWith(expect.objectContaining({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      version: packageJson.version,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      homepage: packageJson.homepage,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
      bugs: packageJson.bugs.url,
      cmd: 'ingenots',
      tagline: 'Ingeno Typescript standards',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      eslintConfig: expect.objectContaining({
        extensions: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx'],
      }),
    }));
  });
});
