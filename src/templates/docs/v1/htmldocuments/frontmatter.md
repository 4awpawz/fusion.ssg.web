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
<!-- end -->

<em>HTML DOCUMENTS</em>

# Front Matter

<section class="container">
<div><small>Required: <em>Yes</em></small></div>
<div><small>Project Location: <em>src/templates</em></small></div>
</section>

Front matter, specifically YAML front matter, is integral to fusion.ssg's build process and though not technically required, ___every <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/templates">template</a> should include YAML front matter at the very top of the file___, even when the template has no content of its own and its front matter is empty.

<p class="info">Wherever <b>"front matter"</b> is mentioned on its own, assume it refers to <b>"YAML front matter"</b>.</p>

<p class="info">fusion.ssg relies on the open source library <a href="https://www.npmjs.com/package/gray-matter">gray-matter</a> to convert YAML front matter to JavaScript.</p>

<article>
<header><p class="example">A template with front matter.</p></header>

```yaml
---
title: Hello
slug: home
---
<h1>Hello world!</h1>
```

The above results in a JavaScript object like this:

```js
{
  content: '<h1>Hello world!</h1>',
  data: {
    title: 'Hello',
    slug: 'home'
  }
}
```

</article>

<article>
<header><p class="example">Excerpts are also supported.</p></header>

```yaml
---
title: Hello
slug: home
---
This is an excerpt.
<!-- end -->
<h1>Hello world!</h1>
```

The above results in a JavaScript object like this:

```js
{
  content: 'This is an excerpt. <h1>Hello world!</h1>',
  data: {
    title: 'Hello',
    slug: 'home'
  },
    excerpt: "This is an excerpt."
}
```

</article>
