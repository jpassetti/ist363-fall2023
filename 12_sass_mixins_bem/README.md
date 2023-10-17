# IST 363 Advanced Web Design - Fall 2023

## 10 - SASS mixin

### Objectives:
* Review and learn more on how to use a SASS mixin for responsive web design
* Learn BEM methodology for naming CSS classes

### Outline:
* Copy/paste the breakpoint mixin from Blackboard into your /sass/abstracts/_mixins.scss file.
* Use it like the code snippet below.

```scss
// /sass/base/_typography.scss
// not real code, just an example

@use '../abstracts/mixins';

h1 {
  font-family: Arial;
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  @include mixins.breakpoint(sm) {
    font-size: 3rem;
  }
  @include mixins.breakpoint(md) {
    font-size: 3.5rem;
  }
  @include mixins.breakpoint(lg) {
    font-size: 4rem;
    font-weight: normal; // you can style the font differently at different breakpoints
    color: violet;
  }
}

```

### BEM Methodology

* BEM stands for Block, Element, Modifier
* It is a naming convention for CSS classes (not a rule, just a convention)
* It is a way to make your CSS classes more readable and understandable

#### Block

* A block is a standalone component that is meaningful on its own
* It is a parent component that can contain other elements
* It is a reusable component that can be used in different places on the page

```html
<!-- Block -->
<div class="card">
  <h2 class="card__title">Card Title</h2>
  <p class="card__text">Card Text</p>
</div>
```

#### Element

* An element is a part of a block that has no standalone meaning
* It is a child component that is part of a block
* It is a component that is only meaningful when used inside a block

```html
<!-- Block -->
<div class="card">
  <!-- Element -->
  <h2 class="card__title">Card Title</h2>
  <!-- Element -->
  <p class="card__text">Card Text</p>
</div>
```

#### Modifier

* A modifier is a flag on a block or element that changes the appearance or behavior
* It is a component that is used to modify the appearance or behavior of a block or element

```html
<!-- Block -->
<div class="card card--featured">
  <h2 class="card__title">Card Title</h2>
  <p class="card__text">Card Text</p>
</div>
```

### How to write BEM in SASS

```scss
.card {
  // block styles
  &__title {
    // element styles
  }
  &__text {
    // element styles
  }
  &--featured {
    // modifier styles
  }
}
```

### Resources:

* [BEM Methodology](http://getbem.com/introduction/)
* [BEM 101](https://css-tricks.com/bem-101/)
* [BEM 101 - Video](https://www.youtube.com/watch?v=er1JEDuPbZQ)