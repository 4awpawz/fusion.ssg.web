---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Templates",
}
docindex: {
topic: htmldocuments,
subtopic: templates
}
---

<em>HTML DOCUMENTS</em>

# Templates

<section class="container">
    <div><small>Required: <em>Yes</em></small></div>
    <div><small>Front Matter: <em>Yes</em></small></div>
    <div><small>Type: <em>.html, .md </em></small></div>
    <div><small>Project Location: <em>src/templates</em></small></div>
</section>

<p class="info">Please note that familiarity with YAML Front Matter is required. Please see this handy guide that provides a <a href="https://support.typora.io/YAML/">deep dive into YAML Front Matter</a>.</p>

Every HTML document that fusion.ssg generates requires a template and every template <em>associates</em> with a <a href="{baseURL}/docs/htmldocuments/pages">page</a> using the <em>page</em> <a href="{baseURL}/docs/htmldocuments/frontmatter">front matter</a> property.
If a template has its own content, its content will be <em>merged</em> into the page that it associates with, replacing that page's <a href="{baseURL}/docs/htmldocuments/tokens#template-tokens">template token</a>.

<p class="info">When the front matter "page" property is omitted, fusion.ssg will associate the default page, i.e. src/pages/default.html, with the template. If the default.html page doesn't exist, fusion.ssg will display an error.</p>
<article>
    <header>
        <p class="example">A template associated with a page.</p>
    </header>
    <pre><code class="language-YAML">
---
page: main
---
# This is content
    </code></pre>
    <footer>
    <p>This template associates with the page found at src/pages/main.html.</p>
    </footer>
</article>
