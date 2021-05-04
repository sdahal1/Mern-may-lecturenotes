// let accountbalance = 100;

// // const withdrawMula = amount =>{
// //     if(accountbalance> amount){
// //         console.log("withdrawing some mula");
// //     } else{
// //         console.log("insufficent funds")
// //     }
// // }

// const withdrawMula = amount => accountbalance>amount? console.log("withdrawing mula") : console.log('insufficient funds')



// withdrawMula(10)


let person = {
    name: 'tony',
    age: 20,
    driver: null,
    driversPermit: false
  };

// if(person.age>=16){
//     if(person.driversPermit==true){
//         person.driver = true
//     }else{
//         //person does not have drivers permit
//         person.drive = false
//     }
// }else{
//     //person not of age
//     person.drive = false
// }

person.age>=16?
    person.driversPermit==true?
        person.driver= true :
        person.driver = false
    :
    person.drive = false