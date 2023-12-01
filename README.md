# Cocktail book website for now


## Git
```
cd existing_repo
gitpush.bat
```
To recuce file sizes use
```	
cd image repo
for %i in (*.jpg) do ffmpeg -i "%~i" -y "%~i"
```
To remove metadata from all images in a folder
```
cd image repo
for %i in (*.jpg) do ffmpeg -i "%i" -map_metadata -1 -c copy -y "%i"
```


## Description
This is a cocktail cook/website based on some of the most popular cocktails in the world. The website will be a place where you can find the recipe for your favorite cocktail and also find new cocktails to try out.

## Add more recipes
In order to add more recipes to the website you need to add the recipe to the recipe.json file. The recipe.json file is located in the root of this project. The recipe.json file is a json file that contains all the cocktail recipes. In order to add recipes for ingredients you need to add the ingredient to the ingredients.json file. The ingredients.json file also located in the root of this project.

When adding a new recipe make sure to make a new html file in the `RecipeSite` folder with the corresponding name, you must also make sure to add an image to the `Image` folder


## Running
i'm currently using my personal github pages to host the website. You can find the website here: https://MikkelKatholm.github.io/CocktailBook/index.html

To run the webpage locally you need to clone the repository and then run the a servise like nodejs 'http-server' and then open the webpage on http://localhost:8080. 

Download nodejs here: https://nodejs.org/en/download/


## Project status
The project is currently in development and is not finished yet. The project is being developed by me. My girlfriend is helping me with design ideas and photography. The project is being developed in my spare time and is not a priority. 

## To do
 - Add more recipes
 - Add Ramoz Gin Fizz, Daquiri, Sidecar, Pimm's cup, Pisco sour, Irish coffe, 
 - Ret så når man går tilbage til oversigt, så skal den ikke gå til toppen af siden
 - Make it so the history go under the image if there is to much text


## Cocktails to try and add
    
### Downtown abbey
- 6 cl vodka
- 2 cl Liquorice syrup
- 4 cl lemon juice
- 2 cl Simple syrup
- 4 cl Passion fruit syrup
- 8 cl Prosecco

Garnish: Star anise, mint

---
### Mint Giulia
- 10 Large mint leaves
- 6 cl Floral gin
- 3 cl Lemon juice
- 3 cl Elderflower syrup

Garnish: Mint leaves

---
### Chilcano
 - 1 Strawberry
 - 2 cl Lime juice
 - 2 cl Ginger syrup
 - 5 cl Pisco
 - 3 cl Club soda (Sub for ginger beer???)
    
Garnish: Lime wheel, Candied ginger

---
### Oolong cordinal
- 28 grams oolong tea   7 grams per 250 ml
- 1 L water             250 ml
- 17.6 grams sugar      4.4 grams per 250 ml
- 14 grams citric acid  3.5 grams per 250 ml

Make the tea as you would normally do. Add the sugar and citric acid and stir until it's dissolved. Let it cool down and then bottle it.

---
### Pomergrante gin ann tonic perls
 - 3 g sodium alginate 
 - 230 ml pomergrante juice reduction
 - 50 ml pomergrante floral gin
 - tonic syrup to taste

Blend it all with a hand mixer, leave in the fridge for at least 4 hours or until the bubbles have disappeared.

 - 250 ml water (distilled / bottled)
 - 3 g calcium lactate

 Drip the pomergrante mix with a syringe into the water and let it sit for 2 minutes. Then rinse in water and put in a bowl with pomergante juice.

---
### Grannys garden
 - 1 part Apple juice
 - 1 part Ginger beer
 - Handfull of mint leaves

---
### Bath of Beauty
 - 2 oz Gin
 - ⁠0.75 oz Lemon juice
 - Heaped teaspoon raspberry conserve
 - ⁠Two drops grapefruit bitters
 - One egg white
 - Blood orange ⁠Italian soda

Dry shake and shake with ice. Strain into a chilled glass and top with blood orange soda. Garnish with 2-3 halved strawberries.

---
### Blue velvet
 - 45 ml Good coconut rum
 - 15 ml Velvet falernum
 - 23 ml Lime juice
 - 7.5 ml Blue Curaçao
 - egg white

---
### Saturn
 - 45 ml Gin
 - 15 ml Velvet falernum
 - 15 ml Lemon juice
 - 7.5 ml Passion fruit syrup
 - 15 ml Orgeat

---
### His Russian
 - 60 ml Cream-washed vodka
    - 120 ml Vodka
    - 10 ml Simple syrup
    - 6 dashes coffee bitters
    - 10 ml Lemon juice
    - 45 ml Cream
        - Mix all except cream, and then add the mix to the cream, let it sit in the fridge overnight and then strain through a coffee filter.
- Top with Kahlua foam
    - 1/2 sheet gelatin
    - 60 ml hot water
    - 150 ml Kahlua
    - 120 ml Coffee
        - Put the half of a gelatin sheet into cold water to soften it a bit. Squeeze out the water and place it in 60ml of hot water. Strain until it dissolves. Put the gelatin mixture in the fridge to solidify into the gel. Add coffee, Kahlúa and all of the ge into a blender and blend it to until it's very well incorporated. Add the mixture into the isi siphon and charge it with a N2O cartrige. Shake and place the charged siphon in the fridge to cool. And it's ready to up the Inverted White Russian.

---
### Chartreuse Swizzle
 - 1 1/4 oz Green Chartreuse
 - 1/2 oz Falernum
 - 1 oz Pineapple juice
 - 3/4 oz Lime juice
 
https://punchdrink.com/recipes/chartreuse-swizzle/

---
### Mocktail
 - 4.5 cl Elderflower syrup
 - 12 cl Pear juice
 - 6 cl Apple juice
 - 2 cl Lime juice
 - Handfull of mint leaves

---

- https://www.reddit.com/r/cocktails/comments/s75of4/marg_simpson/
- https://www.reddit.com/r/cocktails/comments/om2p5j/clear_mojito_with_clarified_mint_lime_cordial_and/
- https://www.reddit.com/r/cocktails/comments/j8we20/pomegranate_gin_and_tonic_pearls_inside_a_white/
- https://www.reddit.com/r/cocktails/comments/ik55ca/clarified_jungle_bird/
- https://craftandcocktails.co/2018/09/02/pineapple-clarified-milk-punch-how-to-clarify-cocktails/