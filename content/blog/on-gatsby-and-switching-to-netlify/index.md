---
title: On blogging with Gatsby and switching to Netlify
date: "2019-08-26T22:12:03.284Z"
description: I decided I wanted to start blogging again, and I wanted to have a continuous CI for my blog. And I wanted my site to load quickly, so I tried out Gatsby + Netlify.
type: blog
---

I've been meaning to start blogging again, mostly for personal reasons. I like writing and I like coding, and writing about coding seems like a good way to deepen my knowledge.

I also wanted a site that loaded quickly, and since I write React every day at work, Gatsby seemed like a good way to go about having a **static progressive web app blog**.

### Avoiding Procrastination
I wanted to have a blog again, which meant something more robust than HTML + CSS pages. Ideally I would have a blog I could write with Markdown, since then I could focus mainly on my writing and not fiddling with my frontend code.

This was a big goal really - to not be fiddling with my blog code, but actually **learning** about code, new technologies I was interested in, and writing.

### Is AWS the right place to hold your blog? The answer is no
I knew I wanted to have a simple way to publish my blog posts, preferably with just a *git commit* and *git push* to my master branch of my blog repository.

My former site setup was a few static HTML pages with some CSS, which I deployed via Gitlab to a static AWS S3 bucket. I chose Gitlab because it had a free CI, but this wasn't ideal. I had continuous deploys, but I had to configure my S3 bucket, set up my bucket with Route 53, and set up my pipeline with Gitlab yaml files. Then I had to set up my AWS secret stuff with Gitlab environment variables because why show everyone your secrets in your yaml files? (Believe it or not I've seen quite a few projects that do this).

I also kind of wanted to get away from using Gitlab. It's not personal, but every job I've had uses Github and I could not for the life of me get used to having to log into Gitlab just to take care of my deploys.

Also, I'm paying for my AWS bucket. It's less than three dollars a month but for a handful of HTML pages it seems like overkill. 

Netlify came out with a free option and integration with Github, so I decided to test it out. 

### Choosing a starter template
I noticed right away that Gatsby has a lot of starter templates, but all the templates use different styling systems (of course because insert frontend-hipster-CSS-in-JS-eyeroll things here). Some of the starter templates use PostCSS, some use Sass, some use styled-components, and some use Emotion.

After some browsing around, I decided to go with a starter template I liked and just live with whatever styling solution it had.

In which case the one I happened to use was Emotion, which I am not a fan of, you can use the **styled** helper in Emotion, but this one happened to use inline style objects that look like this:

```javascript
<h3
    style={{
    marginBottom: rhythm(1 / 4),
    fontSize: `24px`
    }}
>
```

Anyhow, to revisit my **avoiding procrastination** goal, I just decided to go with it. It's not my favourite way of styling, but for a few templates, I could live with it. 

Maybe if I get annoyed with it at some point I will swap in another styling system I like better, and rewrite all my existing CSS. But probably not.

### Is Gatsby easier than Wordpress?
This is about if you want to actually modify your starter template, which I did. If you just want to go with exactly what the template has you can skip all of this and just go to the Netlify part.

For some reason I thought Gatsby would have a super simple learning curve. It kind of does...if you've been a React developer for years and also have some familiarity with Wordpress. Oh, and you know a bit of NodeJS and GraphQL.

Seriously, if you are thinking of learning React and are thinking, *hm maybe I will set up a blog in Gatsby*, do not do this! Better to create a simple app in [Code Sandbox](https://codesandbox.io/).

If anything, if you've been meaning to learn GraphQL, maybe setting up a Gatsby blog is a fun way to do this. Gatsby does a bunch of magic to turn your markdown into a GraphQL API, once you get the hang of it, it's pretty straightforward to pull in your Markdown content into the React templates you are using.

Also Gatsby comes with a built in GraphiQL explorer so you can figure out how to write queries to retrieve the data you want.

Gatsby has a plugin system not unlike Wordpress in the sense that it's not transferable knowledge at all. I think my starter blog uses about 15 plugins, to get up and running requires learning about at least 5 of them. 

### Setting up Netlify
All I had to do was sign up for a Netlify account and link it to my Github account, and then give permissions to Netlify to use my blog repo. 

Tada! The deploy started right away. Then I just had to log in to my domain control panel and add the Netlify nameservers.

The UI for Netlify is a pleasure to use. At no point did I experience a "where is the setting for this" moment. There's even a spinner to let you know Netlify is busy waiting on the DNS to propagate (always the worst part of switching your domain to a new server)

### Would I do this again?
I wouldn't describe Gatsby as **easy**, but if you know React you can get a blog up and running in hours with it (writing the blog posts is another thing altogether). 

If you like Markdown once you are set up Gatsby gets out of the way and you can just focus on writing. Also Gatsby loads your pages quite quickly.

I would definitely recommend Netlify. Right now the pricing to host a site with a custom domain is **free** and it's fun to work with.






