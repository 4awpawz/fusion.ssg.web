A template with content and front matter that contains a simple token property.

```html
---
tokens: {
    pageTitle: Greetings
}
---
<h1>Hello World</h1>
```

A page with a simple token and a template token.

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
