# PostCSS Merge Grid Template [![Build Status][ci-img]][ci]

[PostCSS] plugin to reduce grid templates declarations.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/sylvainpolletvillard/postcss-merge-grid-template.svg
[ci]:      https://travis-ci.org/sylvainpolletvillard/postcss-merge-grid-template

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-merge-grid-template') ])
```

See [PostCSS] docs for examples for your environment.
