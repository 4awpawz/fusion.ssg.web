---
page: docpages/index
tokens: {
    title: "fusion.ssg: Tutorials",
}
docindex: {
    topic: gettingstarted,
    subtopic: tutorials,
}
---
<em>GETTING STARTED/<a href="{baseURL}/docs/tutorials#from-zero-to-hero">Tutorials</a></em></em>

# Tutorials

## From Zero To Hero

<img src="{baseURL}/media/HTML-Document-Creation-Workflow.png" alt="image of workflow">

### Adding Common Blocks Of Content To Multiple HTML Documents With Includes

In the <a href="{baseURL}/docs/tutorials/fromzerotohero/pagesandtemplates">previous tutorial</a> you learned how to create an HTML document with _pages_ and _templates_. In this tutorial you will learn how you can add common blocks of content to multiple HTML documents.

Include files, also called ___includes___, contribute their content to HTML documents. But unlike _pages_ and _templates_, includes are intended to be used to ___contribute common blocks of content that are used in multiple HTML documents___, such as blocks of meta tags, navbars, footers, sidebars, .etc.

<strong>Example of an include named footer.html:</strong>

```html
<footer><div>footer content goes here</div></footer>
```

Both pages and templates can declare one or more _include tokens_, ___&lbrace;&lbrace;path/to/include&rbrace;&rbrace;___, that declare the paths, minus their file type, to their respective include files that reside in the src/includes folder.

<strong>Example of a page with that declares an include token to the footer.html include file:</strong>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=j, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        {title}
        {template}
    </main>
    {{footer}} <- this include token will be replaced by the include file's content
</body>
</html>
```
