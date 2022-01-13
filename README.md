# ingeno-standard-ts

TypeScript style guide, with linter, formatter and automatic code fixer, inspired by [StandardJS](https://standardjs.com/).

The main selling point is:

> **No configuration.** The easiest way to enforce code quality in your project. No decisions to make. No `.eslintrc`
> files to manage. It just works.

## Install

`npm install git+https://github.com/ingeno/ingeno-standard-ts.git --save-dev`

## Usage

The easiest way is simply to call the `ingenots` binary:

```shell
# global install
ingenots

# local install
npx ingenots
```

To get a pretty report, simply pipe the results in `snazzy`:

```shell
ingenots | snazzy
```

For best results, set it as a `script` in `package.json`:

```json
{
  "devDependencies": {
    "ingenots": "https://github.com/ingeno/ingeno-standard-ts/releases/download/v0.0.4/ingenots-0.0.4.tgz",
    "snazzy": "9.0.0"
  },
  "scripts": {
    "lint": "ingenots | snazzy"
  }
}
```

### Configuration

By default `ingeno-standard-ts` will search the current working director (cwd) for the following in order

- `tsconfig.eslint.json`
- `tsconfig.json`

You can also manually configure the location of the tsconfig file by either passing the path to the `--project` flag or
adding a `ingenots` configuration property to your `package.json` file.

```json
{
  "ingenots": {
    "project": "path/to/tsconfig.json"
  }
}
```

It's possible to specify multiple projects using an array as in the underlying [parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject).

### Automatic Fixes

```shell
ingenots --fix
```

### Ignoring Files

Add a `ingenots` section in `package.json`:

```json
{
  "ingenots": {
    "project": "./tsconfig.eslint.json",
    "ignore": [
      "dist"
    ]
  }
}
```

### Disabling Rules

Simply use [ESLint configuration comments](https://eslint.org/docs/user-guide/configuring/rules#disabling-rules).

### IDE Integration

As per [standard-engine](https://github.com/standard/standard-engine#editor-integrations), add a `standard-engine`
section to `package.json`:

```json
{
  "standard-engine": "ingenots"
}
```

or

```json
{
  "standard-engine": {
    "name": "ingenots"
  }
}
```
