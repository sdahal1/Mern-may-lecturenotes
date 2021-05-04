// const daysInAWeek = 7;

// var firstName = "Rob";

// //variable declared with var will be able to exist outside the scope of a block. Variables declared with "let", their scope is only within the block (like a loop)
// for(var i = 0; i<firstName.length; i++){
//     console.log(firstName[i])
// }



// console.log("********")
// console.log(i)




// // def bubblesort(arrInput):
// //     for j in range(0,len(arrInput), 1):
// //         for i in range(len(arrInput)-1-j):
// //             #if the value at current index is greaterr than value at next index, then its out of order and we swap
// //             if(arrInput[i]> arrInput[i+1]):
// //                 arrInput[i], arrInput[i+1] = arrInput[i+1], arrInput[i]

// //     print(arrInput)




// // bubblesort([4,7,2,3,1,9,8])

// function bubblesort(arrInput){
//     for(let j = 0 ; j<arrInput.length; j++){
//         for(let i = 0; i<arrInput.length-1-j; i++){
//             if(arrInput[i]>arrInput[i+1]){
//                 [arrInput[i], arrInput[i+1]] = [arrInput[i+1], arrInput[i]]
//             }
//         }
//     }
//     console.log(arrInput)
// }


// bubblesort([4,7,2,3,1,9,8])


//globally scoped
var beatles = ['Paul', 'George', 'John', 'Ringo'];


function printNames(names) {
    
  function actuallyPrintingNames() {
      
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }


    // console.log('name and index after loop is ' + name + ':' + index);
  }


  actuallyPrintingNames();
}


// printNames(beatles);

// console.log("*******", beatles)

// //globally scoped means its not defined inside a function or a loop/conditional



// const names  = ["Lebron", "Kyrie", "KD", "Jordan"];

// names[0] = "GOAT"
// console.log(names)


// console.log(namee);//This will print out undefined.

// function doSomething(){
//     console.log(pudding);// This will print out undefined.
//     for(let i = 0; i < 10; i++){
//         var pudding = "fruity pebbles";
//     }
// }

// var namee = "Mr. Nibbles";
// console.log(namee); // This will print out Mr. Nibbles.




dojo = "san jose";
console.log(dojo); //san jose
learn();
function learn() {
    console.log(dojo)
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);




console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);





