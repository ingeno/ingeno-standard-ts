export const cli = jest.fn();
export class StandardEngine {
  readonly cmd: string;
  readonly eslintConfig: { extensions: string[] };

  constructor(options: { cmd: string, eslintConfig: { extensions: string[] } }) {
    this.cmd = options.cmd;
    this.eslintConfig = options.eslintConfig;
  }
}
