# IST 363 Advanced Web Design - Fall 2023

## 13 - BEM methodology and organizing the navigation

### Objectives:
* Review BEM methodology
* Implement styles for desktop, mobile, social and footer navigations.

### Outline:
* Use `.nav` as the block element
* Use `.nav__list` as the element for the list of navigation items
* Use `.nav__item` as the element for each navigation item
* Use `.nav__link` as the element for each navigation link
* Use `.nav--desktop` as the modifier for the desktop navigation
* Use `.nav--mobile` as the modifier for the mobile navigation
* Use `.nav--social` as the modifier for the social navigation
* Use `.nav--footer` as the modifier for the footer navigation


```scss
// /sass/components/_nav.scss

.nav {
  // block styles
  &__list {
    // element styles
  }
  &__item {
    // element styles
  }
  &__link {
    // element styles
  }
  &--desktop {
    // modifier styles
  }
  &--mobile {
    // modifier styles
  }
  &--social {
    // modifier styles
  }
  &--footer {
    // modifier styles
  }
}

```

### BEM Methodology

* BEM stands for Block, Element, Modifier
* It is a naming convention for CSS classes (not a rule, just a convention)
* It is a way to make your CSS classes more readable and understandable

#### Block

* A standalone entity that is meaningful on its own (e.g. .nav, .header, .footer)
* A block can be standalone or a part of a greater whole

#### Element

* A part of a block that has no standalone meaning (e.g. .nav__item, .nav__link)
* An element is always part of a block

#### Modifier

* A flag on a block or element (e.g. .nav--desktop, .nav__item--active)
* Use them to change appearance or behavior

#### Best practices

* Use only class names (not IDs, elements, etc.)
* Use lowercase and only letters, numbers, and dashes
* Use namespaces for blocks (e.g. .nav, .header, .footer)
* Use double underscores for elements (e.g. .nav__item, .nav__link)
* Use double dashes for modifiers (e.g. .nav--desktop, .nav__item--active)
* Use BEM for CSS classes only (not for JavaScript, etc.)
* Use BEM for reusable components (not for page-specific styles)

### Resources:

* [BEM Methodology](http://getbem.com/introduction/)
* [BEM 101](https://css-tricks.com/bem-101/)
* [BEM 101 - Video](https://www.youtube.com/watch?v=er1JEDuPbZQ)