---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - CLI",
}
docindex: {
    topic: commandline,
    subtopic: cli,
}
---

<em>COMMAND LINE</em>

# Usage from the command line

The following commands are available through the command line.

- <a href="#fusion-help">fusion help</a>
- <a href="#fusion-new">fusion new</a>
- <a href="#fusion-build">fusion build</a>
- <a href="#fusion-release">fusion release</a>
- <a href="#npm-run-development">npm run development</a>
- <a href="#npm-run-release">npm run release</a>

## Commands directly supported by fusion.ssg

### fusion help

Prints help for a supported command, i.e. build, release, new.

- usage: fusion -h|--help &lt;command&gt;

### fusion new

Creates a new fusion.ssg project, including all dependencies, in a folder named [project name] with _TypeScript_ and _live server_ support in the current folder.

- usage: fusion -n|--new [project name]

To create a new project, open your terminal and in a folder of your choice run the following commands:

```shell
fusion new [project name]
cd [project name]
npm run development
```

The above will create the project, install its dependencies, build the project and serve it in the browser.

### fusion build

Directs fusion.ssg to run a one-off development build.

- usage: fusion build

<p class="info">
must be run from project's root folder.
</p>

### fusion release

Directs fusion.ssg to run a one-off release build.

- usage: fusion release

<p class="info">
Files and folders included in your configuration's <a href="{baseURL}/docs/configuration/#wips">wips</a> are ignored.
</p>

<p class="info">
<a href="{baseURL}/docs/configuration/#baseurl">&lbrace;baseURL&rbrace;</a> is applied to URLs.
</p>

<p class="info">
must be run from project's root folder.
</p>

## Commands supported through project NPM scripts

### npm run development

Watches project's root/src and root/fusion.json for changes, builds for development, launches live server.

- usage: npm run development

<p class="info">
must be run from project's root folder.
</p>

### npm run release

Watches project's root/src and root/fusion.json for changes, builds for release, launches live server.

- usage: npm run release

<p class="info">
Files and folders included in your configuration's <a href="{baseURL}/docs/configuration/#wips">wips</a> are ignored.
</p>

<p class="info">
<a href="{baseURL}/docs/configuration/#baseurl">&lbrace;baseURL&rbrace;</a> is applied to URLs.
</p>

<p class="info">
Must be run from project's root folder.
</p>
