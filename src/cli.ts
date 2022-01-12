// @ts-ignore
import * as standardEngine from 'standard-engine';
import { options } from './options';

export function cli() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  standardEngine.cli(options);
}
