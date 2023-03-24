---
page: docpages/index
tokens: {
title: "fusion.ssg: Documentation - Components",
}
docindex: {
topic: htmldocuments,
subtopic: components
}
---

<em>HTML DOCUMENTS</em>

# Components

<section class="container">
<div><small>Required: <em>No</em></small></div>
<div><small>Type: <em>Typescript, i.e. .tsx</em></small></div>
<div><small>Return Type: <em>string</em></small></div>
<div><small>Project Location: <em>src/components</em></small></div>
</section>

## Synopsis

<p class="info">Please note that familiarity with TSX components (that's JSX components with TypeScript) is required. Please see this handy guide that provides a <a href="https://www.typescriptlang.org/docs/handbook/jsx.html">deep dive into JSX</a>.</p>


Components _render HTML_ that replace their associated _component tags_. They are applicable in <a href="{baseURL}/docs/htmldocuments/includes">includes</a>, <a href="{baseURL}/docs/htmldocuments/templates">templates</a> and <a href="{baseURL}/docs/htmldocuments/pages">pages</a>.

fusion.ssg relieves you of the burden of having to configure TypeScript for your project's components. When building your project, fusion.ssg compiles your project's _TSX_ components when they are stale and invokes them _asynchronously_ in a _sand-boxed_ environment that supports relative import paths to sub-components and libraries.

### Two Types Of Components

fusion.ssg supports _two_ types of components:

- _components_, also called _simple components_: These components render content for a _single_ HTML document.
- _collection components_: These are <b>_higher order</b>_ components that render _multiple_ HTML documents, i.e. Collections, along with their content.

<p class="info">In this document we are only going to cover <b>simple components</b>. However, please also read about <a href="{baseURL}/docs/htmldocuments/collections">collection components</a> too, because they  facilitate the generation of collections of pages, something that is very frequently needed in websites.</p>

## Component Implementation

To use a component, add its component tag to some content, either <em>HTML</em> or <em>markdown</em>.

<article>
<header>
<p class="example">A simple component tag with a <b>dataSources</b> property.</p>
</header>
{{examples/componentTag}}
</article>

### Properties

Components can reference their individual properties using _destructuring_, as in _`{[property name]}`_ (see <a href="#component-with-datasource">code example below</a>).

#### Predefined Properties

fusion.ssg recognizes _two predefined properties_ as having special significance:

- _isCollection_: boolean, defaults to _false_ When set to _true_ component are recognized as being _collection components_. Please see <a href="{baseURL}/docs/htmldocuments/collections">Collections</a> for details.
- _dataSources_: a comma separated list of JSON file names, defaults to _""_ Components that have this property are recognized as being _consumers_ of data sources that are located in your project's _src/data_ folder, and at runtime fusion.ssg reads each data source, converting them to JavaScript objects, and passes the converted data sources to your component. Data sources passed to your components can be <em>destructured</em> from <em>props</em> using their JSON file name minus the .json extension.

#### Metadata Properties

During each build cycle, fusion.ssg extracts _metadata_ from your project that components can easily query using JavaScript's higher order Array methods, such as filter and map for example, and incorporate the data retrieved from these queries in HTML documents. For more information on this subject, please read <a href="{baseURL}/docs/metadata">Metadata</a>.

- _asset_: object, the _metadata_ for the HTML document that _this_ component is being called for. Properties that can be very useful for creating lists of posts or a list of members of a collection are:
  - _isPost_: boolean, `true` if the asset is a post, can be used to filter for all posts
  - _memberOf_: `string`, found only on assets that are members of a collection, names the collection that this asset is a member of, can be used to filter for members of the named collection
- _assets_: array, a list of all the _metadata_, i.e. _asset[]_

<p class="info">After each build cycle, fusion.ssg serializes its metadata into a file named <b>project root/.assets.json</b>. This file's content can be viewed and analyzed to determine <em>query strategies</em> for retrieving the data needed to satisfy each individual component's particular use case. In most cases, you want to limit your focus on those items that are <b>"assetType": "template"</b>.</p>

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
<p class="example">A component that consumes a data source and returns a list.</p>
</header>
{{examples/componentExample}}
</article>

<article>
<header>
<p class="example">The component tag is replaced with the HTML returned from the component.</p>
</header>
{{examples/sampleHydrationResult}}
</article>
