let jsonDataIngredients
let jsonData

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

function getJsonIngredients() {
    // read local JSON file in javascript
    fetch('/cocktailbook/Ingredients.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            jsonDataIngredients = data;
            return jsonDataIngredients
        })
}



async function generateAllCards() {
    while (!jsonDataIngredients) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    for (ing of jsonDataIngredients.Ingredi) {
        generateRecipeCard(ing)
    }
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
    image.src = "/cocktailbook/" + recipe.Img;
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
    anchor.href = `/cocktailbook/RecipeSites/Ingredients/Syrup/${site}.html`;
    

    // get grid container and append card
    const gridContainer = document.querySelector(".columns");
    gridContainer.classList.add("is-multiline")
    // Add some padding to the right and left of the columns
    gridContainer.classList.add("is-variable", "is-3", "ml-3", "mr-3");


    gridContainer.appendChild(card);
    gridContainer.appendChild(anchor)
    anchor.appendChild(card);
}



async function runFunctions() {
    await getJsonIngredients() 
    await getJson()
    await generateAllCards();
}
runFunctions()
