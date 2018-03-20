---
permalink: /gitcoin
---
<div style="width: 60px;">
<img style="width:100%" src="https://github.com/gitcoinco/gitcoinco/raw/master/img/helmet.png?width=80" />
</div>

# Gitcoin Frontend Dev Exercise

## What Do I Like About It?

**Bootstrap -** Established framework that encourages speed of development, limited cross-browser bugs, tons of documentation, and Flexbox in v4. Also, being the most popular framework, there's a low barrier to entry for the community to pitch in and it encourages the community to grow because even entry level developers are familiar with it.

**Django -** Easy to read/write, fast, scalable. Super easy for the community to understand.

**Open Source -** Love that the community is able and encouraged to pitch in.

**It's in a Really, Really Good Spot -** In the past, I've inherited codebases that have backed themselves into corners due to tech debt, or decisions made to go with one framework or technology over another, and then it's hard to backtrack or change the wheels while the car is in motion. The current Gitcoin codebase has been pretty well maintained and is in a prime spot to scale in many different directions.

## What are some things you would improve?

**CSS Cleanup -** Lots of stylesheets in use, community members writing custom css instead of using Bootstrap defaults.

<div style="max-width:400px;">
<img style="width:100%" src="https://johnegan.io/assets/img/486x361-css.png" srcset="https://johnegan.io/assets/img/486x361-css@2x.png 2x">
</div>

**Optimize Images -** Use retina images for example from `<img src="logo.png" />` to `<img src="logo.png" srcset="logo@2x.png 2x" />` and make better use of SVG when available. Leverage CDN which already looks like is in use for CSS/JS.

**Make Better Use of Bootstrap Grid -** On the marketing pages, I noticed some uneven columns and custom margins instead of utilizing containers and default Bootstrap grid structure. By following the Bootstrap grid it makes it much easier/quicker to develop with consistent spacing.

<div style="max-width:400px;">
<img style="width:100%" src="https://johnegan.io/assets/img/486x601-container.png" srcset="https://johnegan.io/assets/img/486x601-container@2x.png 2x">
</div>

See [https://tools.pingdom.com/#!/cHkazI/gitcoin.co](https://tools.pingdom.com/#!/cHkazI/gitcoin.co) for more info

## What steps would you take to make progress towards an improved front end infrastructure?

**CSS Preprocessor -** I think it makes sense to use a preprocessor like Sass to consolidate stylesheets (I know other people in Gitcoin slack have said the same). Instead of referencing 20+ css files in the `head`, you can use Sass to compile them into a single stylesheet. Sass supports vanilla CSS too so it's not a blocker for the community to get involved, although shouldn't be encouraged.

**JS Optimization -** Consolidate JS files, Possibly use Webpack and Gulp/Grunt to minify, preprocess files.

**Static Site Generator -** I've used Jekyll in the past and it dramatically sped up development time. It allows users to define repeatable components and chunks of code and then reuses those components with dynamic content to built webpages.

Another option is using React and a static site generation like [Gatsby](https://www.gatsbyjs.org/). EVERYBODY is using React to build apps nowadays, and it would allow Gitcoin to scale pretty well. The downside is the learning curve increases by a significant margin and may alienate some of the community.

## How would you involve the Gitcoin community?

**Keeping the Codebase Simple -** I think this is the #1 theme I kept coming back to while working on this project. In order to eat our own dogfood, the community will have to be involved and in order to grow that community, the barrier to entry must be kept low. This means writing easy to read code with popular languages to encourage everybody to get involved.

**More Documentation -** Developing a knowledge base for the community to reference when needed would help tremendously. That in combination with a growing Slack channel provides the support they'd need to take the ball and run with it.

**Relying on the community for low hanging fruit -** As the company scales and the codebase grows, I would lean on the community to get involved, not only for my own sanity but also to get them to feel a sense of ownership in the project.
