# eslint-plugin-googleappsscript

ESLint plugin for Google Apps Script that defines global variables
exposed by Google Apps Script environment. It does not define any
linting rules.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-googleappsscript`:

```
$ npm install eslint-plugin-googleappsscript --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-googleappsscript` globally.

## Usage

### ESLint flat config

Add `import googleAppsScript from 'eslint-plugin-googleappsscript';` to `eslint.config.mjs`,
then the block for linting `.gs` files could look like this:

```json
  // Google Apps Script files
  {
    files: ['*.gs'],
    languageOptions: {
      ecmaVersion: 2020,  // Google Apps Script is allegedly ES2018, but it does support ?., which requires 2020+
      sourceType: 'script',
      globals: {
        ...googleAppsScript.environments.googleappsscript.globals,
      },
    },
    rules: {
      // ...
    }
  },
```

### ESLint legacy config

Add `googleappsscript` to the plugins section of your `.eslintrc`
configuration file. You can omit the `eslint-plugin-` prefix. Also,
add `googleappsscript/googleappsscript": true` to `env` section:

```json
{
    "plugins": [
      "googleappsscript"
    ],
    "env": {
      "googleappsscript/googleappsscript": true
    }
}
```
