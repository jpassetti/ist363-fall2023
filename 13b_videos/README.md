# IST 363 Advanced Web Design - Fall 2023

## 07b - Videos

### Video 1: Navigation and buttons

[Watch the video](https://youtu.be/PzoHuC0OXnU)

* Add `.nav--utility` around the `Find A Store`, `Sign In` and `Join Now` buttons.
* Add `.btn--primary`, `.btn--secondary`, `.btn--text` to the buttons.
* Add `.btn--icon`, `.btn--icon--left`, `.btn--icon--right` to the `.btn partial`, and use `.btn--icon` and `.btn--icon--left` on the `Find A Store` button.
* Add "SoDo Sans" font to the website, specifically to the buttons.
* Add SVG icons from Font Awesome to the buttons, specifically location-dot, facebook, twitter and instagram.
* Remember to add the icons as SVG elements, not as an IMG element, for more control over the icons.
* Add responsive styles to the .nav--utility so that it turns off on mobile and tablet, and turns on on desktop.
* To style the .nav--social links, we'll utilize width, height, background-color, border-radius, and padding to make the links look like circles.
* Re-apply styles back into .nav--mobile.
* Clean up remaining styles between header and footer regions, as well as the overlay, too.


### Video 2: Showcase

* Add a new section (and block element) called `.showcase`.
* Add the elements to the showcase, including `.showcase__image`, `.showcase__text`, `.showcase__title` and `.showcase__description`.
* Add a new partial called `_showcase.scss` and style the showcase elements.
* Add responsive styles, allowing the `.showcase__text` to switch between position: absolute and position: relative. This will allow the text to be on top of the image on desktop, and below the image on tablet and mobile.

### Video 3: Grid

* Add a new section (and block element) called `.collection`.
* Add the elements to the collection, including `.collection__item`, `.collection__item__image` and `.collection__item__title`.
* Add a new partial called `_collection.scss` and style the collection elements.
* Add `display:grid` to the collection, allowing the items to be displayed in a grid format.
* Add `grid-template-columns` to the collection, allowing the items to be displayed in a grid format.
* Why use display: grid and not display: flex?  I'll explain the differences between the two.