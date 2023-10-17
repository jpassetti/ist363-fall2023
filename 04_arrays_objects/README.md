# IST 363 Advanced Web Design - Fall 2023

## 04 - Arrays and objects

### Objectives:
* Review the basics of JavaScript, specifically variables, methods and functions
* Review how to animate with CSS and JavaScript
* Learn about arrays and objects in JavaScript

### Outline:
* Finish the menu with CSS layout properties, specifically display, flex-direction, justify-content and align-items
* Add transition delays to the flyout menu
* Target the nav items with the :nth-child() selector
* Start to display coffee menu items with variables, arrays and objects
* Utilize a loop to output the coffee menu items

### Assets
* [SVG icons](https://fontawesome.com/)

### Reading / Viewing:
* Read [PNG vs SVG](https://www.adobe.com/creativecloud/file-types/image/comparison/png-vs-svg.html) by Adobe
* Read [Compound Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) by Mozilla Developer Network (MDN)

### Code Snippets
```js
// basic variable
const coffeeTitle = "Mocha";

/// basic object
const coffee = {
  title: "Mocha",
  description: "A chocolatey coffee drink",
  price: 3.99,
  image: "mocha.jpg"
};

// basic array
const coffees = ["Mocha", "Latte", "Americano", "Cappuccino"];
```

### Assignment(s)
At the end of class:
* commit and push your project to Github and submit the URL of your repository on Blackboard/Assignments.
```
git add .
git commit -m "attendance for 9/12/23. Finished menu and started coffee menu items."
git push
```

### Key questions
* What does display:flex do?  flex-direction?  justify-content?  align-items?
* What does :nth-child() allow us to do?
* What's the difference between transition-delay and transition-duration?
* How is an object different from a basic variable?
* How is an array different from a basic variable?
* What JavaScript method allows you to loop through an array?