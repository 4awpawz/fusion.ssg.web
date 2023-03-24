```typescript
interface TeamMember {
    name: {
        first: string,
        last: string
    },
    address: {
        street: string,
        apt: string,
        city: string,
        state: string,
        zip: number,
    }
}

interface Props {
    team: TeamMember[],
    index: number
}

export const TeamMember = function({ team, index }: Props): { content: unknown, title: string, htmlDocumentName: string } | undefined {
    if (index === team.length) return;
    const content = (
        <>
            <h2>{team[index].name.first} {team[index].name.last}</h2>
            <ul style="list-style: none">
                <li><span style="color: green">{team[index].address.city}, {team[index].address.state}</span></li>
            </ul>
        </>
    );
    const title = `${team[index].name.first} ${team[index].name.last}`;
    const htmlDocumentName = `${team[index].name.first}-${team[index].name.last}`;
    return { content, title, htmlDocumentName };
};
```
