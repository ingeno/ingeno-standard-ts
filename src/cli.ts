// @ts-ignore
import { cli as standardEngineCli } from 'standard-engine'

import { options } from './options'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function cli() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  standardEngineCli(options)
}
