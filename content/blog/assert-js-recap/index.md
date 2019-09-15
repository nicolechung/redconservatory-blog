---
title: A recap of AssertJS, 2019
date: "2019-09-15T11:08:03.284Z"
description: I attended AssertJS and discovered a newfound interest in testing. Here is a recap of the conference
type: blog
---

This past Thursday, I attended [AssertJS](https://www.assertjs.com/), a conference held in Toronto on the topic of Javascript testing. 

I found overall that all the talks were of the right length (below 30 minutes) and on topics very relevant to what I do in my day work on the frontend.

Below is a recap of what the talks were about, in thanks part to Ruhee Dewji (who had the sense to take notes).

## Morning

[James Shore](https://www.assertjs.com/speakers#james) gave a keynote on the importance of tests. He brought up an interesting idea which are that tests are **more** important than architecture - architecture up front can slow down feature development. Writing tests up front can speed up refactoring after initial development. 

After this, [Adam Archer](https://www.assertjs.com/speakers#adam) gave a talk about scaling up without a dedicated QA team, a practise that is gaining in popularity at least within startups in Toronto. QA should be part of a developers job, and Adam outlined tools that his workplace uses to enable that, such as making rollback of code to production simpler, test coverage and CLI tools to make code review easier.

## Midmorning Break
After this, there was a short break followed by [Josh Justice](https://www.assertjs.com/speakers#josh) from Big Nerd Ranch talking about *Old solutions for new testing problems*. This was a worthwhile talk because most people I know are too busy learning their current testing library to read older books such as [xUnit Test Patterns](http://xunitpatterns.com/). Josh delved into "Test smells" which he renamed to "Test warnings", patterns in your testing code that make tests harder to understand for folks who aren't familiar with your feature, or which causes tests to be brittle. 

Some notable ones are **Flexible test** which is conditionally reusing the same test logic for many cases. A sign of a flexible test is having conditionals (if statements) in your test. Flexible tests can be broken down into several **simple tests** for better readability.

Another interesting one was **Mystery Guest** which is a fun way of saying that your fixtures / test data don't make sense to anyone who is not familiar with how your feature works. Ways around this include having specific fixtures (**Fresh fixtures**) for each test, or, in the case of very large fixtures, using a **creation method** which displays the specific data used in the particular test.

Next up was [Carolina Pinzon](https://www.assertjs.com/speakers#carolina) who talked about writing tests in an environment where library support is limited. Carolina works on Dapper, a smart contract Ethereum wallet built as a Chrome extension. Currently there are no ways to test Chrome extensions in Cypress and her team was tasked with writing workarounds for this. She also talked about having a local blockchain for testing. While she raised some interesting points, it seems like her talk was so complicated it could have gone over a few talks (testing extensions, testing blockchain, testing for security vulnerabilities).

## Lunch Break

Following a lunch break where I got to catch up with a bunch of programmers from my old workplace, [Ryan Marsh](https://www.assertjs.com/speakers#ryan) gave a really great talk about forming habits, in this case, forming the habit of being a TDD developer. He explained that TDD creates a tight feedback loop which is very pleasant for the development experience, and he presented a method to break the habit of NOT writing tests. I don't want to give away the secret, I recommended watching the talk online when it's posted.

Following this were some lightning talks. [Isaac Z. Schulueter](https://www.assertjs.com/speakers#isaac) gave a talk on 99% test coverage. This talk seemed to be a bit about modifying your testing config to cheat coverage that wasn't necessary. [Clair So](https://www.assertjs.com/speakers#clare) presented a very worthwhile comparison between Selenium, Puppeteer and Cypress. [Colin Igrig](https://www.assertjs.com/speakers#colin) presented a talk about **Tests > types**. For some reason his talk covered the downsides of typed languages like Typescript, but did not talk about testing as much.

## Afternoon break

After an afternoon break, [Jason Palmer](https://www.assertjs.com/speakers#jason) gave a superb talk on test flakiness. He talked about things that cause test flakiness, such as being dependent on third party data. Sometimes data does not arrive in time for the test to run, and so the test fails. Other times, tests run faster than the speed users actually click around an app. 

Spotify make a library called [polly-jest-presets](spotify/polly-jest-presets) which records network requests and plays them back when the tests internet cuts out, thus cutting down on test flakiness. 

Jason then went on to discuss automated ways to detect test flakiness, such as running tests 100 times (slow) and running tests 3-5 times and instrumenting for code coverage, and then calculating the coverage delta between each run. This last one is the most accurate and intriguing, Jason explained that Spotify was hiring if anyone was interested in this challenge.

Following this talk, [Michael Shilman](https://www.assertjs.com/speakers#michael) talked about component-driven development with Storybook and Chromatic. While interesting, this talk seemed a bit biased because he was just talking about tools that Michael maintains and makes money from. He did make some very honest statements about how tricky testing UI is compared to testing backend code.

## Conclusion
For people who have been testing for a bit of time, and are curious about how to write better tests, definitely watch [Josh Justice's talk](https://www.assertjs.com/speakers#josh). While some of the techniques caused a lot of debate on the breaks, there were a lot of points worth thinking about, such as how people not familiar with your code will read your tests. Similarly, [Jason Palmer's](https://www.assertjs.com/speakers#jason) talk about test flakiness will resonate with anyone who has had frustrations with making tests pass consistently (which I am sure is pretty much anyone who has written a frontend test).

Is it worth going to a conference that revolves entirely around testing? The answer is YES. Testing on the frontend is still evolving and very tricky, and all of these talks addressed this in a way that was engaging and useful.

I recommend watching the talks when they come online, they are all quite short and very engaging.









