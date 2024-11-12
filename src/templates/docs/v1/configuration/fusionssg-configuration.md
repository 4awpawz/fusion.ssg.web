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

- <a href="#postsfolder">postsFolder</a>
- <a href="#baseurl">baseURL</a>
- <a href="#wips">wips</a>
- <a href="#tokens">tokens</a>
- <a href="#conditional-includes">conditional includes</a>

## postsFolder

The _name_ to use for the folder that hosts your site's <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/posts">posts</a>.

- default: "posts"

<aside>
<header>
<p><em>Example</em>: Assigning "blog" as the name to use for the folder to host posts.</p>
</header>
<pre><code class="language-JSON">"postsFolder": "blog""</code></pre>
</aside>

## baseURL

The name of the subfolder that your site is served from. Please see <a href="{baseURL}/docs/v1/htmldocuments/tokens#baseurl-tokens">baseURL Tokens</a> for more information.

- default: ""

<aside>
<header>
<p><em>Example</em>: Assign the name of the subfolder to use</p>
</header>
<pre><code class="language-JSON">
"baseURL": "/fusion.ssg.docs"
</code></pre>
</aside>

## wips

These are the paths to the _files_ and _folders_ that are located in the _src/templates_ folder that are _works in progress_ and that are to be _ignored_ during release builds. To learn more about _wips_, please read <a href="{baseURL}/docs/v1/htmldocuments/wips">Works In Progress</a>.

- default: []

<aside>
<header>
<p><em>Example</em>: Declaring the files and folders located in the <em>src/templates</em> folder that are to be ignored during release builds.</p>
</header>
<pre><code class="language-JSON">"wips": ["docs/next-version/", "!docs/next-version/index.md"]</code></pre>
<p class="info">Files and folders prepended with "!" are <em>negated and will be generated</em>.</p>
<p class="info">Folders must be appended with <em>"/"</em>.</p>
</aside>

## tokens

Simple token property values declared here are global to the project and replace all matching simple tokens declared in _all HTML documents_. If both a local simple token and a global simple token have the same name _the local simple token takes precedence_. Please see <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens/#simple-tokens">Simple Tokens</a> for more information.

- default: {}

<aside>
<header>
<p><em>Example</em>: Declaring simple global tokens.</p>
</header>
<pre><code class="language-JSON">"tokens": {"version": "v1.0.0"}</code></pre>
</aside>

## Conditional Includes

<p class="ver">Introduced in v1.2.0</p>

These are files located in the _src/includes_ folder that are specifically targeted for either _development_ or _release_ builds, but not for both.

- default: conditionalIncludes: &lbrace; developmentOnly: [], releaseOnly: [] &rbrace;

<aside>
<header>
<p><em>Example</em>: Declaring conditional includes.</p>
</header>
<pre><code class="language-JSON">"conditionalIncludes": {
    "developmentOnly": ["path/to/include/in/src/includes", ...],
    "releaseOnly": ["path/to/include/in/src/includes", ...]
}</code></pre>
</aside>

<p class="info">All paths must be relative to the src/includes folder.</p>
