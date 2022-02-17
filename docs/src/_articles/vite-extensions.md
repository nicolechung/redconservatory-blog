---
title: Using Vite for building browser extensions
date: "2022-02-15T08:08:03.284Z"
description: An easy way to set up React, Typescript and Vite to build a browser extension
type: blog
---


```bash
yarn create vite
```

Follow the prompts to create a React and Typescript project.

Add the [rollup-plugin-chrome-extension]()

```bash
yarn add -D rollup-plugin-chrome-extension
```

With this setup, your React files should all be in a folder named `src`.

If this is the case, set up your vite config like this:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { chromeExtension } from 'rollup-plugin-chrome-extension'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  plugins: [react(), chromeExtension()]
})
```

With this plugin, vite (rollup) will read all the files in the manifest and make sure they are included in the build in the resulting `dist` folder.

Note: For this plugin to work, your `manifest.json` file needs to be in the same folder as your `root` setting. In the example above, it's `src`.