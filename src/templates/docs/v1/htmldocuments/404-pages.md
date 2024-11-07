---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - Collections",
}
docindex: {
    topic: htmldocuments,
    subtopic: "404.html",
}
---

<em>HTML DOCUMENTS</em>

# 404.html

<p class="ver">Introduced in v1.0.0</p>

<section class="container">
<div><small>Required: <em>No, but highly suggested.</em></small></div>
</section>

Every website should have a 404.html page to inform its visitors that the page they are seeking doesn't exits. As such, fusion.ssg provides supports for the generation and correct placement of _404.html documents_.

During each build cycle, when fusion.ssg finds a <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/templates">template</a> named _404.md_ or _404.html_, it will serialize the generated 404.html document into the root of the _build folder_ for development builds, and into the root of the _build/&lbrace;baseURL&rbrace;_ folder for release builds when <a href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration#baseurl">baseURL</a> is defined in <a href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration">fusion.json</a>, the project's configuration file.

<p class="ver">Introduced in v1.3.0</p>

Beginning with  v1.3.0, fusion.ssg will issue a warning during each build cycle when it determines that your project doesn't contain a 404.html document.

<img src="{baseURL}/media/no-404-warning.png" alt="image of no 404 warning" width="500">
<br>
<br>
 <p class="warn">Beginning with fusion.ssg v1.3.0 the warning about a missing 404.html file is no longer implemented in browsersync.js, and is handled internally by fusion.ssg. If you are upgrading a project to v1.3.0 or greater then you should remove the following from your project's browsersync.js file which is located in your project's root folder:</p>

`console.log(chalk.yellowBright("Warning: this site is missing a 404.html doc - using default 404.html."));`
