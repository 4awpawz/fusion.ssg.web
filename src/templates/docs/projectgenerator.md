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

<p class="info">Beginning with v1.0.0, fusion.ssg's no longer includes a project generator in its package and now requires that it be installed separately as a global package. Please read <a href="{baseURL}/docs/installation">Installation</a> for instructions regarding its installation.</p>

<p class="info">Beginning with v1.0.0, <a href="https://browsersync.io/">Browsersync</a>, which provides synchronized browser testing, has replaced live-server.</p>

_fpg_, fusion.ssg's project generator,  relieves you of the burden of having to manually create and configure your projects. When run, it creates your project and also installs all of the project's dependencies. The most difficult task you will face when creating a new fusion.ssg project is deciding what to name it :).

## Usage

To create a new project, run the following in your terminal in a folder of your choice:

```shell
fpg target_folder
```

When you run the above, fusion.ssg will generate a new project in the current folder using the name that you provided for _target_folder_.

## Building and Serving Your New Project

Two NPM scripts, _development_ and _release_, are provided in the project's package.json file for building and serving your project. To build and serve your project for development, run the following in your terminal

```shell
cd target_folder
npm run development
```
and to build and serve your project for release, run the following in your terminal.

```shell
cd target_folder
npm run release
```
<p class="info">Please also see <a href="{baseURL}/docs/cli">CLI</a> for additional CLI features.</p>

Now that you have created a project, please open the project in your editor and explore its contents while reading the documentation for <a href="{baseURL}/docs/projectstructure">Project Structure.</a>
