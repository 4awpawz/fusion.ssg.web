---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Components",
}
docindex: {
    topic: htmldocuments,
    subtopic: components,
}
---

<em>HTML DOCUMENTS</em>

# Components

<section class="container">
<div><small>Required: <em>No</em></small></div>
<div><small>Type: <em>.tsx</em> and <em>.jsx</em></small></div>
<div><small>Return Type: <em>markdown</em></small></div>
<div><small>Project Location: <em>src/components</em></small></div>
</section>

<p class="info">The following assumes you have a  familiarity with JSX and TSX components. Please see these handy guides that provide a <a href="https://www.typescriptlang.org/docs/handbook/jsx.html">deep dive into JSX</a> and a <a href="https://www.typescriptlang.org/docs/handbook/react.html">deep dive into TSX</a>.</p>

Components are TypeScript or JavaScript functions that _return markup_ which replaces their _component tags_ in HTML documents, and are applicable in <a href="{baseURL}/docs/htmldocuments/includes">includes</a>, <a href="{baseURL}/docs/htmldocuments/templates">templates</a> and <a href="{baseURL}/docs/htmldocuments/pages">pages</a>.

<article>
<header>
<p class="example">A simple component.</p>
</header>
{{examples/componentExample1}}
</article>

### Types Of Components

fusion.ssg supports _two_ types of components:

- _Simple components_, also just called "components", render markup for a _single_ HTML document.
- _<a href="{baseURL}/docs/htmldocuments/collections">Collection components</a>_ are <b>_higher order</b>_ components that are called to render _multiple_ HTML documents.

<p class="info">This document mainly covers simple components.</p>

## Component Tags

<article>
<header>
<p class="example">A simple component tag.</p>
</header>
{{examples/componentTag}}
</article>

## Component Implementation

<p class="info">fusion.ssg relieves you of the burden of having to configure TypeScript for your project. When building your project, fusion.ssg compiles your project's components when they are stale and invokes them asynchronously in a sand-boxed environment that supports relative import paths to sub-components and libraries.</p>

### Properties

Component can reference their individual properties using _destructuring_, as in _`{[property name]}`_ (see <a href="#component-with-datasource">example</a> below).

#### Predefined Properties

fusion.ssg recognizes _two predefined component tag properties_ as having special significance:

- _isCollection_: `boolean`, default `false`. When set to _true_ component are recognized as being _collection components_. Please see <a href="{baseURL}/docs/htmldocuments/collections">Collections</a> for details.
- _dataSources_:  `string`, default `""`. A comma separated list of JSON file names. Components that have this property are recognized as being _consumers_ of data sources that are located in your project's _src/data_ folder, and at runtime fusion.ssg reads each data source, converting them to JavaScript objects, and passes the converted data sources to your component. Data sources passed to your components can be <em>destructured</em> from <em>props</em> using their JSON file name minus the .json extension. Please see <a href="{baseURL}/docs/htmldocuments/jsondatasources">JSON Datasources</a> for details.

#### Metadata Properties

<p class="info">After each build cycle, fusion.ssg serializes its metadata into a file named <b>project root/.assets.json</b>. This file's content can be viewed and analyzed to determine <em>query strategies</em> for retrieving the data needed to satisfy each individual component's particular use case. In most cases, you want to limit your focus on those items that are <b>"assetType": "template"</b>.</p>

During each build cycle, fusion.ssg extracts _metadata_ from your project that components can easily query using JavaScript's higher order Array methods, such as filter and map for example, and incorporate the data retrieved from these queries in HTML documents. For more information on this subject, please read <a href="{baseURL}/docs/metadata">Metadata</a>.

- _asset_: `object`. The <em>metadata</em> that fusion.ssg has generated for the HTML document that this component is being called for. Components can use the data in this asset when rendering its output for the HTML document. For example, the following properties can be useful for creating lists of posts or lists of members of a collection:
  - _isPost_: `boolean`. If present, it identifies this asset as a post, and can be used to filter for all posts.
  - _memberOf_: `string`. If present, it identifies this asset as being a member of a collection, and names the collection that this asset is a member of, and can be used to filter for members of the named collection.
- _assets_: `asset[]`.

### Returns

Components should always return markdown.

## A Complete Implementation Example

<article>
<header>
<p class="example">A template that contains a simple component tag with a dataSources property.</p>
</header>
{{examples/templateWithComponentTag}}
</article>

<article>
<header>
<p class="example">The JSON data source declared in the component's tag that fusion.ssg passes to the component.</p>
</header>
{{examples/sampleJSONDataSource}}
</article>

<article id="component-with-datasource">
<header>
<p class="example">A component implementation that consumes a data source and returns a list.</p>
</header>
{{examples/componentExample}}
</article>

<article>
<header>
<p class="example">The component tag is replaced with the markdown returned from the component.</p>
</header>
{{examples/sampleHydrationResult}}
</article>
