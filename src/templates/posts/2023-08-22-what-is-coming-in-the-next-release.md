---
page: blog
tokens: {
    title: What's Coming in the next release
}
post: {
    categories: "release,v1",
}
---
In our pursuit to provide you with the best tools for creating resilient static HTML documents and web sites, the next release of fusion.ssg will feature numerous enhancements (please see below for details).
<!-- end -->
We are so thrilled to see fusion.ssg being adopted by creators from all over the world ❤️.

Sincerely,

The Team

<p class="info">This page has been amended on 9/2/2023 to include the notice that the feature "cache busting" will be included in the next release.</p>
<p class="info">This page has been amended on 9/5/2023 to include the notice that the implementation for the feature "conditional includes" has changed and will now be using fusion.json for its configuration and not front matter.</p>

### Cache Busting

<img style="float: left; border-radius: 50%; shape-outside: circle(); margin-right: 10px;" src="{baseURL}/media/posts/buster.png" alt="image" width="100">
<p>The next release of fusion.ssg will make cache busting your web sites a snap 🫰🏼. When building for release, fusion.ssg will now <em>optionally</em> cache bust your site's assets (e.g. css, media, scripts, .etc), allowing your site's visitors to immediately experience its latest changes. Specifically, to <em>opt in to cache busting your release builds</em>, you will need to append <code>--cache-bust</code> to the <em>release:fusion</em> script located in your project's <em>package.json</em> file. Once appended, the release:fusion script should look exactly like the following:</p>

```json
"release:fusion": "fusion release --cache-bust",
```
fusion.ssg handles all the details, so no additional configuration or changes to your projects other than the above change to your package.json file's release:fusion script is required to enhance your sites with cache busting.

<p class="info">fusion.ssg relies on <a href="https://github.com/4awpawz/buster">Buster</a>, which is a very capable and resilient cache busting tool developed by the same team that brings you fusion.ssg, to implement its cache busting.</p>

### Conditional Includes

Conditional includes will allow you to designate that an include's content is _relevant only for release builds_ or is _relevant only for development builds_.

Why would you might use this? For example, suppose your site includes some content that is only relevant in a release build, such as Google analytics for example, you will now be able to exclude this content when building your site for development.

To support this feature, _fusion.json_ will now support the following property:

```json
"conditionalIncludes": {
    "developmentOnly": ["path/to/include/relative/to/src/includes", ...],
    "releaseOnly": ["path/to/include/relative/to/src/includes", ...],
}
```

If an include's path matches one of these conditions, its content will not be included in the target HTML document.

### WIPS Reporting During Release Builds

fusion.ssg will now report all WIPS for each release build cycle. These warnings will serve to prevent the _unintended_ updating of web sites with missing HTML documents that should have been included but aren't because they are still marked as WIPS.

<img src="{baseURL}/media/posts/WIPS-reporting.png" alt="imgage">

### Exposing More Post Metadata As Simple Token Values

When tokenizing a post, fusion.ssg will now expose a post's _post date_, _categories_, and _tags_ as simple token values, allowing them to be used as simple tokens in your templates, pages and includes. This will serve to mitigate the need of having to use a component just to include these in your HTML documents.

- &lbrace;postDate&rbrace;: the post's post date, derived from its file name, transformed to a locale date string.
- &lbrace;categories&rbrace;: the post's categories, declared in the post's front matter, transformed to a path where multiple categories are separated from each other using "/".
- &lbrace;tags&rbrace;: the post's tags, declared in the post's front matter, as a comma separated list.

### Tokenization Metric Reporting

fusion.ssg will now include metrics for tokenization.
