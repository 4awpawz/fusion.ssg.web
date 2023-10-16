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

<p class="info">Beginning with v1.0.0, fusion.ssg no longer includes a project generator in its package and no longer provides the ability to create new projects directly through its CLI. Please read <a href="{baseURL}/docs/{docsCurrentVersion}/projectgenerator">Project Generator</a> for more information about how to create a new project using <b><em>fpg</em></b>.</p>

fusion.ssg's CLI supports the following workflows and options:

- <a href="#development-workflows">Development Workflows</a>
- <a href="#release-workflows">Release Workflows</a>
- <a href="#optional-cache-busting-of-release-builds">Optional Cache Busting Of Release Builds</a>
- <a href="#version">Version</a>
- <a href="#help">Help</a>

## Development Workflows

When building for _development_, the files and folders included in your configuration's <a href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration/#wips">wips</a> property are not ignored, and the <a href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration#baseurl">baseURL</a> property value declared in your project's configuration file is not applied to all URLs that contain a _&lbrace;baseURL&rbrace;_ token.

<p class="info">The following commands must all be run from the project's root folder.</p>

### Watch, Build, Serve

Watches your project's _root/src_ and _root/fusion.json_ for changes, and runs `fusion build`, and launches Browsersync.

- usage:

<aside>
<pre><code class="language-shell">npm run development</code></pre>
</aside>

### One Off Builds

- usage:

<aside>
<pre><code class="language-shell">npm run development:fusion</code></pre>
</aside>

or

<aside>
<pre><code class="language-shell">fusion b | build</code></pre>
</aside>

## Release Workflows

When building for _release_, the files and folders included in your configuration's <a href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration#wips">wips</a> property are ignored, and the <a href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration#baseurl">baseURL</a> property value declared in your project's configuration file is applied to all URLs that contain a _&lbrace;baseURL&rbrace;_ token.

<p class="info">The following commands must all be run from the project's root folder.</p>

### Watch, Release, Serve

Watches your project's _root/src_ and _root/fusion.json_ for changes, and runs `fusion release`, and launches Browsersync.

- usage:

<aside>
<pre><code class="language-shell">npm run release</code></pre>
</aside>

### One Off Releases

- usage:

<aside>
<pre><code class="language-shell">npm run release:fusion</code></pre>
</aside>

or

<aside>
<pre><code class="language-shell">fusion r | release</code></pre>
</aside>

## Optional Cache Busting Of Release Builds

<p class="ver">Introduced in v1.2.0</p>

When building for release, fusion.ssg can _optionally_ cache bust your site's assets (e.g. css, media, scripts, .etc), allowing your site's visitors to immediately experience its latest changes. fusion.ssg handles all the details, so no additional configuration or changes to your project, other than those described below, are required.

To _opt in to cache busting_, you can do _one or both_ of the following:

- Append `--cache-bust` to the end of the _release:fusion script_ located in your project's _package.json_ file, i.e. `"release:fusion": "fusion release --cache-bust"`.

- Run `fusion r | release --cache-bust`.

<p class="info">fusion.ssg relies on <a href="https://github.com/4awpawz/buster">Buster</a>, which is a very capable and resilient cache busting tool developed by the same team that brings you fusion.ssg, to implement its cache busting.</p>

## Other Commands Supported By The CLI

### Version

Displays the version.

- usage:

<aside>
<pre><code class="language-shell">fusion -v | --version</code></pre>
</aside>

### Help

Displays general and command specific _help_.

- usage:

<aside>
<pre><code class="language-shell">fusion -h | --help [optional command]</code></pre>
</aside>
