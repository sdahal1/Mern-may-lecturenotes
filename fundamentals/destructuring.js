// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623,
//     favoriteSongs: ["buffalo soldier", "three little birds"]
// };

// const person2 = { 
//     firstName: 'Damial', 
//     lastName: 'Lillard', 
//     email: 'd@lill.com', 
//     password: 'letsgetit123!', 
//     username: 'barley', 
//     createdAt: 1543945177623,
//     favoriteSongs: ["buffalo soldier", "three little birds"]
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// //old way
// // console.log(person.firstName)
// // console.log(person.lastName)
// // console.log(person.email)
// // console.log(person.password)

// //oldway

// // console.log(animals[1])
// // console.log(animals[3])

// const [,,animal3, , wingedcreature] = animals;

// console.log(animal3)
// console.log(wingedcreature)






// const {firstName:bobsFirstname, email: bobsemail,lastName: bobslastname, password: bobspassword} = person;


// const {firstName, email,lastName, password} = person2;


// console.log(firstName)
// console.log(lastName)
// console.log(email)
// console.log(password)

// console.log(bobsFirstname)





const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };


// const {addresses:[{city:city1}, {city:city2}]} = person;

// console.log(city1);
// console.log(city2)




const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first == second);
console.log(first == third);