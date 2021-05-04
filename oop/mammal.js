class Mammal{
    constructor(species, weight){
        this.species = species;
        this.weight = weight;
        this.energy = 100;
    }

    eat(numCalories){
        // if(numCalories>= 100){
        //     this.energy += 100
        // }else{
        //     this.energy += numCalories
        // }
        numCalories>=100? this.energy += 100 : this.energy += numCalories
    }
    attack(otherAnimal){
        otherAnimal.energy -= 100
        this.energy -= 5
    }


}

class Dog extends Mammal{
    constructor(weight, breed, name){
        super("Canine", weight)
        this.breed = breed;
        this.name = name;
    }

    wagTail(){
        this.energy +=1000
    }


}


class Cat extends Mammal{
    constructor(weight, breed, name, isEvil){
        super("Feline", weight)
        this.breed = breed;
        this.name = name;
        this.isEvil = isEvil
    }

    scratch(){
        console.log("MEOWWWWWW THO")
        this.energy -= 10
    }

 
}


const d1 = new Dog(25,"Jack Russell", "Junior")

const c1 = new Cat(25,"Calico", "Lampkins", true)

// d1.attack(c1)
// d1.wagTail()
// c1.scratch()

// c1.attack(d1)
console.log(c1)
console.log(d1)
// d1.eat(1000)
// console.log(d1)





// const m1  = new Mammal("dog", "25")
// const m2  = new Mammal("cat", "15")
// const m3  = new Mammal("cat", "30")


// m1.eat(1000)
// m2.eat(10)
// console.log(m1)
// console.log(m2)
// console.log(m3)







// class Mammal:
//     def __init__(self, name, weight){
//         self.name = name;
//         self.weight = weight;
//     }