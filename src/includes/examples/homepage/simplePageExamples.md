#### Template with token value declarations

```html
---
tokens: {
    pageTitle: Greetings,
    greeting: Hello World
}
---
```

#### Page using tokens

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
            <h1>{greeting}</h1>
        </main>
    </body>
</html>
```

#### Generated HTML document

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Greetings</title>
    </head>
    <body>
        <main>
            <h1>Hello World</h1>
        </main>
    </body>
</html>
```
