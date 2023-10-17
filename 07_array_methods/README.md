# IST 363 Advanced Web Design - Fall 2023

## 07 - Arrays methods

### Objectives:
* Review objects and arrays
* Review the forEach array method
* Learn how to write an arrow function
* Learn new array methods, specifically sort and filter
* Learn how to toggle display formats, specifically list and grid

### Outline:
* Review how array methods use functions
* Review forEach array method
* Learn sort method, first ascending, then descending
* Learn filter method, first by a sample price range
* Learn how to toggle display formats, specifically list and grid

### Reading / Viewing:
* Read [forEach array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) by Mozilla Developer Network (MDN)
* Read [sort array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) by Mozilla Developer Network (MDN)
* Read [filter array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) by Mozilla Developer Network (MDN)

### Arrow functions
Arrow functions are more concise and easier to read.

```js
// 1. Old function
function sayHello() {
  console.log('Hello');
};
// New arrow function
const sayHello = () => {
  console.log('Hello');
};
```


### Code Snippets
```js
// Warm up by learning the sort array method

// 1. Sort array method
const beatles = ['Paul', 'George', 'Ringo', 'John'];

// We create a copy of the original beatles using the spread operator ([...beatles]) to avoid modifying the original array.
const sortedBeatles = [...beatles].sort();

console.log(sortedBeatles); // ['George', 'John', 'Paul', 'Ringo']

// Sort the array in descending order and store in a new variable
const descendingBeatles = [...beatles].sort((a, b) => {
  // To sort in descending order, return a negative value
  // when a should come after b in the sorted order
  if (a > b) return -1;
  if (a < b) return 1;
  return 0; // a and b are equal
});

// 2. Filter array method
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
// Event listener on the select menu
const coffeePriceSelectMenu = document.getElementById('coffeePriceSelectMenu');
const coffeeListContainer = document.getElementById("coffeeList");

coffeePriceSelectMenu.addEventListener('change', (event) => {
  const selectedPriceRange = event.target.value;
  const filteredCoffeeItems = filterCoffeeItems(selectedPriceRange);
  displayCoffeeItems(filteredCoffeeItems);
});

const filterCoffeeItems = (priceRange) => {
   let filteredCoffeeItems = coffeeItems;

    if (priceRange !== "all") {
        // "2-3" becomes ["2","3"]
        // then we deconstruct the array into two variables
        const [minPrice, maxPrice] = priceRange.split("-");
        filteredCoffeeItems = coffeeItems.filter(coffee => {
            const price = coffee.price;
            return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
        });
    }

    // Display the filtered coffee items
    displayCoffeeItems(filteredCoffeeItems);
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
      const coffeeItem = document.createElement("article");
      coffeeItem.classList.add("coffee-item");

      // create an h2 element, add a class, add content, and append to the coffee item element
      const coffeeTitleElement = document.createElement("h2");
      coffeeTitleElement.classList.add("coffee-title");
      coffeeTitleElement.textContent = coffee.title;

      // ...repeat for other elements

      coffeeListContainer.appendChild(coffeeItemElement);
  });
}
```

### Assignment(s)
At the end of class:
* commit and push your project to Github and submit the URL of your repository on Blackboard/Assignments.

```
git add .
git commit -m "attendance for 9/21/23. Learning about array methods."
git push
```

Homework:
* I'll record a video about how to finish this on Friday. I'll email the class a link to the video. Complete the work by next class.


### Key questions
* What is an arrow function?
* What is the difference between forEach and map?
* What is the difference between forEach and sort?
* What is the difference between forEach and filter?
* What does parseFloat do?