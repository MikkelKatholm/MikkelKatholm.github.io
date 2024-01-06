let pages; // array of all the file names in the folder RecipeSite


function searchBox() {
    let a, txtValue;
    let input = document.getElementById("searchBox");
    let filter = input.value.toUpperCase();
    let allPagesInOne = document.getElementById("allCards"); 

    //get all the children of the columns div 
    allPages = allPagesInOne.children;

    for (let i = 0; i < allPages.length; i++) {
        txtValue = allPages[i].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            allPages[i].style.display = "";
        } else {
            allPages[i].style.display = "none";
        }
    }
}


// Creats the event listener for the navbar burger (The menu on mobile)
function createEventListener() {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            console.log(target)
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });
}

async function clickButton() {
    while (document.getElementById("surpiceMe") === null) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    let surpiceMeButton = document.getElementById("surpiceMe");
    surpiceMeButton.onclick = function () {
        let randomCocktail = Math.floor(Math.random() * jsonData.Cocktails.length);
        let path = "/cocktailbook/RecipeSites/" + jsonData.Cocktails[randomCocktail].Title.replace(/ /g, '_') + '.html';

        location.href = path;
        console.log(path);
    };
}

//A function that checks if the navbar has been loaded and then adds the event listener
async function checkNavBar() {
    while (Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0).length === 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    createEventListener();
    clickButton();
    
}

checkNavBar()