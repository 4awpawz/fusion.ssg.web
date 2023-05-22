---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Front Matter",
}
docindex: {
    topic: htmldocuments,
    subtopic: frontmatter,
}
---

<em>HTML DOCUMENTS</em>

# Front Matter

<section class="container">
<div><small>Required: <em>Yes</em></small></div>
<div><small>Project Location: <em>src/templates</em></small></div>
</section>

<p class="info">Front matter is integral to fusion.ssg's build process and it is required at the top of every <a href="{baseURL}/docs/htmldocuments/templates">template</a>, even when either or both the template and the front matter are empty.</p>
<p class="info">fusion.ssg uses the library <a href="https://www.npmjs.com/package/gray-matter">gray-matter</a> to convert template front matter to JavaScript.</p>

<article>
<header><p class="example">A template with front matter.</p></header>

```YAML
---
title: Hello
slug: home
---
<h1>Hello world!</h1>
```
is converted to this:

```JAVASCRIPT
{
  content: '<h1>Hello world!</h1>',
  data: {
    title: 'Hello',
    slug: 'home'
  }
}
```
</article>
