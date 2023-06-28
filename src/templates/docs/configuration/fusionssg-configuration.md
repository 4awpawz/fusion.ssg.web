---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Configuration",
}
docindex: {
    topic: configuration,
    subtopic: fusionjson,
}
---

<em>CONFIGURATION</em>

# fusions.ssg Configuration

The following _configuration options_ are available for you to override in your project's _src/fusion.json_ file:

1. <a href="#postsfolder">postsFolder</a>
1. <a href="#baseurl">baseURL</a>
1. <a href="#wips">wips</a>
1. <a href="#tokens">tokens</a>

## postsFolder

The _name_ to use for the folder that hosts your site's <a href="{baseURL}/docs/htmldocuments/posts">posts</a>.

- default: "posts"

<aside>
<header>
<p><em>Example</em>: Assigning "blog" as the name to use for the folder to host posts.</p>
</header>
<pre><code class="language-JSON">"postsFolder": "blog""</code></pre>
</aside>

## baseURL

If your site is served from a <em>subfloder</em>, such as is the case for sites hosted on <em>github.io</em>, prepend <em>&lbrace;baseURL&rbrace;</em> to your site's <a href="https://www.ibm.com/docs/en/eslm/10.0.4?topic=parameters-absolute-root-relative-url">root relative URLs</a> and they will be replaced with this value during <a href="{baseURL}/docs/cli#npm-run-release">release builds</a>.

<p class="warn">baseURL is a reserved symbol! Though &lbrace;baseURL&rbrace; looks like a simple token declaration, it should never be used as one. Never use baseURL to declare a local simple token or a global simple token.</p>

- default: ""

<aside>
<header>
<p><em>Example</em>: Assign the path of the subfolder to use</p>
</header>
<pre><code class="language-JSON">
"baseURL": "/fusion.ssg.docs"
</code></pre>
<p>and prepend <em>baseURL</em> to your site's <em>root relative</em> URLs</p>
<pre><code class="language-HTML">
&lt;a href="&lbrace;baseURL&rbrace;/docs"&gt;Docs&lt;/a&gt;
</code></pre>
<p>and during release builds, &lbrace;baseURL&rbrace; will be replaced by its value.</p>
<pre><code class="language-HTML">
&lt;a href="4awpawz.github.io/fusion.ssg.docs/docs"&gt;Docs&lt;/a&gt;
</code></pre>
</aside>

## wips

These are _files_ and _folders_ located in the <a href="{baseURL}/docs/htmldocuments/templates">templates</a> folder that are to be _ignored_ during <a href="{baseURL}/docs/cli#npm-run-release">release builds</a>.

- default: []

<aside>
<header>
<p><em>Example</em>: Declaring the files and folders to be ignored during release builds.</p>
</header>
<pre><code class="language-JSON">"wips": ["docs/next-version", "!docs/next-version/index.md"]</code></pre>
<p class="info">Files and folders prepended with "!" are <em>negated and will be generated.</em></p>
</footer>
</aside>

## tokens

<p class="ver">Introduced in v1.0.0-beta.8</p>

Simple token property values declared here are global to the project and replace all matching simple tokens declared in _all HTML documents_. If both a local simple token and a global simple token have the same name _the local simple token takes precedence_.

- default: {}

<aside>
<header>
<p><em>Example</em>: Declaring tokens.</p>
</header>
<pre><code class="language-JSON">"tokens": {"version": "v1.0.0"}</code></pre>
</footer>
</aside>
