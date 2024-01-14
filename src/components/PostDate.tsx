interface AssetItem {
    postTimeStamp: number
}

interface Props {
    asset: AssetItem
}

export const PostDate = function({ asset }: Props) {
    return (
        <span style="color: #fff; opacity: 0.755;"><small>{new Date(asset.postTimeStamp).toLocaleDateString()}</small></span>
    );
};
