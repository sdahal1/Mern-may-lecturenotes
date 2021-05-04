const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal,,, ...restoftheanimals] = animals;

// console.log(firstAnimal)
// console.log(secondAnimal)
// console.log(restoftheanimals)


var spaceCrab = {
    name : "Obi WanCrabnobi",
    weapon: "Claw Light Saber",
    isWanted: false,
    spaceCraft : "Alluminum Falcon"
}


// const { name:obi , ...info } = spaceCrab;
// const {weapon:lightsaber, spaceCraft, ...otherInfo } = spaceCrab

const {name} = spaceCrab


// console.log(lightsaber)
// console.log(otherinfo)





//spread is to make a shallow copy of something like an object or an array
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


let personcopy = person;

console.log(personcopy)
personcopy.firstName= "Evil Bob";
console.log(personcopy)
console.log(person)

console.log(personcopy==person)



//using the spread operator to create an actual copy of an object without referencing the same location in memory as the original
let dreadfulrasta = {...person}
console.log(dreadfulrasta)
dreadfulrasta.firstName= "Evil Bob";
console.log(dreadfulrasta)
console.log(person)

console.log(dreadfulrasta.firstName==person.firstName)



const topMovies = ["Catch me if you can", "Gladiator", "Dont be a menace to southcentral while drinking your juice in the hood", "Lord of the rings"]

const piratedMovies = [...topMovies]

piratedMovies[0]= "Sandlot"

console.log(piratedMovies)
console.log(topMovies)

