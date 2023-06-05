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

# CLI

The following commands are available through the command line.

- <a href="#fusion-help">fusion help</a>
- <a href="#fusion-new">fusion new</a>
- <a href="#fusion-build">fusion build</a>
- <a href="#fusion-release">fusion release</a>
- <a href="#npm-run-development">npm run development</a>
- <a href="#npm-run-release">npm run release</a>

## Commands Directly Supported By fusion.ssg

### fusion help

Prints _help_ for a supported command, i.e. build, release, new.

- usage:

<aside>
<pre><code class="language-shell">fusion -h | --help [command]</code></pre>
</footer>
</aside>

### fusion new

Creates a _new_ fusion.ssg project in a folder named _[project name]_ with _TypeScript_ and _live server_ support in the current folder and installs all project dependencies.

- usage:

<aside>
<pre><code class="language-shell">fusion -n|--new [project name]</code></pre>
</footer>
</aside>

To create a new project, open your terminal and in a folder of your choice run the following commands:

```shell
fusion new [project name]
cd [project name]
npm run development
```

The above will create the project, install its dependencies, build the project and serve it in the browser.

### fusion build

Directs fusion.ssg to run a one-off _development_ build.

- usage:

<aside>
<pre><code class="language-shell">fusion build</code></pre>
</footer>
</aside>

<p class="info">
must be run from project's root folder.
</p>

### fusion release

Directs fusion.ssg to run a one-off _release_ build.

- usage:

<aside>
<pre><code class="language-shell">fusion release</code></pre>
</footer>
</aside>

<p class="info">
Files and folders included in your configuration's <a href="{baseURL}/docs/configuration/#wips">wips</a> are ignored.
</p>

<p class="info">
<a href="{baseURL}/docs/configuration/#baseurl">&lbrace;baseURL&rbrace;</a> is applied to URLs.
</p>

<p class="info">
must be run from project's root folder.
</p>

## Commands Supported Through Project NPM Scripts

### npm run development

Watches project's _root/src_ and _root/fusion.json_ for changes, builds for _development_, launches live server.

- usage:

<aside>
<pre><code class="language-shell">npm run development</code></pre>
</footer>
</aside>

<p class="info">
must be run from project's root folder.
</p>

### npm run release

Watches project's root/src and root/fusion.json for changes, builds for release, launches live server.

- usage:

<aside>
<pre><code class="language-shell">npm run release</code></pre>
</footer>
</aside>

<p class="info">
Files and folders included in your configuration's <a href="{baseURL}/docs/configuration/#wips">wips</a> are ignored.
</p>

<p class="info">
<a href="{baseURL}/docs/configuration/#baseurl">&lbrace;baseURL&rbrace;</a> is applied to URLs.
</p>

<p class="info">
Must be run from project's root folder.
</p>
