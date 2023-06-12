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
                    <li><a class="secondary" href="{baseURL}/docs" aria-current={subtopic === "synopsis" && "page"}>Synopsis</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/installation" aria-current={subtopic === "installation" && "page"}>Installation</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/projectgenerator" aria-current={subtopic === "projectgenerator" && "page"}>Project Generator</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/projectstructure" aria-current={subtopic === "projectstructure" && "page"}>Project Structure</a></li>
                </ul>
            </details>
            <details open={topic === "htmldocuments"}>
                <summary>html documents</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/frontmatter" aria-current={subtopic === "frontmatter" && "page"}>Front Matter</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/templates" aria-current={subtopic === "templates" && "page"}>Templates</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/tokens" aria-current={subtopic === "tokens" && "page"}>Tokens</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/pages" aria-current={subtopic === "pages" && "page"}>Pages</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/includes" aria-current={subtopic === "includes" && "page"}>Includes</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/jsondatasources" aria-current={subtopic === "jsondatasources" && "page"}>JSON Data Sources</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/components" aria-current={subtopic === "components" && "page"}>Components</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/collections" aria-current={subtopic === "collections" && "page"}>Collections</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/posts" aria-current={subtopic === "posts" && "page"}>Posts</a></li>
                    <li><a class="secondary" href="{baseURL}/docs/htmldocuments/404-pages" aria-current={subtopic === "404.html" && "page"}>404.html</a></li>
                </ul>
            </details>
            <details open={topic === "metadata"}>
                <summary>Metadata</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/metadata" aria-current={subtopic === "fusion.json" && "page"}>.assets.json</a></li>
                </ul>
            </details>
            <details open={topic === "configuration"}>
                <summary>configuration</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/configuration" aria-current={subtopic === "fusionjson" && "page"}>fusion.json</a></li>
                </ul>
            </details>
            <details open={topic === "commandline"}>
                <summary>Command Line</summary>
                <ul>
                    <li><a class="secondary" href="{baseURL}/docs/cli" aria-current={subtopic === "cli" && "page"}>CLI</a></li>
                </ul>
            </details>
        </nav>
    </aside >;
};
