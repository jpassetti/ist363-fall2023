//console.log("coffeeApp!");

// 1. Create variables for the buttons
const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");
const coffeeList = document.getElementById("coffeeList");

const purgeList = () => {
    coffeeList.innerHTML = "";
}
const sortListByDirection = (direction, arr) => {
    //console.log({direction});
    const sortedListArr = [...arr].sort((a,b) => {
        if (direction === "ascending") {
            if (a.title < b.title) {
                return -1;
            }
        } else {
            if (a.title > b.title) {
                return -1;
            }
        }
    });
    return sortedListArr;
}
function buildTextElement(element, className, content) {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}
const displayList = (arr) => {
    arr.forEach((coffee) => {
        // 1 . deconstruct the coffee object
        const { title, price, description, image } = coffee;
    
        // 2. create the html elements
        const coffeeArticle = document.createElement("article");
        coffeeArticle.classList.add("coffee-item");
    
        const coffeeImage = document.createElement("img");
        coffeeImage.src = `images/${image.fileName}`;
        coffeeImage.width = image.width;
        coffeeImage.height = image.height;
        coffeeImage.alt = image.altText;
    
        const coffeeTitle = buildTextElement("h2", "coffee-title", title);
        const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);
    
        // const coffeeDescription = document.createElement("p");
        // coffeeDescription.classList.add("coffee-description");
        // coffeeDescription.textContent = description;
        const coffeeDescription = buildTextElement("p", "coffee-description", description);
    
        // 3. append the elements to the parent article
        coffeeArticle.appendChild(coffeeImage);
        coffeeArticle.appendChild(coffeeTitle);
        coffeeArticle.appendChild(coffeePrice);
        coffeeArticle.appendChild(coffeeDescription);
    
        // 4. append the article to the body
        coffeeList.appendChild(coffeeArticle);
    }); // end of coffees forEach method
} // displayList function end

// 2. Create event listeners for the buttons
ascendingBtn.addEventListener("click", function() {
    //console.log("ascending button has been clicked");
    purgeList();
    const sortedList = sortListByDirection("ascending", coffees);
    //console.log({sortedList});
    displayList(sortedList);
}); // end of ascendingBtn click event

descendingBtn.addEventListener("click", function() {
    //console.log("descending button has been clicked");
    purgeList();
    const sortedList = sortListByDirection("descending", coffees);
   // console.log({sortedList});
    displayList(sortedList);
}); // end of ascendingBtn click event

displayList(coffees);

// 3. Purge the coffee list

// 4. Sort the coffee list by direction

// 5. Loop through the sorted array and display the coffee list