interface AssetItem {
    fm: {
        data: {
            tokens: {
                title: string
            }
        }
    },
    htmlDocumentName: string,
    isPost: boolean
}

interface Props {
    assets: AssetItem[]
}

export const BlogList = function({ assets }: Props) {
    const posts = assets.filter(asset => asset.isPost && asset.htmlDocumentName.includes("posts/"));
    return (
        <ul>
            {posts.map(post => {
                return <li style="list-style: none;">
                    <span>
                        <a href={post.htmlDocumentName}>{post.fm.data.tokens.title}</a>
                    </span>
                </li>;
            })}
        </ul>
    );
};
