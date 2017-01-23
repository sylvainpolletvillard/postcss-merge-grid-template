# PostCSS Merge Grid Template [![Build Status][ci-img]][ci]

[PostCSS] plugin to reduce grid templates declarations.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/sylvainpolletvillard/postcss-merge-grid-template.svg
[ci]:      https://travis-ci.org/sylvainpolletvillard/postcss-merge-grid-template

```css
#page {
    display: grid;
    width: 100%;
    height: 250px;
    grid-template-areas: "head head"
                         "nav  main"
                         "nav  foot";
    grid-template-rows: 50px 1fr 30px;
    grid-template-columns: 150px 1fr;
}
```

```css
#page {
    display: grid;
    width: 100%;
    height: 250px;
    grid-template: "a a" 50px "b c" 1fr "b d" 30px / 150px 1fr;
}
```

## Usage

```js
postcss([ require('postcss-merge-grid-template') ])
```

See [PostCSS] docs for examples for your environment.
