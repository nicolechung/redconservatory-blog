---
title: Forking react-scripts to a private repo
date: "2019-08-25T22:12:03.284Z"
description: Need to modify your create-react-app setup, but without making a npm module of your modification? Here's how to do it, and why you might want to avoid it.
type: blog
---

<h1>Forking react-scripts to a private repo</h1>

If you use **create-react-app**, eventually you might reach a point where you want to modify the build scripts (aka webpack configs) yourself.

This is often because you are using libraries that come with their own babel plugins (I'm looking at you, styled-components).

Really, the best way to go about this is to fork react-scripts into your own npm module. However, for various reasons (i.e. your boss) you might be encouraged to fork it to a private repository instead.

This actually is possible, and below I will outline a way to go about this. Keep in mind that with the speed of development on react-scripts, whatever I describe might go out of date very quickly however.

Also, I would just like to point out that the steps below are a lot of added work. If you don't have to fork to a private repo, don't!

There are certain steps I will gloss over because they exist already in tutorials of how to fork react-scripts to your own npm module. I will try to tackle some of the key parts below, but really you should have a deep knowledge of yarn workspaces, npm modules and package.json. 

### Use yarn
Firstly, because **react-scripts** resides in a monorepo structure that uses yarn workspaces, I would recommended using yarn for your fork of react-scripts. 

### What ARE yarn workspaces?
Yarn workspaces are really just folders within your project that have their own package.json. This means you can have packages with different dependencies and node binaries. In the case of **create-react-app** that looks a bit like this:

```js
create-react-app
- package.json
- yarn.lock
    --react-scripts
        - package.json
    -- other packages inside of create-react-app
        - package.json
```

This structure allows you to use **npm** or **yarn** to manage multiple dependencies and versions of each folder that you tell **yarn** is a workspace. 

Note that there is only ONE **yarn.lock** file and that it resides in the root directory. This is because when you add a dependency to say, the react-scripts package.json it will modify the **yarn.lock** in the root of the project. This way, you can install the project and all of it's subprojects dependencies with one command.

Yarn workspaces are very powerful, they allow you to do things like have a single repo for things like your frontend and backend combined, or your frontend combined with your design system. 

### Fork create-react-app, or just react-scripts?
Forking create-react-app is quite easy, you just press the **fork** button in github. 

Forking the workspace **react-scripts** that's *inside* of create-react-app is another issue however. How do you even keep a fork of the workspace up-to-date?

I chose the former in case you are wondering.

### Use yarn link until you get things right
While you are modifying your fork of react-scripts, you'll want to use **yarn link** to link **react-scripts** to your project.

Think of **yarn link** as a temporary **yarn install** or **npm install**. With yarn link, you can keep modifying the code in react-scripts, and your React project will just automagically have those updates.

### Modify the root package.json
This is where things start to get very messy. In a regular fork of react-scripts, you would modify the package.json that is **inside** of the react-scripts folder. But oh no! 

Because you aren't making this an npm module anymore, you have to treat the root package.json in create-react-app as the package.json for react scripts.

This means, first of all, moving the binary for react-scripts over:

```javascript
"bin": {
    "react-scripts": "./packages/react-scripts/bin/react-scripts.js"
}
```

Then, moving **all of the dependencies** for react-scripts over:

```javascript
"dependencies": {
    "cross-env": "^5.2.0",
    "babel-plugin-styled-components": "1.10.4",
    "@babel/core": "7.4.3",
    "@svgr/webpack": "4.2.0",
    // everything else, there are a lot here!
```

### Modifying the paths file
By now you can see where this is starting to go...you are almost doing what **ejecting** your create-react-app does.

By now, if you linked, react-scripts is **kind of** working for you, but it's showing the original template files instead of your actual React project. To fix this, you need to go into the **/config/paths.js** file and look for this line:

```javascript
// config before publish:  we're in ./packages/react-scripts/config/

if (
   !reactScriptsLinked &&
   __dirname.indexOf(path.join('packages', 'react-scripts', '// ')) !== -1
 ) 
```

Delete that entire **if statement**, and the **constants** above that were needed for it, and you should see your React project again.

### Use the repo url in your package.json file
At this point you'll want to push your branch to your repo. You can either tag or branch your work, just make sure to comment the beginning and end of all the line changes you made so when you update your fork, you can tell what changes are **yours** versus changes from **react-scripts** itself.

```javascript
"dependencies": {
    "my-forked-react-scripts": "user/repo#feature\/branch"
  }
```

Reference:

[https://docs.npmjs.com/files/package.json#git-urls-as-dependencies](https://docs.npmjs.com/files/package.json#git-urls-as-dependencies)

[https://docs.npmjs.com/files/package.json#github-urls](https://docs.npmjs.com/files/package.json#github-urls)



