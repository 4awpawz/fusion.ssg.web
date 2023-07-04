interface AssetItem {
    postTimeStamp: number
}

interface Props {
    asset: AssetItem
}

export const PostDate = function({ asset }: Props) {
    return (
        <span style="color: #fff;">{new Date(asset.postTimeStamp).toLocaleDateString()}</span>
    );
};
