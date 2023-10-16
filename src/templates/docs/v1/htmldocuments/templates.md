---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Templates",
}
docindex: {
    topic: htmldocuments,
    subtopic: templates,
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

Every HTML document that fusion.ssg generates requires a template and every template <em>associates</em> with a <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/pages">page</a> using the  <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/frontmatter">front matter</a> <em>"page"</em> property.
If a template has its own content, its content will be <em>merged</em> into the page that it associates with, replacing that page's <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens#template-tokens">template token</a>. When the front matter "page" property is omitted, fusion.ssg will associate the default page (i.e., src/pages/default.html) with the template. If the default.html page doesn't exist, fusion.ssg will display an error.

<article>
    <header>
        <p class="example">A template associated with the page found at src/pages/main.html.</p>
    </header>
    <pre><code class="language-YAML">
---
page: main
---
# This is content
    </code></pre>
</article>

## Works In Progress

fusion.ssg can ignore templates that are _works in progress_ during release builds, thereby preventing their associated HTML documents from polluting your web site. Please see <a href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration#wips">wips</a> for more information.

### Works In Progress Reporting

<p class="ver">Introduced in v1.2.0</p>

Beginning with v1.2.0, fusion.ssg will report all works in progress during release builds. These warnings serve to prevent the unintended updating of web sites with missing HTML documents that should have been included but aren't because they are still marked as WIPS.

<img src="{baseURL}/media/posts/WIPS-reporting.png" alt="image">
