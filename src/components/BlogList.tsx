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

export const BlogList = function({ assets }: Props) {
    const posts = assets.filter(asset => asset.isPost).sort((aAsset, bAsset) => bAsset.postTimeStamp - aAsset.postTimeStamp);
    return (
        <ul>
            {posts.map(post => {
                return <li style="list-style: none;">
                    <a href={`{baseURL}${post.url}`} style="display: block;">
                        <span style="font-size: calc(var(--font-size) * 1.2)">{post.fm.data.tokens.title}</span>,&nbsp;<small><PostDate asset={post} /></small>
                        <br />
                        <small style="color: #fff;">{post.fm.excerpt}</small>
                    </a>
                </li>;
            })}
        </ul>
    );
};
