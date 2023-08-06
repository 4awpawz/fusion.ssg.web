---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Includes",
}
docindex: {
    topic: htmldocuments,
    subtopic: includes,
}
---

<em>HTML DOCUMENTS</em>

# Includes

<section class="container">
    <div><small>Required: <em>No</em></small></div>
    <div><small>Front Matter: <em>Never</em></small></div>
    <div><small>Type: <em>.html, .md </em></small></div>
    <div><small>Project Location: <em>src/includes</em></small></div>
</section>

An _include_, like <a href="{baseURL}/docs/htmldocuments/templates">templates</a> and <a href="{baseURL}/docs/htmldocuments/pages">pages</a>, contributes its content to the HTML document. But unlike those, whose content is generally more specific to the HTML document, such  as its subject matter, main topic, etc., includes are intended to be used to encapsulate blocks of content that are used in multiple HTML documents, such as blocks of meta tags, navbars, footers, sidebars, .etc. Includes also allow you to leverage the benefit of using either markdown or HTML for a particular part of an HTML document.

Both _pages_ and _templates_ can declare _one or more_ <a href="{baseURL}/docs/htmldocuments/tokens#include-tokens">include tokens</a> that declare the paths, minus their file type, to their respective include files that reside in the src/includes folder.

<article>
    <header>
        <p class="example">A page with two include tokens, &lbrace;&lbrace;navbar&rbrace;&rbrace; and &lbrace;&lbrace;footer&rbrace;&rbrace;.</p>
    </header>
    {{examples/pagewithincludes}}
    <footer>
    <p>This page's include tokens will be replaced by the content from their respective include files'.</p>
    </footer>
</article>

## Conditional Includes

<p class="ver">Introduced in v1.2.0</p>

A conditional _include_ contains content that is _only relevant when building for development or when building for release, but not for both_. For example, if an include contributes Google analytics to your site's HTML documents, you can exclude that content when building your site for development. Please see <a href="{baseURL}/docs/configuration/fusionssg-configuration#conditional-includes">conditional includes</a> for details regarding configuring your site's conditional includes.

<article>
    <header>
        <p class="example">Declaring an include to be only relevant when building for release.</p>
    </header>
<pre><code class="language-JSON">"conditionalIncludes": {
    "releaseOnly": ["analytics.md"]
}</code></pre>
    <footer>
    <p>By declaring the <em>analytics.md</em> include for release only, its content will <em>not</em> be included when building for development.</p>
    </footer>
</article>
