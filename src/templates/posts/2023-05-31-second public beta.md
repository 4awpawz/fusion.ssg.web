---
page: blog
tokens: {
    title: "Second Public Beta Release"
}
post: {
    categories: "release",
}
---
We are very pleased to announce the second public release of fusion.ssg, v1.0.0-beta.8.
<!-- end -->
v1.0.0-beta.8 has been tested extensively and is considered stable. However, because of limited resources, we have only been able to test fusion.ssg on Mac OS. We would be so grateful if those of you who are running either Windows or Linux can help us test fusion.ssg's OS compatibility by simply installing and running the instructions below.

## What's new

This release adds the following capabilities:

- Support for <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/components">.jsx components</a>.
- Support for .ts browser scripts.
- Support for <a href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens#global-simple-tokens">global tokens</a>.

## Install and run fusion.ssg

To install fusion.ssg, run the following in your terminal:

```shell
npm i -g @4awpawz/fusion.ssg
```

Once installed, run the following in your terminal to create and run a new fusion.ssg project:

```shell
fusion new [project name]
cd [project name]
npm run development
```

## Please provide feedback

After running the above, you should see a confirmation in your browser stating that fusion.ssg has been successfully installed. If this is the case, please contact us on [Twitter](https://twitter.com/4awpawz) and let us know that you have successfully installed and run fusion.ssg and please don't forget to include what OS you are using.

However, if the build produces errors, please file an issue [here](https://github.com/4awpawz/fusion.ssg/issues) and include the output from your terminal along with what OS you are running on.

We sincerely hope that by releasing early it will encourage greater engagement and participation with the developer community.
