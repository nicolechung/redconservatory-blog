---
title: Using Parcel 2 for building browser extension 
date: "2022-01-24T08:08:03.284Z"
description: An easy way to set up React, Typescript and Parcel to build a browser extension
type: blog
---

## TL;DR 

Setup a package.json file:
```js
npm init -Y // follow instructions
```

Install parcel:

```js
yarn add -D parcel
```

Add React and React-DOM

```js
yarn add react react-dom
```

For Typescript, add the related types:

```
yarn add @types/react @types/react-dom --dev
```

Add the parcel web extension plugin:

```js
yarn add -D @parcel/config-webextension
```

Follow the instructions to [set up the plugin](https://parceljs.org/recipes/web-extension/)

## Why Parcel?

If you are building a browser extension for say, chrome or firefox, using parcel is very quick to set up.

The problem with using React is you need a build tool to transform your jsx to a more browser-friendly `React.createElement`. For this you need a build tool.

For the usual React app this is not so bad. 

The problem arises when you are building a browser extension. For this you have a `manifest` which might have many files that need to be outputted as browser friendly JS. You are not just creating a `bundle.js` file, but instead many files based on what you have inside your `manifest.json`.

This is where the [parcel web extension plugin](https://parceljs.org/recipes/web-extension/) comes in. The plugin reads all the files that are in your `manifest.json` file and outputs your html, css and javascript that is in a browser-friendly format.

## But what about Typescript and my CSS files?

Parcel has a bit of magic that you might not gather from reading the docs (which are very good, by the way!)

Parcel reads all of your html files in the `manifest`. When Parcel sees `ts` or `tsx` or `css` or even `scss` files you have linked (either by using `link` or `script` tags) in your HTML files, Parcel will automagically (for the most part) understand that it should convert this to the corresponding `js` or `css` file.

```html
<!-- will magically work! -->
<script type="module" src="./main.tsx"></script>
<!-- will also magically work-->
<!-- but just remember to install the related plugins -->
<link rel="stylesheet" href="../index.(scss|less|css)" />
```