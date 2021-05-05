const arr = Object.freeze([1,2,3,4]);
// arr.push(300); // even though arr is declared with `const` we can still push new values into it 



const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);


// const newGroceryList = [...groceryList]
// newGroceryList.push({ "item": "eggs",           "haveIngredient": false })


// const newGroceryList = [...groceryList, { "item": "eggs", "haveIngredient": false }]

const newGroceryList = groceryList.concat([{ "item": "eggs", "haveIngredient": false }])

// console.log(newGroceryList)




var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                // 0           1       2       3           4
var citrus = fruits.slice(1, 4);

console.log(citrus)



