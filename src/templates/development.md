---
tokens: {
    title: fusion.ssg • Development,
    demoPageTitle: title
}
---

# Project Development

The project is written in ` TypeScript` and runs on `Node`.

## The Name

_fusion_ plays on the idea of seamlessly **_fusing_** together various technologies, e.g. HTML, Markdown, TypseScript Components, JSON Data, YAML Front Matter, etc., to seamlessly work together to simplify the creation of HTML documents and static websites.

## Project Scope
The project's scope is limited to generating robust and resilient HTML documents and nothing else. It will not provide any other tooling other than what is absolutely necessary to accomplish that. Importantly, fusion.ssg requires no knowledge of front-end frameworks like React. This keeps the scope of the project focused, preventing feature creep, and benefits users who will be able to pick and chose their own tools.

## Current Status

The project is still in its  v1.0.0-beta stage. Beta releases should be considered _stable_. While in Beta, features and implementations might change dramatically and this should be considered the norm.

## Versioning

fusion.ssg will use [semantic versioning](https://semver.org/) and will distinguish between _development_ and _release_ builds by their major version numbers
  1. Odd major version number are to be considered development versions.
  1. Even major version number are to be considered release versions.

## What Has Already Been Implemented

- [X] Support for _simple HTML document creation_ using _Pages, Templates and Includes_.
- [X] Support for _simple token replacement_ involving property values_ and _matching property names_ in HTML.
- [X] Support for _`.tsx` and `.jsx` components_, _compilation_ and _sand-boxed execution_.
- [X] Support for _`.ts` browser script compilation.
- [X]  Support for _document hydration_ using components and JSON data sources.
- [X] Support for generating _collections of pages_ using components and JSON data sources.
- [X] Support for base URLs.
- [X] Support for development and release builds.
- [X]  Support for content posting (e.g. Blogging)
  - [X] Support for tags.
  - [X] Support for categories.
- [X] Work in progress templates.
  - [X] Individual files.
  - [X] Folders.
  - [X] Ignored.
- [X] End user project creation.
- [X] Configure website domain.

## What Still Remains To Be Done

- fusion.ssg is desperately in need of a great logo.
- Documentation is _continuously under development_.
- Encourage early community involvement and adoption.
- Provide sufficient testing to reduce the likelihood of introducing regressions.

## Longer Term Goals

- Seek RFC.
- Accept pull requests when the codebase is stable enough to receive them, which will probably coincide with the first major release.

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discuss _fusion.ssg _on Github](https://github.com/4awpawz/fusion.ssg/discussions)

For casual conversation with others about using _fusion.ssg_:

[Discuss _fusion.ssg on Twitter and other social media.](https://twitter.com).

{{show-your-appreciation}}
