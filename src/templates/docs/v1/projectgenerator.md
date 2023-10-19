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

# fpg Project Generator

<p class="ver">Introduced in v1.0.0</p>

<p class="info">Beginning with v1.0.0, fusion.ssg no longer includes a project generator in its package and now requires that it be installed separately as a global package. Please read <a href="{baseURL}/docs/{docsCurrentVersion}/installation">Installation</a> for instructions regarding its installation.</p>

<p class="info">Beginning with v1.0.0, <a href="https://browsersync.io/">Browsersync</a>, which provides synchronized browser testing, has replaced live-server.</p>

_fpg_, fusion.ssg's project generator,  relieves you of the burden of having to manually create and configure your projects. When run, it *__creates your project and installs all of the project's dependencies__*. The most difficult task you will face when creating a new fusion.ssg project is deciding what to name it :).

<p class="info">The generated project that fpg creates uses the <a href="https://picocss.com/">Pico.css</a> frameowork. However, you can delete it from your project's <b>src/css</b> folder and use whatever you prefer to build your website.</p>

## Usage

To create a new project, run the following in your terminal in a folder of your choice:

```shell
fpg n | new <target_folder>
```

When you run the above, fusion.ssg will generate a new project in the current folder using the name that you provided for _target_folder_ and you can explore its content in your editor while reading the documentation for <a href="{baseURL}/docs/{docsCurrentVersion}/projectstructure">Project Structure.</a>

## Building And Serving Your Project

fusion.ssg's <a href="{baseURL}/docs/{docsCurrentVersion}/cli">CLI</a> provides numerous *__scripts and commands__* that you can run when _developing your site_ and when you are ready to _release your site_. Please read its documentation to familiarize yourself with the commands and options that support the *__development__* and *__release__* workflows.
