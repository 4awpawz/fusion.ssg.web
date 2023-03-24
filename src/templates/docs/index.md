---
page: docpages/index
tokens: {
title: "fusion.ssg: Documentation - HTML Documents",
}
docindex: {
topic: gettingstarted,
subtopic: synopsis
}
---

<em>GETTING STARTED</em>

<h1>Synopsis</h1>

<h2>HTML Document Creation - A High Level View</h2>

<img src="{baseURL}/media/HTML-Document-Creation-Workflow.png" alt="HTML Document Creation Workflow"/>
<br>
<br>

If you are new to working with fusion.ssg, it is advantageous to have a high altitude, conceptual understanding of how it seamlessly fuses together your project's templates + pages + components + tokens to create HTML documents.

The discussion below focuses on the creation of a single HTML document as all HTML documents are subject to the identical workflow.

<article>
<header><h2>Step 1 - Template + Page</h2></header>

fusions parses the template file, insuring that it contains the required YAML front matter and possibly also content in the form of _HTML_ or _markdown_. In the template's front matter, it looks for a property called _page_ whose value is the path to a file located in the project's _src/pages_ folder. The page file is composed entirely of HTML and it exists to provide the overall structure of your finished HTML document. If fusion.ssg doesn't find a page property, it defaults to using the _src/pages/default.html_ page. If the template has content, fusion.ssg searches the page's content for a <code>&lbrace;&lbrace;template&rbrace;&rbrace;</code> token, and if it finds it, replaces it with the template's content. At this point, we have a _developing HTML document_.
</article>

<article>
<header><h2>Step 2 - Components</h2></header>

This is where it begins to get interesting. fusion.ssg searches for all the _component tags_, e.g. _&lt;MyComponent /&gt;_, in the developing HTML document's content. If it finds one or more component tags, fusion.ssg analyzes their _properties_ to  determine if they have  a `dataSources` property, which declares their dependency on one or more _JSON data sources_ residing in the project's _src/data_ folder. If they do, these data sources are now acquired and each component is then called, being passed their data sources along with any other properties that the component tag may have. As each component returns its content in the form of HTML, fusion.ssg replaces the component's respective tag in the developing HTML document with their content.
</article>

<article>
<header><h2>Step 3 - Tokens</h2></header>

fusion.ssg now checks if the template's front matter has declared any tokens and, if it has, replaces all matching tokens, e.g. <code>&lbrace;title&rbrace;</code>, found in the developing HTML document's content with their corresponding token values from the template.
</article>

<article>
<header><h2>Step 4 - Serialize The HTML Document</h2></header>

At this point the HTML document is now 100% complete. fusion.ssg now serializes it to its respective file in the project's _build_ folder.
</article>

While the actual process that fusion.ssg uses is quite a bit more complex than what this high altitude overview provides, you should now have a very good conceptual understanding of how fusion.ssg goes about its business of producing HTML documents.

<p class="info">The remaining documentation relies heavily on examples. It assumes that you already have some working knowledge of <b>HTML</b>, <b>markdown</b>, <b>YAML front matter</b> and <b>TypeScript components</b>.</p>
