const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});



noMondays
    .then( response => console.log(response) )
    .catch( err => console.log(err) );





let x = {
    firstname = "bob",
    lastname = "marley"
}