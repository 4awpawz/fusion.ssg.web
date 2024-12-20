---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Pages",
}
docindex: {
    topic: htmldocuments,
    subtopic: pages
}
---

<em>HTML DOCUMENTS</em>

# Pages

<section class="container">
    <div><small>Required: <em>Yes</em></small></div>
    <div><small>Front Matter: <em>Never</em></small></div>
    <div><small>Type: <em>.html</em></small></div>
    <div><small>Project Location: <em>src/pages</em></small></div>
</section>


Every HTML document that fusion.ssg generates requires a <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/templates">template</a> and every template <em>associates</em> with a page using the  <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/frontmatter">front matter</a> <em>"page"</em> property. Pages provide HTML documents with their own content (if they have content) as well as their overall <em>structure</em>. Pages associated with templates with content will have their <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens#template-tokens">template tokens</a> replaced by the template's content.

A page can have only one template token and it should be placed anywhere within the page that makes sense for the HTML document. Pages without template tokens are also valid, they provide their own content, and are convenient for <em>one-off</em> pages. Their associated template's content, if any, is ignored.

<article>
    <header>
        <p class="example">A page with a template token.</p>
    </header>
    <pre><code class="language-HTML">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;{title}&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;main class="container"&gt;
            &lbrace;&lbrace;template&rbrace;&rbrace;
        &lt;/main&gt;
    &lt;/body&gt;
&lt;/html&gt;
    </code></pre>
</article>
