---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Collections",
}
docindex: {
    topic: htmldocuments,
    subtopic: "404.html",
}
---

<em>HTML DOCUMENTS</em>

# 404.html

<p class="ver">Introduced in v1.0.0</p>

<section class="container">
<div><small>Required: <em>No, but highly suggested.</em></small></div>
</section>

fusion.ssg supports the generation and correct placement of _404.html documents_.

During each build cycle, when fusion.ssg finds a <a href="{baseURL}/docs/htmldocuments/templates">template</a> named _404.md_ or _404.html_, it will serialize the generated 404.html document into the root of the _build folder_ for development builds, and into the root of the _build/&lbrace;baseURL&rbrace;_ folder for release builds when <a href="{baseURL}/docs/configuration/fusionssg-configuration#baseurl">baseURL</a> is defined in the project's configuration file, fusion.json.
