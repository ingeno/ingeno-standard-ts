const ERROR = 2
const ALWAYS = 'always'

module.exports = {
  defaultIgnores: true,
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  helpUrl: 'https://chris.beams.io/posts/git-commit/',
  ignores: [(commit) => commit.includes('Signed-off-by: dependabot[bot] <support@github.com>')],
  parserPreset: {
    parserOpts: {
      noteKeywords: ['See', 'Signed-off-by', 'Co-authored-by'],
    },
  },
  rules: {
    'body-case': [ERROR, ALWAYS, 'sentence-case'],
    'body-full-stop': [ERROR, ALWAYS],
    'body-leading-blank': [ERROR, ALWAYS],
    'body-max-line-length': [ERROR, ALWAYS, 72],
    'footer-leading-blank': [ERROR, ALWAYS],
    'footer-max-line-length': [ERROR, ALWAYS, Infinity],
  },
}
