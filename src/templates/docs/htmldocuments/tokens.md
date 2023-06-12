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
    <li><a href="{baseURL}/docs/htmldocuments/tokens#simple-tokens"><em>simple tokens</em></a></li>
    <li><a href="{baseURL}/docs/htmldocuments/tokens#template-tokens"><em>template tokens</em></a></li>
    <li><a href="{baseURL}/docs/htmldocuments/tokens#include-tokens"><em>include tokens</em></a></li>
</ol>

## Simple Tokens

<em>syntax: &lbrace;token-name&rbrace;</em>

Simple token declarations like the above are replaced by their respective property values. Simple token property values can be declared in either <a href="{baseURL}/docs/htmldocuments/frontmatter">front matter</a> or in your project's <a href="{baseURL}/docs/configuration#tokens">configuration</a> file. If the same token name is used in both, the token's value declared in front matter takes precedence.

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
        &lt;title&gt;&lbrace;docTitle&rbrace;-&lbrace;breed&rbrace;&lt/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;main&gt;
            &lt;h1&gt;{catName}&lt;/h1&gt;
            &lbrace;&lbrace;template&rbrace;&rbrace;
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

## Template Tokens

<em>syntax: &lbrace;&lbrace;template&rbrace;&rbrace;</em>

Template tokens are only relevant in <a href="{baseURL}/docs/htmldocuments/pages">pages</a> and are replaced by the content of their associated <a href="{baseURL}/docs/htmldocuments/templates">templates</a>.

<p class="warn">template is a reserved symbol and &lbrace;&lbrace;template&rbrace;&rbrace; should only be used in this context.</p>
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

Include tokens are relevant in <a href="{baseURL}/docs/htmldocuments/pages">pages</a> and <a href="{baseURL}/docs/htmldocuments/templates">templates</a> and are replaced by their respective <a href="{baseURL}/docs/htmldocuments/includes">include</a> file's content. The path to the respective include file should not contain its file type.

<article>
    <header>
        <p class="example">An HTML document with two include tokens.</p>
    </header>
<pre><code class="language-HTML">
&lt;body&gt;
    &lbrace;&lbrace;header&rbrace;&rbrace;
    &lt;main&gt;
        &vellip;
    &lt;/main&gt;
    &lbrace;&lbrace;footer&rbrace;&rbrace;
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
