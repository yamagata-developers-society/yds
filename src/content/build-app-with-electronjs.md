---
layout: post
title: 'Build an App with Electron.js'
author: Elliott Hindman
tags: ['electron']
image: img/posts/electron-cover.jpg
date: '2018-12-01T18:00:00.000Z'
draft: false
---

# Build an App with [Electron.js](https://electronjs.org/)

> "If you can build a website, you can build a desktop app. Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS."

Look at the [apps built on Electron](https://electronjs.org/apps)! You might be surprised.

![Apps build on Electron](img/posts/electron-apps.jpg)

## I. Use the package or a CLI

- Electron.js can be installed separatately as a package.

```bash
$ npm install -D electron@latest
```

- Or you can use a CLI to work faster! [Lots to choose from.](https://electronjs.org/docs/tutorial/boilerplates-and-clis)

## II. Bootstrap with electron-forge

I recommend [electron-forge templates](https://electronforge.io/templates) because they are ready to use without much configuration.

1. Install the electron-forge CLI globally

```bash
$ npm install -g electron-forge
```

2. Initialize a new project

```bash
$ electron-forge init my-new-project
```

3. Launch your app

```bash
$ cd my-new-project
$ electron-forge start
```

## III. How to debug

This line in your index.js does it. Comment it out to hide the dev tools.

```js
mainWindow.webContents.openDevTools();
```

I also recommend passing a `mode` option to the `openDevTools()` method:

```js
mainWindow.webContents.openDevTools({ mode: 'bottom' });
```

> See [webContents Documentation](https://github.com/electron/electron/blob/master/docs/api/web-contents.md#contentsopendevtoolsoptions) for more info about available options.

## IV. How to add jQuery and include internal scripts

To add jQuery, first use npm!

```
$ npm install jquery --save
```

And add this line to the index.html file near the closing `</body>` tag:

```js
<script>window.$ = window.jQuery = require('jquery');</script>
```

To add an internal JS file, add this line below that.

```js
<script>require("./public/js/app.js");</script>
```

## V. How to deploy

Take a look at the [available CLI commands](https://electronforge.io/cli). We'll use the `make` command.

```bash
$ electron-forge make [path]
```

## BONUS - How to add custom icon

Easy! After preparing an `icon.icns` file, include the path in your `package.json` file:

```js
"electronPackagerConfig": {
  ...
  "icon": "src/public/icons/mac/icon.icns"
},
```
