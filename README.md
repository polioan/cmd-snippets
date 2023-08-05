# cmd-snippets
[![version](https://img.shields.io/npm/v/cmd-snippets.svg)](https://www.npmjs.com/package/cmd-snippets)
[![license](https://img.shields.io/github/license/polioan/cmd-snippets)](https://opensource.org/licenses/MIT)
[![created by Ivan Polushin](https://img.shields.io/badge/created%20by-@polioan-4BBAAB.svg)](https://github.com/polioan)

Create cmd snippets

## Install

### npm

```shell
npm i -g cmd-snippets
```

### yarn

```shell
yarn global add cmd-snippets
```

## Usage

Add script to %appdata%/cmd-snippets-storage

```shell
echo console.log('hello world') >> C:\\Users\\User\\AppData\\Roaming\\cmd-snippets-storage\\hello-world.js
```

Or

```shell
echo "console.log('hello world')" >> ~/.config/cmd-snippets-storage/hello-world.js
```

And now you can run it with

```shell
snip hello-world
```

Currently support python and node (but it can be extended in EXECUTORS)