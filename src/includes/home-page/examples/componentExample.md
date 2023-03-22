```typescript
import { render } from "preact-render-to-string";

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

export const TeamList = function({ team }: Props): string {
    return render(
        <ul>
            {team.map(member => {
                return <li>
                    <span>
                        <a href={formatHref(member)}>{formatName(member)}</a>
                    </span>
                </li>;
            })}
        </ul>
    );
};
```
