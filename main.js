/*This variable contains a document selector that selects the text input box 
in html, it then listens for each 
letter typed and then the variable userInput is now the typed letters instead. 
The record typing function is the function
that captures the typed letters and changes userInput into the typed letters*/

let userInput = document.querySelector("#drink-input").addEventListener("keyup", recordTyping)


function recordTyping(event) {
    if (event.keyCode = "keyup")
    userInput = event.target.value;
    }


/*This document selector is selecting the button 'Click to Search for Cocktails' 
when we click that button it runs the
fetchRecipe function which gets our JSON data that 
contains the recipe for the cocktail we entered into userInput*/

document.querySelector("#cocktail-button").addEventListener("click", fetchCocktails)


/*This variable selects the part of the HTML where we want the instructions 
to be displayed in the browser*/

const addInstructionsToHtml = document.querySelector("#instructions")

/*This function takes the variable above and allows us to add string (text) 
to the recipe list section of the HTML*/

function addingInstructions(string) {
addInstructionsToHtml.innerHTML = string
}


/*These variable selects the part of the HTML 
where we want the ingredients for the cocktail to be displayed in the browser*/

const addIngredient1 = document.querySelector("#ingredient1")
const addIngredient2 = document.querySelector("#ingredient2")
const addIngredient3 = document.querySelector("#ingredient3")
const addIngredient4 = document.querySelector("#ingredient4")
const addIngredient5 = document.querySelector("#ingredient5")

/*These functions take the variables above and allows us to add the 
ingredients text to the ingredients 
section of the HTML*/

function addTheIngredient1(string) {
addIngredient1.innerHTML = string
}  


function addTheIngredient2(string) {
    addIngredient2.innerHTML = string
    }  


    function addTheIngredient3(string) {
        addIngredient3.innerHTML = string
        }  


        function addTheIngredient4(string) {
            addIngredient4.innerHTML = string
            }  

            function addTheIngredient5(string) {
                addIngredient5.innerHTML = string
                }  


/*These variable selects the part of the HTML 
where we want the measures for the cocktail to be displayed in the browser*/
                
const addingMeasure1 = document.querySelector("#measure1")
const addingMeasure2 = document.querySelector("#measure2")
const addingMeasure3 = document.querySelector("#measure3")
const addingMeasure4 = document.querySelector("#measure4")
const addingMeasure5 = document.querySelector("#measure5")

/*These functions take the variables above and allows us to add the 
measures text to the measures
section of the HTML*/

function addMeasure1(string) {
    addingMeasure1.innerHTML = string
    }  
    
    
    function addMeasure2(string) {
        addingMeasure2.innerHTML = string
        }  
    
    
        function addMeasure3(string) {
            addingMeasure3.innerHTML = string
            }  
    
    
            function addMeasure4(string) {
                addingMeasure4.innerHTML = string
                }  
    
                function addMeasure5(string) {
                    addingMeasure5.innerHTML = string
                    }  


/*This function pulls down a cocktail, the label, the ingredients, the measures
and puts the recipe, ingredients, measures and the label as string (text) 
into HTML*/

async function fetchCocktails() {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`); 
let data = await response.json();
let convertObjectForInstruct = JSON.stringify(data.drinks[0].strInstructions)
let removeCurlyBracketsForInstruct = convertObjectForInstruct.replace(/[{}]/g, '');
let removeSquareBracketsForInstruct = removeCurlyBracketsForInstruct.replace(/[[\]]/g, '');
addingInstructions(removeSquareBracketsForInstruct)
let convertObjectForIngred1 = JSON.stringify(data.drinks[0].strIngredient1)
let removeCurlyBracketsForIngred1 = convertObjectForIngred1.replace(/[{}]/g, '');
let removeSquareBracketsForIngred1 = removeCurlyBracketsForIngred1.replace(/[[\]]/g, '');
addTheIngredient1(removeSquareBracketsForIngred1)
let convertObjectForIngred2 = JSON.stringify(data.drinks[0].strIngredient2)
let removeCurlyBracketsForIngred2 = convertObjectForIngred2.replace(/[{}]/g, '');
let removeSquareBracketsForIngred2 = removeCurlyBracketsForIngred2.replace(/[[\]]/g, '');
addTheIngredient2(removeSquareBracketsForIngred2)
let convertObjectForIngred3 = JSON.stringify(data.drinks[0].strIngredient3)
let removeCurlyBracketsForIngred3 = convertObjectForIngred3.replace(/[{}]/g, '');
let removeSquareBracketsForIngred3 = removeCurlyBracketsForIngred3.replace(/[[\]]/g, '');
addTheIngredient3(removeSquareBracketsForIngred3)
let convertObjectForIngred4 = JSON.stringify(data.drinks[0].strIngredient4)
let removeCurlyBracketsForIngred4 = convertObjectForIngred4.replace(/[{}]/g, '');
let removeSquareBracketsForIngred4 = removeCurlyBracketsForIngred4.replace(/[[\]]/g, '');
let removeNullforIngred4 = removeSquareBracketsForIngred4.replace(null, '')
addTheIngredient4(removeNullforIngred4)
let convertObjectForIngred5 = JSON.stringify(data.drinks[0].strIngredient5)
let removeCurlyBracketsForIngred5 = convertObjectForIngred5.replace(/[{}]/g, '');
let removeSquareBracketsForIngred5 = removeCurlyBracketsForIngred5.replace(/[[\]]/g, '');
let removeNullforIngred5 = removeSquareBracketsForIngred5.replace(null, '')
addTheIngredient5(removeNullforIngred5)
let convertObjectForMeasure1 = JSON.stringify(data.drinks[0].strMeasure1)
let removeCurlyBracketsForMeasure1 = convertObjectForMeasure1.replace(/[{}]/g, '');
let removeSquareBracketsForMeasure1 = removeCurlyBracketsForMeasure1.replace(/[[\]]/g, '');
addMeasure1(removeSquareBracketsForMeasure1)
let convertObjectForMeasure2 = JSON.stringify(data.drinks[0].strMeasure2)
let removeCurlyBracketsForMeasure2 = convertObjectForMeasure2.replace(/[{}]/g, '');
let removeSquareBracketsForMeasure2 = removeCurlyBracketsForMeasure2.replace(/[[\]]/g, '');
addMeasure2(removeSquareBracketsForMeasure2)
let convertObjectForMeasure3 = JSON.stringify(data.drinks[0].strMeasure3)
let removeCurlyBracketsForMeasure3 = convertObjectForMeasure3.replace(/[{}]/g, '');
let removeSquareBracketsForMeasure3 = removeCurlyBracketsForMeasure3.replace(/[[\]]/g, '');
addMeasure3(removeSquareBracketsForMeasure3)
let convertObjectForMeasure4 = JSON.stringify(data.drinks[0].strMeasure4)
let removeCurlyBracketsForMeasure4 = convertObjectForMeasure4.replace(/[{}]/g, '');
let removeSquareBracketsForMeasure4 = removeCurlyBracketsForMeasure4.replace(/[[\]]/g, '');
let removeNullforMeasure4 = removeSquareBracketsForMeasure4.replace(null, '')
addMeasure4(removeNullforMeasure4)
let convertObjectForMeasure5 = JSON.stringify(data.drinks[0].strMeasure5)
let removeCurlyBracketsForMeasure5 = convertObjectForMeasure5.replace(/[{}]/g, '');
let removeSquareBracketsForMeasure5 = removeCurlyBracketsForMeasure5.replace(/[[\]]/g, '');
let removeNullforMeasure5 = removeSquareBracketsForMeasure5.replace(null, '')
addMeasure5(removeNullforMeasure5)
}









