interface AssetItem {
    postTimeStamp: number
}

interface Props {
    asset: AssetItem
}

export const PostDate = function({ asset }: Props) {
    return (
        <span>{new Date(asset.postTimeStamp).toLocaleDateString()}</span>
    );
};
