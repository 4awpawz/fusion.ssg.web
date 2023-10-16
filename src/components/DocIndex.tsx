interface Asset {
    content: string,
    fm: {
        data: {
            docindex: {
                topic: string,
                subtopic: string
            }
        }
    }
}

interface Props {
    asset: Asset
}

export const DocIndex = function({ asset }: Props) {
    const topic = asset.fm.data.docindex.topic;
    const subtopic = asset.fm.data.docindex.subtopic;
    return <aside>
        <nav class="closed-on-mobile">
            <p class="version">{"{version}"}</p>
            <details open={topic === "gettingstarted"}>
                <summary>getting started</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}" aria-current={subtopic === "synopsis" && "page"}>Synopsis</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/installation" aria-current={subtopic === "installation" && "page"}>Installation</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/projectgenerator" aria-current={subtopic === "projectgenerator" && "page"}>Project Generator</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/projectstructure" aria-current={subtopic === "projectstructure" && "page"}>Project Structure</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocnamingconvention" aria-current={subtopic === "htmldocnamingconvention" && "page"}>HTML Document Naming Convention</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmlfilepathsandurls" aria-current={subtopic === "htmlfilepathsandurls" && "page"}>HTML File Paths And URLS</a></li>
                </ul>
            </details>
            <details open={topic === "htmldocuments"}>
                <summary>html documents</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/frontmatter" aria-current={subtopic === "frontmatter" && "page"}>Front Matter</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/templates" aria-current={subtopic === "templates" && "page"}>Templates</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/tokens" aria-current={subtopic === "tokens" && "page"}>Tokens</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/pages" aria-current={subtopic === "pages" && "page"}>Pages</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/includes" aria-current={subtopic === "includes" && "page"}>Includes</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/jsondatasources" aria-current={subtopic === "jsondatasources" && "page"}>JSON Data Sources</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/components" aria-current={subtopic === "components" && "page"}>Components</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/collections" aria-current={subtopic === "collections" && "page"}>Collections</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/posts" aria-current={subtopic === "posts" && "page"}>Posts</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/htmldocuments/404-pages" aria-current={subtopic === "404.html" && "page"}>404.html</a></li>
                </ul>
            </details>
            <details open={topic === "metadata"}>
                <summary>Metadata</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/metadata" aria-current={subtopic === "fusion.json" && "page"}>.assets.json</a></li>
                </ul>
            </details>
            <details open={topic === "configuration"}>
                <summary>configuration</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/configuration/fusionssg-configuration" aria-current={subtopic === "fusionjson" && "page"}>fusion.ssg</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/configuration/browsersync-configuration" aria-current={subtopic === "browsersync-options" && "page"}>Browsersync</a></li>
                </ul>
            </details>
            <details open={topic === "commandline"}>
                <summary>Command Line</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/{docsCurrentVersion}/cli" aria-current={subtopic === "cli" && "page"}>CLI</a></li>
                </ul>
            </details>
        </nav>
    </aside >;
};
