```typescript
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

export const TeamMembers = function({ team }: Props): string {
    return (
        <ul>
            {team.map(member => {
                return <li>
                    <a href={formatHref(member)}>{formatName(member)}</a>
                </li>;
            })}
        </ul>
    );
};
```
