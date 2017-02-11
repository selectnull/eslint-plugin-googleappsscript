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
