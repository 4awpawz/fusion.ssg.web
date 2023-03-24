The team.json data source.

```json
[
{"name": { "first": "John", "last": "Doe" }},
{"name": { "first": "Jane", "last": "Doe" }},
{"name": { "first": "Julia", "last": "Doe" }}
]
```

A template with a simple TeamMembers component tag that declares team.json as a data source.

```html
---
tokens: {
    pageTitle: Team Members
}
---
<h1>team</h1>
<p>Thanks to our team our rollout has been a huge success.</p>
<h2>contributors</h2>
<TeamMembers datasources="team.json" />
```

The simple TeamMembers component implementation.

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

function formatName(member: TeamMember): string {
    return `${member.name.first} ${member.name.last}`;
}

export const TeamMembers = function({ team }: Props): string {
    return (
        <ul>
            {team.map(member => {
                return <li>
                    <p><{formatName(member)}</p>
                </li>;
            })}
        </ul>
    );
};
```

The template's associated page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{pageTitle}</title>
</head>
<body>
    <main>
        {{template}}
    </main>
</body>
</html>
```

The generated page.

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
</head>
<body>
    <main>
        <h1>team</h1>
        <p>Thanks to our team our rollout has been a huge success.</p>
        <h2>contributors</h2>
        <ul>
            <li><p>John Doe</p></li>
            <li><p>Jane Doe</p></li>
            <li><p>Julia Doe</p></li>
        </ul>
    </main>
</body>
</html>
```
