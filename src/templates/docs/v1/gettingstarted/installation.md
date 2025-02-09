---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Installation",
}
docindex: {
    topic: gettingstarted,
    subtopic: installation,
}
---

<em>GETTING STARTED</em>

# Installation

<p class="info">fusion.ssg requires <a href="https://nodejs.org/en">Node.js</a> to be installed. It also requires that you have <a href="https://www.typescriptlang.org/">TypeScript</a> globally installed on your system.</p>

<p class="info">Beginning with v1.0.0, fusion.ssg no longer includes a project generator in its package and no longer provides the ability to create new projects directly through its CLI. Instead, <b>the creation of fusion.ssg projects now requires a separate module, fusion.fpg, to be installed globally</b>. Please read <a href="{baseURL}/docs/{docsCurrentVersion}/gettingstarted/projectgenerator">Project Generator</a> for more information about the new project generator, fpg.</p>

The following will guide you through installing both _fusion.ssg_ and _fusion.fpg_, fusion.ssg's _project generator_.

## Install fusion.ssg

Run the following in your terminal to install fusion.ssg

```shell
npm i -g @4awpawz/fusion.ssg
```

## Install fusion.fpg

Run the following in your terminal to install fusion.fpg

```shell
npm i -g @4awpawz/fusion.fpg
```

<p class="info">Now that you have installed all the required packages, you can now create your very first fusion.ssg project by following the instructions found in  <a href="{baseURL}/docs/{docsCurrentVersion}/projectgenerator">Project Generator</a>.</p>
