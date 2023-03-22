interface TeamMember {
    "name": {
        "first": string,
        "last": string
    }
}

interface Props {
    team: TeamMember[]
}

function formatHref(member: TeamMember): string {
    return `/team/${member.name.first}-${member.name.last}`;
}

function formatName(member: TeamMember): string {
    return `${member.name.first} ${member.name.last}`;
}

export const TeamList = function({ team }: Props) {
    const itemStyle = { fontFamily: "sans-serif", fontWeight: "bold", color: "darkorange" };
    return (
        <ul>
            {team.map(member => {
                return <li style="list-style: none;">
                    <span style={itemStyle}>
                        <a href={formatHref(member)}>{formatName(member)}</a>
                    </span>
                </li>;
            })}
        </ul>
    );
};
