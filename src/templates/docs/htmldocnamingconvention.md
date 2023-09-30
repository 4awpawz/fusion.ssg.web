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

When fusion saves a generated HTML document to the build folder, *__it doesn't name it 'template file name' + .html__*. Instead, for templates that aren't named _index.md_ or _index.html_, *__it creates a folder whose name is the name of the template and saves the actual HTML document to that folder with the name of index.html__*.

For example, if you have a template whose path is _templates/math.md_, fusion.ssg will save the generated HTML document to the build folder as *__/math/index.html__*. For a template whose path is _templates/subject/spelling.html_, fusion.ssg will save the generated HTML document to the build folder as *__/subject/spelling/index.html__*.

HTML documents generated from templates named _index.md_ or _index.html_, like _templates/index.md_, and _templates/subject/index.html_, are saved to the build folder as *__/index.html__*, and *__/subject/index.html__*, respectively.
