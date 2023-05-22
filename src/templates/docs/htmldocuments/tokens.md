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

fusion.ssg supports _two_ types of simple tokens:
1. <a href="#local-simple-tokens">Local simple tokens</a> are defined in a _template's front matter_
1. <a href="#global-simple-tokens">Global simple tokens</a> are defined in _fusion.json_, the project <a href="{baseURL}/docs/configuration">configuration</a> file.

<em>syntax: {simple token property name}</em>

### Local Simple Tokens

Local simple token properties are defined in a template's front matter, specifically in the `tokens` object, and their property values replace all matching simple tokens declared in the HTML document. If both a local simple token and a global simple token have the same name _the local simple token takes precedence_.

<article>
    <header>
        <p class="example">A template that defines three simple token properties.</p>
    </header>
<pre><code class="language-YAML">
---
page: cat
tokens: {
    docTitle: Cats,
    catName: Felix,
    breed: Persian
}
---
# This is content
</code></pre>
    This template defines the following three <em>simple token properties.</em>:
    <ol>
        <li><em>docTitle</em>, with a value of "<em>"Cats"</em>"</li>
        <li><em>catName</em> with a value of "<em>"Felix"</em>"</li>
        <li><em>breed</em> with a value of "<em>Persian</em>"</li>
    </ol>
</article>

<article>
    <header>
        <p class="example">A page with three simple tokens declared.</p>
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
    <p>All simple tokens declared in the HTML document that match the simple tokens defined in the template will be replaced by their respective values.</p>
</article>

<article>
    <header>
        <p class="example">The resulting HTML document after three simple tokens have been applied.</p>
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

### Global Simple Tokens

<p class="ver">Introduced in v1.0.0-beta.8</p>

Global simple token properties are defined in fusion.json, the project configuration file, specifically in the `tokens` object, and their property values replace all matching simple tokens declared in _all HTML documents_. If both a local simple token and a global simple token have the same name _the local simple token takes precedence_.

## Template Tokens

<em>syntax: &lbrace;&lbrace;template&rbrace;&rbrace;</em>

Template tokens are only relevant in <a href="{baseURL}/docs/htmldocuments/pages">pages</a> and are replaced by the content, if any, of their associated templates.

<article>
    <header>
        <p class="example">A page with a template token declared.</p>
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
        <p class="example">The resulting HTML document after the template's content has been applied.</p>
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

Include tokens are relevant in <a href="{baseURL}/docs/htmldocuments/pages">pages</a> and <a href="{baseURL}/docs/htmldocuments/templates">templates</a> and are replaced by their respective <a href="{baseURL}/docs/htmldocuments/includes">include</a>'s content.

<article>
    <header>
        <p class="example">A page with two include tokens declared.</p>
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
</article>

<article>
    <header>
        <p class="example">The resulting HTML document after the two include files' content have been applied.</p>
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
