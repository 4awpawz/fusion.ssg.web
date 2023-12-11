---
page: docpages/index
tokens: {
title: "fusion.ssg: Documentation - Cheat Sheet",
}
docindex: {
topic: gettingstarted,
subtopic: cheatsheet,
}
---

<em>GETTING STARTED</em>

# Cheat Sheet

- [Front Matter](#front-matter)
- [Associated Page](#associated-page)
- [Simple Tokens](#simple-tokens)
- [Template Tokens](#template-tokens)
- [Include Tokens](#include-tokens)
- [JSON Data Sources](#json-data-sources)

<article>
<hgroup>

## Front Matter
Front matter is declared at the very __top__ of a template and is delimited by two lines that contain three `'-'` characters each.

</hgroup>

```yaml
---
---
```
<br>
<hgroup>
For more information, please see:

<a href="{baseURL}/docs/{majversion}/htmldocuments/frontmatter#front-matter">Front Matter</a>
</hgroup>
</article>

<article>
<hgroup>

## Associated Page

A template can explicitly declare the __page__ in the _src/pages_ folder that it associates with by including the `page` property in its front matter. Its value must be a _path_ that points to the page. Note that the path is interpreted as being _relative_ to the src/pages folder.

</hgroup>

```yaml
---
page: [path/to/page]
--- 
```

Note that if a template _omits_ this property, it implicitly associates with the _default_ page, `src/pages/default.html`.

<hgroup>
For more information, please see:

<a href="{baseURL}/docs/{majversion}/htmldocuments/templates">Templates</a>
</hgroup>
</article>

<article>
<hgroup>

## Simple Tokens

One or more __simple token value pairs__ can be declared in a template's front matter `tokens` property, and are considered _local_ to the template, includes and its associated page.
</hgroup>

```yaml
---
tokens: {
page-title: My Page Title
}
--- 
```

One or more __simple token value pairs__ can be declared in a project's configuration file, _fusiion.json_, and are considered _global_ to all templates, includes and pages.

```json
{
"tokens": {
    "version": "v1.3.0",
}
}
```
<br>
<hgroup>
For more information, please see:

<a href="{baseURL}/docs/{majversion}/htmldocuments/tokens#simple-tokens">Simple Tokens</a>, <a href="{baseURL}/docs/{majversion}/configuration/fusionssg-configuration#tokens">Global Simple Tokens</a>
</hgroup>
</article>

<article>
<hgroup>

## Template Tokens

Add a __template token__, `{{template}}`, to a page and it will be _replaced_ by the page's associated _template's_ content.
</hgroup>

```html
<body>
    <main>
        {{template}}
    </main>
</body>
```
<br>
<hgroup>
For more information, please see:

<a href="{baseURL}/docs/{majversion}/htmldocuments/tokens#template-tokens">Template Tokens</a>
</hgroup>
</article>

<article>
<hgroup>

## Include Tokens

Add an __include token__, `{{path/to/include}}`, to a page and it will be _replaced_ by the include's content. They are applicable in _templates_ and _pages_. The path's value must be a _path_ that points to the include. Note that the path is interpreted as being _relative_ to the src/includes folder.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        {{google-analytics}}
        {{meta-tabs}}
        <title>fusion.ssg: Documentation - Includes</title>
    </head>
    <body>
        {{navbar}}
        <main class="container">
            {{template}}
        </main>
        {{footer}}
    </body>
</html>
```
</hgroup>
<hgroup>
For more information, please see:

<a href="{baseURL}/docs/v1/htmldocuments/includes">Includes</a>
</hgroup>
</article>

<article>
<hgroup>

## JSON Data Sources

Yada yada.

```json
{}
```
</hgroup>
<hgroup>
For more information, please see:

<a href="{baseURL}/docs/v1/htmldocuments/jsondatasources">JSON Data Sources</a>
</hgroup>
</article>
