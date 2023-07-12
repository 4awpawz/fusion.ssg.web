---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - assets.json",
}
docindex: {
    topic: metadata,
    subtopic: fusion.json,
}
---

<em>METADATA</em>

# Metadata

fusion.ssg generates metadata while parsing your project's files which it uses to drive each build-cycle. At the conclusion of each build-cycle, fusion.ssg serializes this metadata to the file _.assets.json_, which is located in the project's root folder.

Each piece of metadata consists of a key and a corresponding value.

fusion.ssg makes this metadata available to your project's <a href="{baseURL}/docs/htmldocuments/components">components</a>, which they can use to add dynamic content to your site's HTML documents. In most cases, you want to limit your focus on those metadata items whose **assetType** equals _"template"_. For more information, please see <a href="{baseURL}/docs/htmldocuments/components#metadata-properties">Metadata Properties</a>.

<p class="info"><a href="{baseURL}/docs/htmldocuments/templates">Template</a> metadata includes their <a href="{baseURL}/docs/htmldocuments/frontmatter">front matter</a>.</p>

<article>
<header><p class="example">A template asset in .assets.json</p></header>
<pre><code class="language-JSON"> [
  {
    "timestamp": 1683293747955.9675,
    "assetType": "template",
    "filePath": "src/templates/index.md",
    "fileType": ".md",
    "isPost": false,
    "fm": {
      "content": "...",
      "data": {
        "tokens": {
          "title": "Success!"
        }
      },
      "isEmpty": false,
      "excerpt": ""
    },
    "content": "...",
    "isWip": false,
    "associatedPage": "src/pages/default.html",
    "htmlDocumentName": "index.html",
    "url": "/"
  }
]
</code></pre>
</article>
<p class="info">Template metadata contains two similarly named properties, <b>fm.content</b> and <b>content</b>. <b>fm.content</b> contains the raw content, either HTML or markdown, if any, taken directly from the template asset, whereas <b>content</b> contains the actual content that fusion.ssg will use to generate the HTML document for this template.</p>
