const groceries = ["pearl onions", "cremini mushrooms", "thyme"];

const modifiedfood = groceries.map(food=>food + "!")

console.log(modifiedfood)


// function doesIthaveOtho(someString){
//     return someString.includes("o")
// }

// let oFoods = groceries.filter(doesIthaveOtho)


let oFoods2 = groceries.filter(someString => someString.includes("o") )

console.log(oFoods)




console.log("potato".includes("p"))


// const groceryList = groceries.map( item => `<li>${item}</li>` );