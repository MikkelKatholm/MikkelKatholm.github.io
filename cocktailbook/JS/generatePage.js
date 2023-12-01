
let pageName = document.title
let jsonData

function getJson() {
    // read local JSON file in javascript
    fetch("../recipies.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            jsonData = data;
            return jsonData
        })
}


async function generateRecipePage(name) {
    while (!jsonData) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    let recipe = jsonData.Cocktails.find(cocktail => cocktail.Title === name);

    //Create a box for the recipe
    const columns = document.createElement('div');
    columns.classList.add('columns', "mt-1");
    const column = document.createElement('div');
    column.classList.add('column', "is-8", "is-centered", "is-clipped");
    const columnOffset1 = document.createElement('div');
    columnOffset1.classList.add('column', "is-2", "is-clipped");
    const columnOffset2 = document.createElement('div');
    columnOffset2.classList.add('column', "is-2", "is-clipped");


    //Create the box
    const box = document.createElement('div');
    box.classList.add('box', "m-1");


    //Inserts the title
    const headerTitle = document.createElement('h2');
    headerTitle.classList.add("subtitle", "is-4", "m-0");
    headerTitle.textContent = pageName;
    //make the title bold but not the units
    headerTitle.style.fontWeight = "bold";


    box.appendChild(headerTitle);
    //center the title
    headerTitle.style.textAlign = "center";

    //add a small line under the title
    const line = document.createElement('hr');
    box.appendChild(line);

    //Create a two colums for the image and the text
    const columnsForImageAndText = document.createElement('div');
    columnsForImageAndText.classList.add('columns');

    //Create a column for the image
    const columnForImage = document.createElement('div');
    columnForImage.classList.add('column', "is-6");

    //Create a column for the text
    const columnForText = document.createElement('div');
    columnForText.classList.add('column', "is-6");

    //Add the image to the column
    const divForImage = document.createElement('div');
    divForImage.classList.add('image', 'rounded-image', "image-container");
    divForImage.style.backgroundImage = "url('" + recipe.Img + "')";
    columnForImage.appendChild(divForImage);

    //Add the text to the column
    //Fix the if statement when the json file is updated
    let dummytext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "
    if (recipe.About != undefined) {
        dummytext = "";
        for (const paragraph of recipe.About) {
            dummytext += paragraph + "<br><br>";
        }
    }
    const text = document.createElement('p');
    text.classList.add("m-2", "mt-0");
    text.innerHTML = dummytext; //REMOVE
    //make the text bigger
    text.style.fontSize = "18px";
    //make the text thicker but not bold
    text.style.fontWeight = "500";


    columnForText.appendChild(text);

    //Add the columns to the box
    columnsForImageAndText.appendChild(columnForImage);
    columnsForImageAndText.appendChild(columnForText);
    box.appendChild(columnsForImageAndText);

    //Add a box for the ingredients below the image and text
    const boxForIngredients = document.createElement('div');
    boxForIngredients.classList.add('box', "m-1");
    box.appendChild(boxForIngredients);

    //Divide the box into two columns for the ingredients and the instructions
    const columnsForIngredientsAndInstructions = document.createElement('div');
    columnsForIngredientsAndInstructions.classList.add('columns');


    secondHeader = document.createElement('div');


    secondHeaderName = document.createElement('h3');
    secondHeaderName.classList.add("subtitle", "is-4", "mb-0");
    secondHeaderName.innerHTML = pageName
    secondHeaderName.style.textAlign = "center";
    //add small line under the title
    const line4 = document.createElement('hr');
    //make the line have less margin
    line4.classList.add("mt-1", "mb-4");
    secondHeaderName.appendChild(line4);

    columnsforTags = document.createElement('div');
    columnsforTags.classList.add('columns', "is-centered", "mb-4");
    columnsforTags.style.textAlign = "center";


    let unitsAndCalories = calculateCocktailInfo(recipe)

    Tags = ["Units: " + unitsAndCalories[0], "Calories: " + unitsAndCalories[1], "Volume: " + unitsAndCalories[2] + " cl", "Cost: " + unitsAndCalories[3] + " kr"];
    for (tag of Tags) {
        tagDiv = document.createElement('div');
        tagDiv.classList.add('tag', "is-rounded", "m-1");
        tagDiv.textContent = tag;
        //make the tag bigger
        tagDiv.style.fontSize = "15px";
        columnsforTags.appendChild(tagDiv);
    }
    secondHeaderName.appendChild(columnsforTags);
    secondHeader.appendChild(secondHeaderName);
    boxForIngredients.appendChild(secondHeader);



    //Create a column for the ingredients
    const columnForIngredients = document.createElement('div');
    columnForIngredients.classList.add('column', "is-6");

    //Create a column for the instructions
    const columnForInstructions = document.createElement('div');
    columnForInstructions.classList.add('column', "is-6");

    //Add the ingredients to the column
    const ingredientsTitle = document.createElement('h2');
    ingredientsTitle.classList.add("subtitle", "is-4", "mb-0");
    ingredientsTitle.textContent = 'Ingredients';
    columnForIngredients.appendChild(ingredientsTitle);
    //add a small line under the title
    const line2 = document.createElement('hr');
    //make the line have less margin
    line2.classList.add("mt-1", "mb-1");
    columnForIngredients.appendChild(line2);


    const ingredientsList = document.createElement('ul');
    for (const ingredient of recipe.Ingredients) {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient.quantity + " " + ingredient.unit + " " + ingredient.name;

        ingredientsList.appendChild(listItem);
        //////Test//////
        //Link to a subpage for the ingredient//
        if (ingredient.link != undefined) {
            let link = document.createElement('a');
            link.href = 'Ingredients/' + ingredient.link;
            ingredientsList.appendChild(link);
            link.appendChild(listItem);
        }

    }

    const GarnishTitle = document.createElement('h2');
    GarnishTitle.classList.add("subtitle", "is-5", "mb-0");
    GarnishTitle.textContent = 'Garnish';

    const garnishList = document.createElement('ul');
    for (const garnish of recipe.Garnish) {
        const garnishItem = document.createElement('li');
        garnishItem.textContent = garnish
        garnishList.appendChild(garnishItem);
    }


    //Add the instructions to the column
    const instructionsTitle = document.createElement('h2');
    instructionsTitle.classList.add("subtitle", "is-4", "mb-0");
    instructionsTitle.textContent = 'Instructions';
    columnForInstructions.appendChild(instructionsTitle);
    //add a small line under the title
    const line3 = document.createElement('hr');
    //make the line have less margin
    line3.classList.add("mt-1", "mb-1");
    columnForInstructions.appendChild(line3);


    const instructionsList = document.createElement('ol');
    instructionsList.style.paddingLeft = "1rem";
    for (const instruction of recipe.HowTo) {
        const listItem = document.createElement('li');
        listItem.textContent = instruction;
        instructionsList.appendChild(listItem);
    }

    //Add the columns to the box
    columnForIngredients.appendChild(ingredientsList);
    columnForIngredients.appendChild(GarnishTitle);
    columnForIngredients.appendChild(garnishList);
    columnsForIngredientsAndInstructions.appendChild(columnForIngredients);
    columnForInstructions.appendChild(instructionsList);
    columnsForIngredientsAndInstructions.appendChild(columnForInstructions);
    boxForIngredients.appendChild(columnsForIngredientsAndInstructions);

    column.appendChild(box);

    columns.appendChild(columnOffset1);
    columns.appendChild(column);
    columns.appendChild(columnOffset2);

    const recipeDiv = document.getElementById('recipesDiv');
    recipeDiv.appendChild(columns);
    recipeDiv.style.backgroundColor = "#f5f5f5";
}

//Calculate the units, calories and volume of the cocktail
function calculateCocktailInfo(Cocktail) {
    let units = 0; calories = 0; volume = 0; cost = 0;
    let ingredients = jsonData.IngredientsInfo;

    for (const ing of Cocktail.Ingredients) {
        //Get the unit and quantity of the ingredient
        let unit = ing.unit;
        let quantity = ing.quantity;
        let cocktailIng = ingredients.find(ingredient => ingredient.Name.toLowerCase() === ing.name.toLowerCase());

        if(cocktailIng == undefined){
            console.log(ing.name + " is not in the database");
            continue;
        }

        if (unit == "cl") {
            units += ((quantity * 10) * (cocktailIng.Abv / 100));
            calories += (cocktailIng.Calories * (quantity * 0.1))
            volume += quantity;
            cost += (cocktailIng.Cost * quantity/10);

        } else if (unit == "whole") {
            calories += (cocktailIng.Calories * (quantity * 0.1))
            volume += 3;
            cost += cocktailIng.Cost;
        
        } else if (unit == "scoops") {
            calories += (cocktailIng.Calories * quantity/2)
            volume += quantity*10;
            cost += (cocktailIng.Cost * quantity);

        } else if (unit == "dash"){
            quantityIn100Ml = (quantity * 31/50)/100
            units += (quantityIn100Ml * (cocktailIng.Abv / 100));
            calories += (cocktailIng.Calories * quantityIn100Ml)
            volume += quantityIn100Ml/10;
            cost += cocktailIng.Cost * quantityIn100Ml;
        }
        console.log(ing.name + " " + cost)
    }

    //Account for the dilution
    let method = Cocktail.Method;
    if (method === "Shake" || method === "Shake, Top") {
        volume += 3;
    } else if (method === "Stir") {
        volume += 2;
    }
    
    //Convert to units
    units = ((units * 0.789) / 12)
    
    if (Cocktail.Serves != undefined) {
        units = units / Cocktail.Serves;
        calories = calories / Cocktail.Serves;
        volume = volume / Cocktail.Serves;
        cost = cost / Cocktail.Serves;
    }

    return [round(units, 1), round(calories, 0), round(volume, 0), round(cost, 1)];
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

async function runFunctions() {
    getJson()
    await generateRecipePage(pageName);
}
runFunctions()


