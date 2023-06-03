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

<section class="container">
<div><small>Required: <em>No</em></small></div>
<div><small>Type: <em>.tsx</em> and <em>.jsx</em></small></div>
<div><small>Return Type: <em>object</em></small></div>
<div><small>Project Location: <em>src/components</em></small></div>
</section>

A <em>collection</em> consists of _one or more_ HTML documents created using a single <a href="#collection-templates">template</a> and a higher order <a href="#collection-component-implementation">collection component</a>.

<p class="info"><a href="https://github.com/4awpawz/fusion.ssg-flags-of-the-world-demo/tree/development">View this example project that demonstrates using a collection to generate pages for all the flags of the world.</a></p>

<p class="info">The following discussion assumes that you have already read <a href="{baseURL}/docs/htmldocuments/components">simple components</a>.</p>

## Synopsis

Imagine for the moment that you have a portfolio of one kind or another, and that you want to create an HTML document for each item in the portfolio. Imagine how tedious and laborious that process would be if you had to do that manually. fusion.ssg provides a much better solution.

Simply put, fusion.ssg can generate a "collection" of HTML documents using a single <a href="#collection-templates">template</a> and a <a href="#collection-component-implementation">collection component</a> that is called multiple times and that returns objects that define the <a href="#returns">properties</a> an HTML document.

## Collection Component Tags

A _collection component tag_ is any component tag that declares the property `isCollection`.

<article>
<header>
<p class="example">A collection component tag.</p>
</header>
{{examples/collectionComponentTag}}
</article>

<p class="info">Collection component tags are applicable within <b>includes</b>, <b>templates</b> and <b>pages</b> but may only appear once in an HTML document.</p>

## Collection Templates

<p>A <em>collection template</em> is any template that declares a front matter property named <code>isCollection</code> with a value of <code>true</code>.</p>

<article>
<header>
<p class="example">A collection template with a collection component tag.</p>
</header>
{{examples/collectionTemplateAndTag}}
</article>

## Collection Component Implementation

Collection components are higher order components that produce multiple HTML documents (i.e. A collection).

fusion.ssg repeatedly invokes collection components until they indicate that they shouldn't be invoked again.

For each invocation, the component receives arguments for an _index_, for <a href="{baseURL}/docs/htmldocuments/components#metadata-properties">_asset_ and _assets_</a>,  and for any of the other <a href="{baseURL}/docs/htmldocuments/components#properties">properties</a> that it has declared, such as its data sources.

The value of the index is initially set to _0_ and is incremented by _1_ for each subsequent invocation, and can be used, for example, to _"iterate"_ through one or more data sources, one invocation at a time.

When there are no more HTML documents to be generate for this collection, the component returns nothing which signals to fusion.ssg that it is to stop calling the component.

### Properties Passed As Arguments

- _asset_: `object`. The <em>metadata</em> that fusion.ssg has generated for the HTML document that this component is being called for. Components can use the data in this asset when rendering its output for the HTML document.
- _assets_: `asset[]`. Contains the metadata that fusion.ssg has generated for all HTML documents in your project. As with _asset_, components also can use this accumulated data when rendering its output for the HTML document, such as for generating lists whose items contain references to other HTML documents. See the example below.
- index: `number`. Initially set to 0 and incremented by 1 for every subsequent invocation.
- _dataSources_: Components that have this property are recognized as being _consumers_ of one or more data sources. This property is a comma separated lists of _JSON file names_ that are located in your project's _src/data_ folder. At runtime, fusion.ssg reads each data source, converting them to JavaScript objects, and passes the converted data sources to your component. Data sources passed to your components can be <em>destructured</em> from <em>props</em> using their JSON file name minus the ._json_ extension.

### Returns

To generate an HTML document, collection components should always return an _object_ with the following properties:

- content: `markdown`. This markdown will replace the <a href="{baseURL}/docs/htmldocuments/tokens#template-tokens">template token</a> in the associated page with this content.
- title: `string`. Replaces the <a href="{baseURL}/docs/htmldocuments/tokens#simple-tokens">simple token</a> in this HTML document's title tag, e.g. &lt;title&gt;&#123;title&#125;&lt;/title&gt;.
- htmlDocumentName: `string`. The _file name_ for this HTML document.

<p class="info">When collection components no longer have content to contribute to an HTML document, they return nothing.</p>

<article>
<header>
<p class="example">A collection component implementation.</p>
</header>
{{examples/collectionComponetImplementation}}
<footer>In the above example, the collection component <em>"iterates"</em> through its data source, one invocation at a time, using its <em>index</em> to reference the data source item applicable to the current HTML document that it was called for, and returns the appropriate information for the HTML document. If, on the other hand, there are no more HTML documents to be generated for the collection, the component returns nothing.</footer>
</article>
