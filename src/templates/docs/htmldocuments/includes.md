---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Includes",
}
docindex: {
topic: htmldocuments,
subtopic: includes
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

An _include_, like <a href="{baseURL}/docs/htmldocuments/templates">templates</a> and <a href="{baseURL}/docs/htmldocuments/pages">pages</a>, contributes its content to the HTML document. But unlike those, whose content are generally more specific to the intention of the HTML document, such  as its subject matter, main topic, etc., includes are intended to be used to encapsulate blocks of content that are used in multiple HTML documents, such as blocks of meta tags, navbars, footers, sidebars, .etc. Includes also allow you to leverage the benefit of using either markdown or HTML for a particular part of an HTML document.

Both pages and templates can incorporate includes using <a href="{baseURL}/docs/htmldocuments/tokens#include-tokens">include tokens</a>, whose syntax is the path to the include file, minus its file type, that resides in the src/includes folder surrounded by double curly braces, e.g. &lbrace;&lbrace;_path/to/include_&rbrace;&rbrace;.

<article>
    <header>
        <p class="example">A page with two include tokens.</p>
    </header>
    {{examples/pagewithincludes}}
    <footer>
    <p>This page's include tokens will be replaced by the their respective include files' content.</p>
    </footer>
</article>
