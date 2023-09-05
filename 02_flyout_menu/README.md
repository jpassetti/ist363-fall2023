# IST 363 Advanced Web Design - Fall 2023

## 02 - Continue flyout menu development

### Objectives:
* Review the basics of JavaScript, specifically variables, methods and functions
* Learn how to create an animation with CSS and JavaScript
* Learn how to open and close the flyout menu
* Add more content and style to the flyout menu
* Use CSS variables to store colors

### Outline:
* Review the HTML/CSS/JS boilerplate and normalizing CSS
* Define JavaScript
* JS variables, methods and functions
* Debugging: `console.log();`
* CSS transition properties
* Add the logo image and nav items to the flyout menu
* Style those items with CSS layout properties like display, flex-direction, justify-content, align-items, etc.
* CSS variables
* Add the close button to the flyout menu

### Reading / Viewing:
* Read [CSS Transition Property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) by Mozilla Developer Network (MDN)

### Code Snippets
```css
:root {
    --starbucks-green: #006341;
}
.overlay {
    background-color: var(--starbucks-green);
    transition-property: all;
    transition-duration: .5s;
    transition-delay: 1.5s;
}
```

### Assignment(s)
1. End of class attendance: either 1.) zip your IST363 project folder and submit it on Blackboard/Assignments, or 2.) commit and push your project to Github and submit the URL of your Github repository on Blackboard/Assignments.

### Review Key Vocabulary
* Methods: getElementById, addEventListener, classList.add, classList.remove
* CSS transition properties
* CSS layout properties
* SVG: Scalable Vector Graphics
