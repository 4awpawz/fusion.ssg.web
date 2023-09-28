---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - URLS",
}
docindex: {
    topic: gettingstarted,
    subtopic: urls,
}
---

<em>GETTING STARTED</em>

# URLS

Generally speaking, there are three primary formats to use when creating inter page links to HTML documents in a website. There are:

- absolute paths, e.g. &lt;img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain"&gt;
- root relative paths (sometimes called site relative paths), e.g. &lt;img src="/images/picture.jpg"&gt;
- page relative paths, e.g. &lt;img src="../picture.jpg"&gt;	

<p class="info">For a more in-depth discussion on this topic, please see <a href="https://www.w3schools.com/html/html_filepaths.asp">HTML File Paths</a> for more information.</p>

__fusion.ssg supports only _root relative_ URLS because both its _&lbrace;baseURL&rbrace;_ and _cache busting_ features rely on root relative URLS to work correctly.__

So, for example, if you want to create a link to an HTML document named __/some-folder/document.html__ from anywhere in your site, you should use the following format for your hrefs

```html
<a href="/some-folder/document">document</a>

```

and when linking to other site assets, such as .css, .js, and other media, you should use:

```html
<link rel="stylesheet" href="/css/some-folder/mysite.css">
<script src="/scripts/some-folder/mysite.js"></script>
<img src="/media/some-folder/mysite.png">

```

This strategy of using only site relative paths abides with the use of &#123;baseURL&#125; in hrefs

<pre><code class="language-HTML">
&lt;a href="&lbrace;baseURL&rbrace;/some-folder/document"&gt;...&lt;/a&gt;,
</code></pre>

and when linking to other site assets

<pre><code>
&lt;link rel="stylesheet" href="&lbrace;baseURL&rbrace;/css/some-folder/mysite.css"&gt;
&lt;script src="&lbrace;baseURL&rbrace;/scripts/some-folder/mysite.js"&gt;&lt;/script&gt;
</code></pre>


and with fusion.ssg's support for __cache busting__ your site.

<p class="info">
    For more information on &lbrace;baseURL&rbrace;, please see <a href="{baseURL}/docs/configuration/fusionssg-configuration#baseurl">baseURL</a>.
</p>

<p class="info">
    For more information on cache busting, please see <a href="{baseURL}/docs/cli#optional-cache-busting-of-release-builds">cache busting</a>.
</p>

