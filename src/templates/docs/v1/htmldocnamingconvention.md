---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - HTML Document Naming Convention",
}
docindex: {
    topic: gettingstarted,
    subtopic: htmldocnamingconvention,
}
---

<em>GETTING STARTED</em>

# HTML Document Naming Convention

When saving a generated HTML document to the build folder, fusion.ssg doesn't name the HTML document *__'template file name' + .html__*. Instead, for templates that aren't named _index.md_ or _index.html_, it creates a folder whose name is the *__name of the template__* and saves the actual HTML document to that folder with the name of *__index.html__*.

For example, if you have a template whose path is _templates/math.md_, fusion.ssg will save the generated HTML document to the build folder as *__/math/index.html__*, and its file path would be "*__/math__*". For a template whose path is _templates/subject/spelling.html_, fusion.ssg will save the generated HTML document to the build folder as *__/subject/spelling/index.html__*, and its file path would "*__/subject/spelling__*".

For HTML documents generated from templates named _index.md_ or _index.html_, such as _templates/index.md_, and _templates/subject/index.html_, fusion.ssg saves them to the build folder as *__/index.html__* (its file path would be "*__/__*"), and *__/subject/index.html__* (its file path would be "*__/subject__*"), respectively.
