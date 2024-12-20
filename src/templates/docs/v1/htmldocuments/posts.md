---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Posts",
}
docindex: {
    topic: htmldocuments,
    subtopic: posts,
}
---

<em>HTML DOCUMENTS</em>

# Posts

<section class="container">
    <div><small>Required: <em>No</em></small></div>
    <div><small>Front Matter: <em>Yes</em></small></div>
    <div><small>Type: <em>.html, .md</em></small></div>
    <div><small>Project Location: <em>src/templates/posts</em></small></div>
</section>

Posts are specialized <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/templates">templates</a> that can be useful for creating <em>blog-like</em> HTML documents, or any type of HTML document that would benefit from a <em>chronologically ordered folder structure</em>, <em>tags</em> and <em>categories</em>.

<p class="info">In metadata, posts can be identified by their <b>"isPost": true</b> property.</p>

## Naming Convention

Unlike all other templates, post templates have a strict naming convention, e.g . 2023-02-28-upsidedown-cake.md, which allows fusion.ssg to structure your posts chronologically. Post template names must begin with the year, -, month, -, and day (i.e., YYYY-MM-DD), followed by a dash (i.e., -), and ending with the actual file name, including its type, i.e. [file name].md|html.

For example, a post without categories (see below) named <em>2023-02-28-upsidedown-cake.md</em> would be rendered to the posts folder as 2003/02/28/upsidedown-cake/index.html, and a post with categories "recipes, cakes" named <em>2023-02-28-upsidedown-cake.md</em> would be rendered to the posts folder as recipes/cakes/2003/02/28/upsidedown-cake/index.html.

## Categories

Categories are strictly for rendering posts in a particular _folder hierarchy_. For example, a post with a single category, such as _"recipes"_, would be rendered in the "posts/recipes/" folder and a post with two categories, such as _"recipes, cakes and pies"_, would be rendered in the "posts/recipes/cakes and pies" folder/.

Categories are declared in a post's front matter as shown below:

<pre><code class="laguage-HTML">
post: {
    categories: "category, ..."
}
</code></pre>

## Tags

Tags are very useful for associating posts that have similar subject matter. <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/components">Components</a> can query <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/components#metadata-properties">metadata</a> using higher order array functions, such as _filter_ for example, to find all posts with a particular tag.

Tags are declared in a post's front matter as shown below:

<pre><code class="laguage-HTML">
post: {
    tags: "tag, ..."
}
</code></pre>

<article>
<header><p class="example">A post with a <em>tag</em> and multiple categories.</p></header>
<pre><code class="laguage-HTML">
---
page: blog
tokens: {
    title: "Yada Yada"
}
post: {
    tags: "yada yada",
    categories: "TV Series, Seinfeld, S8, E19"
}
---
Yada yada...
&lt;!-- end --&gt;
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quo dolor dolorum, vel temporibus impedit quam animi, aliquam porro assumenda tenetur iure nemo voluptas voluptates quis distinctio, eveniet suscipit aliquid.
</code></pre>
</article>

## Post Specific Simple Tokens

<p class="ver">Introduced in v1.2.0</p>

Besides the simple tokens that you define in your _template's front matter_ and globally in your project's _fusion.json_ file, fusion.ssg also defines numerous simple tokens, whose values it has obtained from the meta data associated with your posts templates, that you can use. Please see <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens#auto-generated-simple-tokens">Auto Generated Tokens</a> for details.
