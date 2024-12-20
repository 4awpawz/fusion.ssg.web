---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Tokens",
}
docindex: {
    topic: htmldocuments,
    subtopic: tokens,
}
---

<em>HTML DOCUMENTS</em>

# Tokens

<em>Tokens</em> serve as place holders that are <em>replaced</em> by content intended for the HTML document. fusion.ssg recognizes <em>three</em> types of tokens:
<ol>
    <li><a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens#simple-tokens"><em>simple tokens</em></a></li>
    <li><a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens#baseurl-tokens"><em>baseURL tokens</em></a></li>
    <li><a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens#template-tokens"><em>template tokens</em></a></li>
    <li><a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens#include-tokens"><em>include tokens</em></a></li>
</ol>

## Simple Tokens

<em>syntax: &lbrace;token-name&rbrace;</em>

Simple token declarations like the above that fusion.ssg finds in your developing HTML documents are replaced by their respective property values. Simple token property values can be declared in either a _template's <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/frontmatter">front matter</a>_ or in _fusion.json_, your project's <a href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration#tokens">configuration</a> file. If the same token name is used in both, the token's value declared in front matter takes precedence.

<article>
    <header>
        <p class="example">Front matter with three simple token property declarations.</p>
    </header>
<pre><code class="language-YAML">
---
tokens: {
    docTitle: Cats,
    breed: Persian,
    catName: Felix
}
---
</code></pre>
</article>

<article>
    <header>
        <p class="example"><em>An HTML document with three simple tokens.</p>
    </header>
<pre><code class="language-HTML">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;{docTitle}-{breed}&lt/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;main&gt;
            &lt;h1&gt;{catName}&lt;/h1&gt;
            &lt;{{template}}&gt;
        &lt;/main&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
</article>

<article>
    <header>
        <p class="example">The resulting HTML document after three simple token values have been applied.</p>
    </header>
<pre><code class="language-HTML">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Cats-Persian&lt/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;main&gt;
            &lt;h1&gt;Felix&lt;/h1&gt;
            &vellip;
        &lt;/main&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
</article>

### Unresolved Simple Token Reporting

<p class="ver">Introduced in v1.1.0</p>

At the end of each build cycle, fusion.ssg will report any unresolved simple tokens that it finds in your project's generated HTML documents. These warnings indicate that either the token name has been misspelled or that its value has not been declared.

<img src="{baseURL}/media/posts/v1.1.0-CLI-unresolved-tokens.png" alt="report of unresolved tokens" width="700">

### Auto Generated Simple Tokens

<p class="ver">Introduced in v1.2.0</p>

Besides the simple tokens that you define in your _template's front matter_ and globally in your project's _fusion.json_ file, fusion.ssg also defines the following simple tokens, whose values it has obtained from the meta data associated with your _posts_ templates, that you can use:

- &lbrace;postDate&rbrace; - the _post date_ extracted from the post's _file name_ and converted to a _locale date string_ e.g. "mm/dd/yyyy".
- &lbrace;categories&rbrace; - the _categories_ extracted from the post's _front matter post.categories property_ and converted to a _path_ e.g. "cata/catb/catc".
- &lbrace;tags&rbrace; - the _tags_ extracted from the post's _front matter post.tags property_ and converted to a _comma separated list_  e.g. "taga,tagb,tagc".

## baseURL Tokens

<em>syntax: &lbrace;baseURL&rbrace;</em>

If your site is served from a <em>subfolder</em>, such as are sites that are hosted on <em>github.io</em> that do not include a CNAME file, prepend <em>&lbrace;baseURL&rbrace;</em> to your site's <a href="https://www.ibm.com/docs/en/eslm/10.0.4?topic=parameters-absolute-root-relative-url">root relative URLs</a> and during <a href="{baseURL}/docs/{docsCurrentVersion}/cli#npm-run-release">release builds</a> <em>&lbrace;baseURL&rbrace;</em> will be replaced by its value, which you define in your project's configuration file, and during development builds will be removed.

<p class="warn"><code>{baseURL}</code> is a reserved token and should only be used in this context.</p>

<article>
    <header>
        <p class="example">Assign the name of the sub folder that is used to host your site to the baseURL property in your project's <i><em>fusion.json</em></i> configuration file, which is located in your project's root folder.</p>
    </header>
    <pre><code class="language-JSON">{"baseURL": "/fusion.ssg.docs"}</code></pre>
</article>

<article>
    <header>
        <p class="example">Prepend the baseURL token to your site's root relative URLs.</p>
    </header>
    <pre><code class="language-HTML">&lt;a href="{baseURL}/docs"&gt;Docs&lt;/a&gt;</code></pre>
</article>

<article>
    <header>
        <p class="example">When building for release, &lbrace;baseURL&rbrace; will be replaced by its value.</p>
    </header>
    <pre><code class="language-HTML">&lt;a href="/fusion.ssg.docs/docs"&gt;Docs&lt;/a&gt;</code></pre>
</article>

<article>
    <header>
        <p class="example">When building for development, &lbrace;baseURL&rbrace; will be removed.</p>
    </header>
    <pre><code class="language-HTML">&lt;a href="/docs"&gt;Docs&lt;/a&gt;</code></pre>
</article>

### CSS File Support For baseURL Tokens

<p class="ver">Introduced in v1.3.0</p>

Beginning with v1.3.0, the use of _baseURL_ tokens is now supported in your project's CSS files and can be applied to any CSS attribute that takes a URL, such as background images for example.

So, for example, if you are building a site that has background images you no longer have to declare 2 URLs for the image, one for development builds, and one for release builds.

Instead, you can just prepend the root relative URL with the _baseURL_ token and the URL will resolve properly for both development and release builds.

<article>
    <header>
        <p class="example">Using &lbrace;baseURL&rbrace; in CSS.</p>
    </header>
<pre><code class="language-HTML">.hero {
    background-image: url({baseURL}/media/stretching-cat.png);
}</code></pre>
</article>

## Template Tokens

<em>syntax: &lbrace;&lbrace;template&rbrace;&rbrace;</em>

Template tokens are only relevant in <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/pages">pages</a> and are replaced by the content of their associated <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/templates">templates</a>.

<p class="warn"><code>{{template}}</code> is a reserved token and should only be used in this context.</p>
<article>
    <header>
        <p class="example">An HTML document with a template token.</p>
    </header>
<pre><code class="language-HTML">
&lt;body&gt;
    &lt;main&gt;
        &lbrace;&lbrace;template&rbrace;&rbrace;
    &lt;/main&gt;
&lt;/body&gt;
</code></pre>
</article>

<article>
    <header>
        <p class="example">The resulting HTML document after a template's content has been applied.</p>
    </header>
<pre><code class="language-HTML">
&lt;body&gt;
    &lt;main&gt;
        &lt;p&gt;Cats are amazing!&lt;p&gt;
    &lt;/main&gt;
&lt;/body&gt;
</code></pre>
</article>

## Include Tokens

<em>syntax: &lbrace;&lbrace;path/to/include&rbrace;&rbrace;</em> minus file type

Include tokens are relevant in <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/pages">pages</a> and <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/templates">templates</a> and are replaced by their respective <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/includes">include</a> file's content. The path to the respective include file should not contain its file type.

<article>
    <header>
        <p class="example">An HTML document with two include tokens.</p>
    </header>
<pre><code class="language-HTML">
&lt;body&gt;
    {{header}}
    &lt;main&gt;
        &vellip;
    &lt;/main&gt;
    {{footer}}
&lt;/body&gt;
</code></pre>
<footer>
The include tokens are pointing to two files, src/includes/header.[ md|html ], and src/includes/footer.[md|html].
</footer>
</article>

<article>
    <header>
        <p class="example">The resulting HTML document after the content from the two include files have been applied.</p>
    </header>
<pre><code class="language-HTML">
&lt;body&gt;
    header content...
    &lt;main&gt;
        &vellip;
    &lt;/main&gt;
    footer content...
&lt;/body&gt;
</code></pre>
</article>
