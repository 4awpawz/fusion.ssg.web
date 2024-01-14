import { PostDate } from "./PostDate.js";
interface AssetItem {
    postTimeStamp: number,
    fm: {
        excerpt: string,
        data: {
            tokens: {
                title: string
            }
        }
    },
    htmlDocumentName: string,
    url: string,
    isPost: boolean
}

interface Props {
    assets: AssetItem[]
}

// TODO: Use flexbox to group articles by their postdate year in descending value of postdate.
export const BlogList = function({ assets }: Props) {
    const posts = assets.filter(asset => asset.isPost).sort((aAsset, bAsset) => bAsset.postTimeStamp - aAsset.postTimeStamp);
    return (
        <ul>
            {posts.map(post => {
                return <li style="list-style: none; border-bottom: 1px dashed grey; margin-bottom: 1rem;">
                    <a href={`{baseURL}${post.url}`} style="display: block; text-decoration: none;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline;">
                            <span style="font-size: calc(var(--font-size) * 1.2)">{post.fm.data.tokens.title}</span>
                            <PostDate asset={post} />
                        </div>
                        <div style="color: #fff; margin-bottom: 1rem;">{post.fm.excerpt}</div>
                    </a>
                </li>;
            })}
        </ul>
    );
};
