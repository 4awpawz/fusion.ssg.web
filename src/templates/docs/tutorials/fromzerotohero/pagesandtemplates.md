---
page: docpages/index
tokens: {
    title: "fusion.ssg: Tutorials",
}
docindex: {
    topic: gettingstarted,
    subtopic: tutorials,
}
---
<em>GETTING STARTED/<a href="{baseURL}/docs/tutorials#from-zero-to-hero">Tutorials</a></em></em>

# Tutorials

## From Zero To Hero

<img src="{baseURL}/media/HTML-Document-Creation-Workflow.png" alt="image of workflow">

### Creating HTML Documents From Pages And Templates

<p class="info">Every HTML document that fusion.ssg generates requires a template file and a page file.</p>

Page files, also called ___pages___, provide HTML documents with some content and their overall structure upon which template files, also called ___templates___, can contribute their own content and structure to. While a template can associate with only a single page, a page can be associated with one or more templates.
You create templates in your project's ___source/templates___ folder and pages in your project's ___src/pages___ folder. Templates can be written in either markdown, which fusion.ssg converts to HTML, or in HTML. Pages must always be written in HTML.

You indicate which page a template ___associates___ with by defining the ___"page" property___ in the template's front matter at the very top of the file. If a template has its own content and the page it associates with has a ___&lbrace;template&rbrace; token___, its content will be merged into the page that it associates with, replacing that page's template token. When the front matter "page" property is omitted, fusion.ssg will associate the template with the ___default.html___ page that resides in your project's src/pages folder. If the default.html page doesn't exist, fusion.ssg will display an error.

----

__Example of a _page named main.html with a &lbrace;template&rbrace; token_ which is replaced by the template's content when fusion.ssg generates the HTML document:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=j, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    {template} <- this template token will be replaced by the template's content
</body>
</html>
```
<small><i>src/pages/main.html</i></small>

----

__Example of a _template named some-template.md with content_:__

```yaml
---
page: main <- this decleares the template's association with a page named main.html
---
# Hello World! <- the content to be contributed to the page
```
<small><i>src/templates/some-template.md</i></small>

----

__Example of an HTML document that is generated from the above page and template. Notice that the _page's &lbrace;template&rbrace; token_ has been replaced by the template's content, which has also been converted to HTML:__

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=j, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1> <- the template's content has replaced the {template} token
</body>
</html>
```
<small><i>generated HTML document</i></small>

----

## Exercise

In this exercise you will create a new fusion.ssg project using fpg and create a single HTML document.

Requires:
- <a href="{baseURL}/docs/v1/installation#install-fusionssg">fusion.ssg</a>
- <a href="{baseURL}/docs/v1/installation#install-fusionfpg">fpg</a>

### Create A New Project
To create a new project you will use fpg, fusion's project generator. In your terminal, run the following command (replace _projectname_ with any name you prefer):

```shell
fpg new --bare projectname
```

### Create An HTML Document
Next, create an HTML document that has a header tag (i.e. &lt;h1&gt;...&lt;/h1&gt; ) followed by a paragraph tag (i.e. &lt;p&gt;...&lt;/p&gt; ). This will require a _page_ (you can use the _default.html_ file located in your project's _src/pages folder_) and a _template_, which you should name _src/templates/index.md_ or _src/templates/index.html_, and don't worry about styling.

Next, build and run your project in your default browser by running the following command in your terminal (make sure you are located at the your project's root folder):

```shell
npm run development
```

If you have done everything correctly, your project should have built with no warnings or errors and the HTML document that you created from a page and a template should be displayed in your browser.

Now, with your project still running in your terminal, add some additional content to the template and save the file. Upon saving the file, fusion.ssg will build your project again and your browser should refresh the page with the changes that you just made.

<p class="info">Don't delete this project as you will use it again in the next tutorial!</p>
