# IST 363 Advanced Web Design - Fall 2023

## 08 - Filter methods

### Objectives:
* Learn how to use the filter array method

### Outline:
* Create an HTML select menu
* Create option elements
* Add an event listener to the select menu
* Create a variable to hold the selected value
* Create a function to filter the array
* Create a function to display the filtered array

### Reading / Viewing:
* Read [filter array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) by Mozilla Developer Network (MDN)

### Code Snippets
```js
// Filter array method
// This method works by looping through an array, determining if each item matches a condition, and returning a new array with the items that match the condition.
// In this example, we'll filter the array to only include coffees that cost between $2 and $3.
const filteredCoffeeItems = coffees.filter((coffee) => {
  const { price } = coffee;
  return price >= 2 && price <= 3;
});

console.log(filteredCoffeeItems);
```

### Filter by price ranges

This interaction requires a little more work.  

We'll need these items:
- Select menu in HTML
- Option elements in HTML
- Event listener on the select menu
- Function to filter the array
- Function to display the filtered array

```html
<!-- Label -->
<label for="coffeePriceSelectMenu">Filter by price</label>
<!-- Select menu -->
<select id="coffeePriceSelectMenu">
  <option value="all">All</option>
  <option value="2-3">$2 - $3</option>
  <option value="3-4">$3 - $4</option>
  <option value="4-5">$4 - $5</option>
</select>

<!-- empty div element to hold coffee items -->
<div id="coffeeList"></div>
```

```js
// Get the select menu
const coffeePriceSelectMenu = document.getElementById('coffeePriceSelectMenu');

// Event listener on the select menu
coffeePriceSelectMenu.addEventListener("change", (event) => {
  const selectedPriceRange = event.target.value;
  const filteredCoffeeItems = filterCoffeeItems(selectedPriceRange);
  displayCoffeeItems(filteredCoffeeItems);
});

const filterCoffeeItems = (priceRange) => {
   let filteredCoffeeItems = coffeeItems;

    // If the price range is NOT "all", filter the coffee items
    if (priceRange !== "all") {
        // the split method takes a string and converts it into an array
        // "2-3" becomes ["2","3"]
        // then we deconstruct the array into two variables
        const [minPrice, maxPrice] = priceRange.split("-");
        filteredCoffeeItems = coffeeItems.filter(coffee => {
            const { price } = coffee;
            return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
        });
    }

    // Return the filtered coffee items
    return filteredCoffeeItems;
}
const displayCoffeeItems = (coffeeItems) => {
  // Clear the coffee list container
  coffeeListContainer.innerHTML = "";

  // If there are no coffee items, display a message
  if (coffeeItems.length === 0) {
      coffeeListContainer.innerHTML = "No coffee items match the selected price range.";
      return;
  }

  // Loop through the coffees, construct HTML, and append the coffee item to the coffee list container
  coffeeItems.forEach(coffee => {
      const { title } = coffee; // add more properties to decontruct as needed
      const coffeeItem = document.createElement("article");
      coffeeItem.classList.add("coffee-item");

      // create an h2 element, add a class, add content, and append to the coffee item element
      const coffeeTitleElement = document.createElement("h2");
      coffeeTitleElement.classList.add("coffee-title");
      coffeeTitleElement.textContent = coffee.title;

      // ...repeat for other elements

      coffeeList.appendChild(coffeeItemElement);
  });
}
```

### Assignment(s)
At the end of class:
* commit and push your project to Github and submit the URL of your repository on Blackboard/Assignments.

```
git add .
git commit -m "attendance for 9/26/23. Implemented the filter array method."
git push
```

### Key questions to ask yourself
* How does the filter array method work?  What does it return?
* What's the different between parseInt and parseFloat?
* What does the split method do?