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

<p class="info">Beginning with v1.0.0, fusion.ssg no longer includes a project generator in its package and no longer provides the ability to create new projects directly through its CLI. Please read <a href="{baseURL}/docs/projectgenerator">Project Generator</a> for more information about the new project generator, fpg.</p>

The following commands are available through the command line.

- <a href="#fusion-help">fusion help</a>
- <a href="#fusion-build">fusion build</a>
- <a href="#fusion-release">fusion release</a>
- <a href="#npm-run-development">npm run development</a>
- <a href="#npm-run-release">npm run release</a>

## Commands Directly Supported By fusion.ssg

### fusion help

Prints _help_ for a supported command.

- usage:

<aside>
<pre><code class="language-shell">fusion -h | --help [command]</code></pre>
</footer>
</aside>

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

When building for release, the files and folders included in your configuration's <a href="{baseURL}/docs/configuration/fusionssg-configuration/#wips">wips</a> property are ignored, and the <a href="{baseURL}/docs/configuration/fusionssg-configuration#baseurl">baseURL</a> property value declared in your project's configuration file is applied to all URLs that contain a _&lbrace;baseURL&rbrace;_ token.

- usage:

<aside>
<pre><code class="language-shell">fusion release</code></pre>
</footer>
</aside>

<p class="info">
Files and folders included in your configuration's <a href="{baseURL}/docs/configuration/fusionssg-configuration#wips">wips</a> are ignored.
</p>

<p class="info">
<a href="{baseURL}/docs/configuration/fusionssg-configuration#baseurl">&lbrace;baseURL&rbrace;</a> is applied to URLs.
</p>

<p class="info">
must be run from project's root folder.
</p>

## Commands Supported Through Project NPM Scripts

### npm run development

Watches your project's _root/src_ and _root/fusion.json_ for changes, builds for _development_, and launches Browsersync.

- usage:

<aside>
<pre><code class="language-shell">npm run development</code></pre>
</footer>
</aside>

<p class="info">
must be run from project's root folder.
</p>

### npm run release

Watches your project's root/src and root/fusion.json for changes, builds for release, and launches Browsersync.

When building for release, the files and folders included in your configuration's <a href="{baseURL}/docs/configuration/fusionssg-configuration#wips">wips</a> property are ignored, and the <a href="{baseURL}/docs/configuration/fusionssg-configuration#baseurl">baseURL</a> property value declared in your project's configuration file is applied to all URLs that contain a _&lbrace;baseURL&rbrace;_ token.

- usage:

<aside>
<pre><code class="language-shell">npm run release</code></pre>
</footer>
</aside>

<p class="info">
Must be run from project's root folder.
</p>
