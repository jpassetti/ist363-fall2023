# IST 363 Advanced Web Design - Fall 2023

## 03 - Finish flyout menu development

### Objectives:
* Review the basics of JavaScript, specifically variables, methods and functions
* Review how to animate with CSS and JavaScript
* Review "compound selector" or "combined selector" `.overlay.active {}`
* Review CSS variables
* Add more content and style to the flyout menu
* Add fluid animations by staggering the transition-delay property
* Time permitting: add and style the header region

### Outline:
* Open our project in VSCode and re-examine the role of HTML, CSS and JS
* Use the browser inspector to observe the add class and remove class methods
* Re-examine the CSS transition properties
* Add a `<nav>` element to the overlay
* Style the nav items first with CSS layout properties, then add typography and color
* Add SVG icons as `<img>` elements and style them with the `.btn-ui` class

### Assets
* [SVG icons](https://fontawesome.com/)

### Reading / Viewing:
* Read [PNG vs SVG](https://www.adobe.com/creativecloud/file-types/image/comparison/png-vs-svg.html) by Adobe

### Code Snippets
```css
.nav-mobile ul li:nth-child(1) {
    transition-delay: .1s;
}
.nav-mobile ul li:nth-child(2) {
    transition-delay: .2s;
}
.nav-mobile ul li:nth-child(3) {
    transition-delay: .3s;
}
```

### Assignment(s)
At the end of class:
* commit and push your project to Github and submit the URL of your repository on Blackboard/Assignments.
```
git add .
git commit -m "attendance for 9/7/23. Finished flyout menu development."
git push
```

### Review Key Vocabulary
* CSS transition properties: transition-property, transition-duration, transition-delay
* CSS layout properties: display, flex-direction, justify-content, align-items
* SVG: Scalable Vector Graphics
