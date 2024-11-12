---
page: docpages/index
tokens: {
    title: "fusion.ssg: Documentation - WIPS",
}
docindex: {
    topic: htmldocuments,
    subtopic: wips,
}
---

<em>HTML DOCUMENTS</em>

# Works In Progress

_Works in progress_ or _wips_ are _files_ and _folders_ that are located in the _src/templates_ folder that aren't ready to be released yet and which should be ignored when building for release.

To declare your project's works in progress, please see <a href="{baseURL}/docs/v1/configuration/fusionssg-configuration#wips">wips</a> for more information.

<p class="ver">Introduced in v1.2.0</p>

Beginning with v1.2.0, fusion.ssg will _report all works in progress_ for each release build cycle. These warnings serve to prevent the _unintended_ updating of websites with missing HTML documents that should have been included but haven't because they are still marked as works in progress.

<img src="{baseURL}/media/posts/WIPS-reporting.png" alt="imgage">
