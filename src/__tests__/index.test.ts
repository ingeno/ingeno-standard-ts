import ingenots from '..'

describe('index', () => {
  test('exports an instance of StandardEngine with the default options', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(ingenots.cmd).toBe('ingenots')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(ingenots.eslintConfig.extensions).toEqual(['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx'])
  })
})
