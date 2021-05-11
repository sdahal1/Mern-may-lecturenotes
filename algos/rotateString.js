// let x = "water jug"


// console.log(x.slice(x.length-3))


function rotateString(str, num){
    result = "";
    let rightside = str.slice(str.length-num)
    // console.log(rightside)
    let leftside = str.slice(0,str.length-num)
    // console.log(leftside)
    result += rightside + leftside
    // console.log(result)
    return result
}

// rotateString("water jug", 2) // "ugwater j"
// rotateString("water jug", 5) // "r jugwate"
// rotateString("water jug", 4) // " jugwater"


//bonus challenge
function isRotation(str1, str2){
    if(str1.length != str2.length){
        return false
    }else{
        for(let i = 0; i< str1.length; i++){
            // console.log(i)
            let rotatedStr1 = rotateString(str1, i)
            // console.log("ROTATED STR1 IS THIS-->", rotatedStr1)
            if(rotatedStr1==str2){
                return true
            }
        }
        return false
    }

}

console.log(isRotation("water jug", "ugwater j")) //true
console.log(isRotation("water jug", "jugwater ")) //true


// //1
// "gwater ju"

// //2
// "ugwater j"

// //3
// "jugwater "

// //4
// " jugwater"

// //5
// "r jugwate"

// //6
// "er jugwat"

// //7
// "ter jugwa"

// //8
// "ater jugw"

// //9
// "water jug"



