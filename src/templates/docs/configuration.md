---
page: docpages/index
tokens: {
title: "fusion.ssg: Documentation - Configuration",
}
docindex: {
topic: configuration,
subtopic: fusionjson
}
---

<em>CONFIGURATION</em>

# fusions.json

The following configuration options are available for you to override in your project's <em>src/fusion.json</em> file:

1. <a href="#postsfolder">postsFolder</a>
1. <a href="#baseurl">baseURL</a>
1. <a href="#wips">wips</a>

## postsFolder

The name to use for the folder that hosts your site's <a href="{baseURL}/docs/htmldocuments/posts">posts</a>.

- default: "posts"

<aside>
<header>
<p><em>Example</em>: Assigning "blog" as the name to use for the folder to host posts.</p>
</header>
<pre><code class="language-JSON">"postsFolder": "blog""</code></pre>
</aside>

## baseURL

If your site is served from a <em>subfloder</em>, such as is the case for sites hosted on <em>github.io</em>, prepend <em>&lbrace;baseURL&rbrace;</em> to your site's <a href="https://www.ibm.com/docs/en/eslm/10.0.4?topic=parameters-absolute-root-relative-url">root relative URLs</a> and they will be replaced with this value during <a href="{baseURL}/docs/cli#npm-run-release">release builds</a>.

- default: ""

<aside>
<header>
<p><em>Example</em>: Assisgn the path of the subfolder to use</p>
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

These are files and folders of <a href="{baseURL}/docs/htmldocuments/templates">templates</a> that are to be ignored during <a href="{baseURL}/docs/cli#npm-run-release">release builds</a>.

- default: []

<aside>
<pre><code class="language-JSON">"wips": ["docs/next-version", "!docs/next-version/index.md"]</code></pre>
<p class="info">Files and folders prepended with "!" are <em>negated.</em></p>
</footer>
</aside>
