---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - HTML File Paths And URLS",
}
docindex: {
    topic: gettingstarted,
    subtopic: htmlfilepathsandurls,
}
---

<em>GETTING STARTED</em>

# HTML File Paths And URLS

Generally speaking, there are three primary formats to use for *__file paths__* that point to _HTML documents_ and other website _assets_:

- absolute file paths, e.g. &lt;img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain"&gt;
- root relative file paths (sometimes called site relative paths), e.g. &lt;img src="/images/picture.jpg"&gt;
- page relative file paths, e.g. &lt;img src="../picture.jpg"&gt;	

<p class="info">For a more in-depth discussion on this topic, please see <a href="https://www.w3schools.com/html/html_filepaths.asp">HTML File Paths</a> for more information.</p>

<p class="info">
    fusion.ssg supports only <b><em>root relative</em></b> file paths because both its <b><em>&lbrace;baseURL&rbrace;</em></b> and <b><em>cache busting</em></b> features rely on root relative URLS to work correctly.
</p>

So, for example, to link to an HTML document named __/some-folder/document.html__ from anywhere in your site, you would use a root relative file path:

```html
<a href="/some-folder/document">document</a>

```

When linking to your site's assets, such as *__.css__*, *__.js__*, and *__other media__*, you would also use root relative file paths:

```html
<link rel="stylesheet" href="/css/some-folder/mysite.css">
<script src="/scripts/some-folder/mysite.js"></script>
<img src="/media/some-folder/mysite.png">

```

This strategy of using only root relative file paths abides with the use of *__&#123;baseURL&#125;__* in hrefs

<pre><code class="language-HTML">
&lt;a href="&lbrace;baseURL&rbrace;/some-folder/document"&gt;...&lt;/a&gt;,
</code></pre>

and when linking to other site assets

<pre><code>
&lt;link rel="stylesheet" href="&lbrace;baseURL&rbrace;/css/some-folder/mysite.css"&gt;
&lt;script src="&lbrace;baseURL&rbrace;/scripts/some-folder/mysite.js"&gt;&lt;/script&gt;
</code></pre>


and with fusion.ssg's support for *__cache busting__* your site.

<p class="info">
    For more information on &lbrace;baseURL&rbrace;, please see <a href="{baseURL}/docs/configuration/fusionssg-configuration#baseurl">baseURL</a>.
</p>

<p class="info">
    For more information on cache busting, please see <a href="{baseURL}/docs/cli#optional-cache-busting-of-release-builds">cache busting</a>.
</p>

