let jsonData
let targetSpirit

function getJson() {
    // read local JSON file in javascript
    fetch("/cocktailbook/recipies.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            jsonData = data;
            return jsonData
        })
}



async function generateAllCards(data) {
    for (cocktail of data.Cocktails) {
        generateRecipeCard(cocktail)
    }
}

// function to clear all cards
function clearCards() {
    const gridContainer = document.querySelector(".columns");
    gridContainer.innerHTML = "";
}


// function to print the html of what is chosen in the navbar dropdown menu
function printHTML() {

    html = document.getElementsByClassName("navbar-dropdown")[0];

    for (i in html.childNodes) {
        text = html.childNodes[i].innerHTML
        if (text != undefined) {
            // remove spaces and \n from the text
            text = text.replace(/\s/g, '');
            console.log(text)
        }
    }
}

function generateRecipeCardBySpirit(spirit) {
    // clear all cards 
    clearCards()
    // filter the json data by spirit
    let filteredData = filterJsonBySpirit(spirit)
    // generate cards for the filtered data
    generateAllCards(filteredData)

}


function containsWord(targetWord, inputString) {
    const lowerTargetWord = targetWord.toLowerCase();
    const lowerInputString = inputString.toLowerCase();
    const words = lowerInputString.split(' ');
    const target = lowerTargetWord.split(' ');

    for (let i = 0; i < words.length; i++) {
        for (j = 0; j < target.length; j++) {
            if (words[i] === target[j]) {
                return true;
            }
        }
    }
    return false;
}

// function to filter the json data by spirit and return the filtered data in a new json object
function filterJsonBySpirit(spirit) {
    let filteredData = { "Cocktails": [] }
    console.log(spirit)
    if (spirit === "Rum") {
        for (cocktail of jsonData.Cocktails) {
            if (cocktail.Ingredients.some(ingredient => containsWord(spirit, ingredient.name))) {
                filteredData.Cocktails.push(cocktail)
            }
        }
    } else if (spirit === "Bourbon/Whiskey") {
        spirit = spirit.split("/");
        for (cocktail of jsonData.Cocktails) {
            if (cocktail.Ingredients.some(ingredient => containsWord(spirit[0], ingredient.name) || containsWord(spirit[1], ingredient.name))) {
                filteredData.Cocktails.push(cocktail)
            } 
        }
    } else if (spirit === "Liqueurs") {
        let spirits = ["Rum", "Bourbon", "Whiskey", "Vodka", "Gin", "Tequila"];
        for (cocktail of jsonData.Cocktails) {
            let shouldMake = true;
            for (sp of spirits) {
                if (cocktail.Ingredients.some(ingredient => containsWord(sp, ingredient.name))) {
                    shouldMake = false;
                }
            }
            if (shouldMake) {
                filteredData.Cocktails.push(cocktail)
            }
        }
    } else {
        for (cocktail of jsonData.Cocktails) {
            if (cocktail.Ingredients.some(ingredient => containsWord(spirit, ingredient.name))) {
                filteredData.Cocktails.push(cocktail)
            }
        }
    }
    return filteredData
}


function generateRecipeCard(recipe) {
    // create card container
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const figure = document.createElement('figure');
    figure.classList.add('image', 'is-square');
    const image = document.createElement('img');
    image.src = "../cocktailbook/" + recipe.Img;
    figure.appendChild(image);
    cardImage.appendChild(figure);

    // create card content container
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // create title element
    const title = document.createElement("h3");
    title.classList.add("title", "is-4");
    title.textContent = recipe.Title;
    cardContent.appendChild(title);

    // append card image and content to card container
    card.appendChild(cardImage);
    card.appendChild(cardContent);


    // wrap the entire card in an anchor tag
    let site = recipe.Title.replace(/ /g, '_');
    const anchor = document.createElement('a');
    anchor.classList.add("column", "is-one-third");
    anchor.href = `/cocktailbook/RecipeSites/${site}.html`;


    // get grid container and append card
    const gridContainer = document.querySelector(".columns");
    gridContainer.classList.add("is-multiline")
    // Add some padding to the right and left of the columns
    gridContainer.classList.add("is-variable", "is-3", "ml-3", "mr-3");


    gridContainer.appendChild(card);
    gridContainer.appendChild(anchor)
    anchor.appendChild(card);
}


async function isJsonLoaded(){
    while (!jsonData) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

async function runFunctions() {
    getJson()
    await isJsonLoaded()
}
runFunctions()
