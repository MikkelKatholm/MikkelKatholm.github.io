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
 - 3 cl Club soda
    
Garnish: Lime wheel, Candied ginger

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
### Midori Sour
 - 1.5 oz Mezcal
 - 0.75 oz Midori
 - 0.5 oz Lemon juice
 - 0.5 oz Pineapple juice
 - 0.25 oz Simple syrup
 - 1 Egg white

Dry shake, shake with ice, strain into a chilled glass and garnish

---
### Fields forever by NotJustABartender
 - 1.5 oz Strawberry & lemongrass vodka
 - 0.75 oz Lemon juice
 - 0.75 Yuzu liqueur
 - 0.5 oz Ginger syrup
 - 1 dash Saline solution

Shake with ice, strain into a chilled glass and garnish
 #### Rapid infused strawberry & lemongrass vodka
  - 80 g Lemongrass
  - 120 g Strawberries
  - 500 g Vodka (37.5%)

Half the lemongrass lengthwise and cut the strawberries in small slices. Add the lemongrass and strawberries to a whipping siphon and add the vodka. Charge the siphon (0.5L) with a N2O cartridges and shake for 30 seconds. Let it sit for 1 hour and then release the pressure. Strain the vodka through a fine mesh strainer.

---
### PampleMousse
 - 1 oz Gin
 - 0.5 oz Acido adjusted grapefruit juice
 - 0.5 oz Simple syrup
 - 1 Egg white
 - (1 barspoon of campari)
 - Prosecco to top

 Shake with ice, strain into a chilled glass top with prosecco and garnish

 #### Acid adjusted grapefruit juice
  - 100 ml Grapefruit juice
  - 4 g Citric acid

Add the citric acid to the grapefruit juice and stir until it's dissolved.

---
### Enzoni
 - 1 oz Gin
 - 1 oz Campari
 - 0.75 oz Lemon juice
 - 0.5 oz Simple syrup
 - 5-6 Green grapes

Muddle the grapes, shake with ice, strain into a chilled glass and garnish

---
### Clarified Raspberry Buck
 - 480 ml whole milk
 - 480 ml Bourbon
 - 240 ml Lemon juice
 - 240 ml Raspberry syrup
 - 8 dashes Angostura bitters

Mix everything except the milk. Add the mix to the milk. Let sit. Strain through a coffee filter.

#### Ginger Earl Grey Foam
 - 1.5 oz Ginger syrup
 - 1.5 oz Earl grey tea
 - 1.5 oz Lemon juice
 - 1.5 oz Dry vermouth
 - 2 Egg whites gently beaten

Add everything to a whipping siphon and charge with a N2O cartridge. Shake, charge again, shake, store in the fridge for 30 min before use.

To serve add the clarified raspberry buck to a chilled glass and top with the ginger earl grey foam.

--- 
### Caprese
 - 90 ml whiskey
 - 3 oz Tomato water (blend and strain tomatoes) 
 - 0.5 oz LimeGrapefruit juice (1:1)
 - 1.5 oz basil syrup
 - 2 oz Whole milk

Mix everything except the milk. Add the mix to the milk. Let sit. Strain through a coffee filter. To serve add 105 ml to a mixing tin and throw it. Pour into a chilled glass and garnish with a basil leaf.

#### Basil syrip
 - 120 g sugar
 - 120 g water
 - 20 g basil

Add everything to a jar, sous vide @ 55C for 2h and then strain.

---
### Cigarettes after sex
 - 3-4 dashes of Tobacco bitters
 - 1.5 oz Mezcal
 - 0.75 Coffee Oloroso sherry
 - 0.5 oz Creme de cacao

Stir with ice, strain into a chilled Nick and Nora glass

#### Coffee oloroso sherry
 - 50 g spent coffee grounds (medium roast)
 - 500 ml Oloroso sherry

Sous @ 70C for 1h, strain through a coffee filter.

--- 
### Gin Sangria
 - 1.5 oz Hayman's Sloe Gin
 - 0.75 oz Sweet vermouth
 - 0.75 oz Port & Sherry reduction
 - 0.5 oz Vanilla cordial
 - 1 oz Lemon juice
 - 2 oz Orange juice

Shake with ice, strain into a chilled glass and garnish

--- 
### Queens Park Swizzle
 - 2 oz Rum
 - 0.75 oz Lime juice
 - 0.5 oz Rich demerara syrup
 - 8-10 Mint leaves
 - Angostura bitters

Muddle the mint leaves, add everything except the bitters to a glass and fill with crushed ice. Swizzle and top with more crushed ice. Add the bitters and garnish

---
### Summer at the Sea
 - 1 oz Grapefruit juice
 - 1 oz Lime juice
 - Handfull of Basil leaves
 - 2 dashes of orange flower water
 - 0.5 oz Honey syrup
 - 1.75 oz aged rum
 - 0.25 oz Menthe de Pastille

Shake with ice, double strain into a chilled glass and garnish with basil grapefruit and a smoking cinnamon stick

---
### Key Garden
 - 2 oz Rum
 - 0.75 oz Lime juice
 - 0.5 oz Simple syrup
 - 0.5 oz Elderflower liqueur
 - 3 Cucumber slices
 - 8 Mint leaves
 - Club soda

 Muddle the cucumber and mint leaves. Shake with ice, strain into a chilled glass and top with club soda. Garnish.

---
### The Tzatziki
 - 4 oz Gin
 - 1.5 oz Dry vermouth
 - 50 g full fat greek yogurt
 - 1 bunch of dill
 - 3 lemon peels
 - 4-5 cucumber slices
 - Ground black pepper (one twist)

 Mix everything, Stit, let sit for 1h, strain through a coffee filter. 

#### To serve
  - 2 oz Tzatziki
  - 0.5 oz Gin
  - 0.25 oz olive brine
  - 1 barspoon of Green Chartreuse
  - 1 lemon peel

Stir with ice and the lemon peel, strain into a chilled glass and garnish with a few drops of olive oil.