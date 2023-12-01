let recipeDiv = document.getElementById("recipesDiv")
let pageName = document.title
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


async function generateRecipePage(name) {
    while (!jsonDataIngredients) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    let recipe = jsonDataIngredients.Ingredi.find(ingridient => ingridient.Title === name);

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
    divForImage.style.backgroundImage = "url('/cocktailbook/" + recipe.Img + "')";


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


    Tags = ["Total Time: " + recipe.Time, "Shelf lift: " + recipe.ShelfLife]
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
    ingredientsList.classList.add("left-aligned-numbers");  //REMOVE ????
    for (const ingredient of recipe.Ingredients) {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient.quantity + " " + ingredient.name;

        ingredientsList.appendChild(listItem);
        //////Test//////
        //Link to a subpage for the ingredient//
        if (ingredient.link != undefined) {
            let link = document.createElement('a');
            link.href = '/cocktailbook/Ingredients/' + ingredient.link;
            ingredientsList.appendChild(link);
            link.appendChild(listItem);
        }

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

async function runFunctions() {
    getJson()
    getJsonIngredients()
    await generateRecipePage(pageName);
    //await fixImageIfNotThere()
}
runFunctions()
