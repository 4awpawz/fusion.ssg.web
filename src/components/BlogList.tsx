import { PostDate } from "./PostDate.js";
interface AssetItem {
    postTimeStamp: number,
    fm: {
        excerpt: string,
        data: {
            tokens: {
                title: string
            },
            post: {
                categories: string
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
                const categories = post.fm.data.post.categories.split(",").join("/");
                return <li style="list-style: none;">
                    <a href={`{baseURL}${post.url}`} style="display: block;">
                        <span style="font-size: calc(var(--font-size) * 1.2)">{post.fm.data.tokens.title}</span>
                        <br />
                        <small>Posted on <i><PostDate asset={post} /></i> to <i style="color: #fff; opacity: 0.755;">{categories}</i></small>
                        <br />
                        <small style="color: #fff;">{post.fm.excerpt}</small>
                    </a>
                </li>;
            })}
        </ul>
    );
};
