---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Synopsis",
}
docindex: {
    topic: gettingstarted,
    subtopic: synopsis,
}
---

<em>GETTING STARTED</em>

<h1>Synopsis</h1>

<h2>HTML Document Creation - A High Level View</h2>

<img src="{baseURL}/media/HTML-Document-Creation-Workflow.png" alt="HTML Document Creation Workflow"/>
<br>
<br>

If you are new to fusion.ssg, it is advantageous for you to have a high level conceptual understanding of how it seamlessly fuses together your project's templates, pages, components and tokens to create HTML documents.

The discussion below focuses on the creation of a single HTML document.

<article>
<header><h2>Step 1 - Template + Page</h2></header>

fusion.ssg looks for ___a property named page declared in the template's YAML front matter whose value points to a page file located in the project's src/pages___ folder. If fusion.ssg doesn't find the property, it defaults to using the _src/pages/default.html_ page. The page file provides the overall structure for the generated HTML document as well as any content of its own. ___If the template has its own content to contribute to the HTML document and the page's content contains a &lbrace;&lbrace;template&rbrace;&rbrace; token, fusion.ssg will replace the page's template token with the template's content___. At this point, we have a _developing HTML document_.
</article>

<article>
<header><h2>Step 2 - Components</h2></header>

fusion.ssg then searches the developing HTML document for ___component tags (e.g., &lt;MyComponent /&gt;)___ and if found, each component is called and ___their corresponding tags are replaced by the HTML they return___.
</article>

<article>
<header><h2>Step 3 - Tokens</h2></header>

fusion.ssg then searches the developing HTML document's content for ___simple tokens (e.g., &lbrace;title&rbrace;)___ and, if found, ___replaces them with their matching token values___ found in either the template's _YAML front matter_ or _fusion.json_, the project's configuration file.
</article>

<article>
<header><h2>Step 4 - Serialize The HTML Document</h2></header>

The HTML document is now complete and ___its content is serialized to its respective path in the project's build folder___.
</article>

While the actual process that fusion.ssg uses is quite a bit more complex than what this high level overview provides, you should now have a very good conceptual understanding of how fusion.ssg goes about its business of producing HTML documents.

<p class="info">The remaining documentation relies heavily on examples. It assumes that you have some working knowledge of <b>HTML</b>, <b>markdown</b>, <b>YAML front matter</b> and <b>JavaScript</b> or <b>TypeScript components</b>.</p>
