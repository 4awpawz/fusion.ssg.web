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
                    <span>
                        <a href={`{baseURL}${post.url}`}>{post.fm.data.tokens.title}</a> <small><PostDate asset={post} /></small>
                    </span>
                    <br />
                    <small>{post.fm.excerpt}</small>
                </li>;
            })}
        </ul>
    );
};
