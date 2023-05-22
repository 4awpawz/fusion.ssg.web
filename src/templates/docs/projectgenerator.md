---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Project Generator",
}
docindex: {
    topic: gettingstarted,
    subtopic: projectgenerator,
}
---

<em>GETTING STARTED</em>


# Project Generator

fusion.ssg's project generator relieves you of the burden of having to manually create and configure your projects. When run, it creates your project and also installs all the project's required dependencies. The most difficult task you will face when creating a new fusion.ssg project is deciding what to name it :).

## Usage

To create a new project, run the following in your terminal:

```shell
fusion new [the name of your project]
```

When you run the above, fusion.ssg will, using the name that you provided, create a new project in a child folder of the current folder.

## Building and Serving Your New Project

To build and serve your project, run the following in your terminal:

```shell
cd [the name of your project]
npm run development
```
<p class="info">Now that you have created your project, open it in your editor and then read the documentation for <a href="{baseURL}/docs/projectstructure">project structure.</a></p>
