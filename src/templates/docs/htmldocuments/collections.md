---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Collections",
}
docindex: {
    topic: htmldocuments,
    subtopic: collections,
}
---

<em>HTML DOCUMENTS</em>

# Collections

A <em>collection</em> consists of _two or more_ HTML documents created using a single <a href="#collection-templates">template</a> and a higher order <a href="#collection-components">component</a>.

<p class="info"><a href="https://github.com/4awpawz/fusion.ssg-flags-of-the-world-demo/tree/development">View this example project that demonstrates using a collection to generate pages for all the flags of the world.</a></p>

## Synopsis

Imagine you have a portfolio of one kind or another and you want to create an HTML document for each of its items. Imagine how tedious and laborious that process would be if you had to do that manually. fusion.ssg provides a much better solution.

Simply put, fusion.ssg invokes collection components just like it does _"normal"_ <a href="{baseURL}/docs/htmldocuments/components">components</a>, but invokes them repeatedly until they return nothing. In addition, for each invocation, the component receives an <a href="#arguments">index</a> along with any of the other <a href="{baseURL}/docs/htmldocuments/components#properties">properties</a> it has declared, as well as <a href="{baseURL}/docs/htmldocuments/components#additional-properties">_asset_ and _assets_</a>. The value of this index is initially _0_ and is incremented by _1_ for each subsequent invocation, and can be used, for example, to _"iterate"_ through a data source, one invocation at a time. When the index value is greater than the number of items in the data source, meaning there are no more HTML documents to be generated for this collection, the component returns nothing, which signals to fusion.ssg that it is to stop calling the component.

## Collection Templates

<p>A <em>collection template</em> is any template that declares a front matter property named <code>isCollection</code> with a value of <code>true</code>.</p>

<article>
<header>
<p class="example">A collection template.</p>
</header>
{{examples/collectionTemplate}}
</article>

<p>A <em>collection component tag</em> is any component tag that declares a property named <code>isCollection</code>.</p>

<article>
<header>
<p class="example">A collection template with a collection component tag.</p>
</header>
{{examples/collectionTemplateAndTag}}
<footer>
<p>The above collection component tag also declares a <em>dataSources</em> property whose value is a path to a JSON file that resides in the project's <em>src/data</em> folder.</p>
<p class="info">Collection component tags are applicable within <b>includes</b>, <b>templates</b> and <b>pages</b>.</p>
</footer>
</article>

## Collection Components

A collection component is a higher order component that produces the content for multiple HTML documents (i.e. a collection) and differ from <b>_simple components_</b>, which produce content for a single HTML document.

The following discussion assumes that you have already read about simple <a href="{baseURL}/docs/htmldocuments/components">components</a>.

### Properties Passed As Arguments

- _asset_: the <em>metadata</em> that fusion.ssg has generated for the HTML document that this component is being called for. Components can use the data in this asset when rendering its output for the HTML document.
- _assets_: a _list_ containing the metadata that fusion.ssg has generated for all HTML documents in your project, i.e. _asset[]_. As with _asset_, components also can use this accumulated data when rendering its output for the HTML document, such as for generating lists whose items contain references to other HTML documents. See the example below.
- index: number, initially set to 0 and incremented by 1 for every subsequent invocation.
- _dataSources_: Components that have this property are recognized as being _consumers_ of one or more data sources. This property is a comma separated lists of _JSON file names_ that are located in your project's _src/data_ folder. At runtime, fusion.ssg reads each data source, converting them to JavaScript objects, and passes the converted data sources to your component. Data sources passed to your components can be <em>destructured</em> from <em>props</em> using their JSON file name minus the ._json_ extension.
### Returns

When collection components have content to contribute to an HTML document, they return an _object_ with properties for the _content_, the _title_, and the _name_ to apply to the HTML document:

- content: _string, the content to contribute to this HTML document._
- title: _string, will replace the simple title token in the HTML document's title tag, e.g. &lt;title&gt;&#123;title&#125;&lt;/title&gt;._
- htmlDocumentName: _string, the file name for this HTML document._

When collection components no longer have content to contribute to an HTML document, they return nothing.

<article>
<header>
<p class="example">A collection component implementation.</p>
</header>
{{examples/collectionComponetImplementation}}
<footer>In the above example, the collection component <em>"iterates"</em> through its data source, one invocation at a time, using its <em>index</em> to reference the data source item applicable to the current HTML document that it was called for, and returns the appropriate information for the HTML document. If, on the other hand, there are no more HTML documents to be generated for the collection, the component returns nothing.</footer>
</article>
