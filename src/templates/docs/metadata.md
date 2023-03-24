---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Metadata",
}
docindex: {
topic: metadata,
subtopic: fusion.json
}
---

<em>METADATA</em>

# Metadata

The metadata that fusion.ssg generates from parsing your project's files drive's each build-cycle. At the conclusion of each build-cycle, fusion.ssg serializes this metadata to the file _.assets.json_, which is located in the project's root folder.

<p class="info"><a href="{baseURL}/docs/htmldocuments/templates">Template</a> related metadata includes their <a href="{baseURL}/docs/htmldocuments/frontmatter">front matter</a>.</p>

<p class="info">fusion.ssg makes this metadata available to your project's <a href="{baseURL}/docs/htmldocuments/components">components</a>, which they can use to add dynamic content to your site's HTML documents. In most cases, you want to limit your focus on those items that are <b>"assetType": "template"</b>. For more information, please see <a href="{baseURL}/docs/htmldocuments/components#metadata-properties">Metadata Properties</a>.</p>

<article>
<header><p class="example">.assets.json</p></header>
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
<footer>
<p>The example above contains the metadata for a single <em>template</em>.</p>
</footer>
</article>
