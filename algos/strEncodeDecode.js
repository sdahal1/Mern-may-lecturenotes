function encodeStr(str){
    let count = 1;
    let output = "";
    let outputLetter = str[0]
    for(let i=0; i<str.length-1; i++){
        if(str[i] == str[i+1]){
            count++
        }
        else{
            output += `${outputLetter}${count}`
            count = 1
            outputLetter=str[i+1]
        }
    }
    output += `${outputLetter}${count}`
    console.log(output)

}



encodeStr("aaaabbccdeee") //"a4b2c2d1e1"


//count = 1->2->3->4->1->2->1
//output= "a4b2"
//outputLetter = "c"
//i=0->1->2->3->4->5

// encodeStr("bbbccccdddyy") //"b3c4d3y2"






// function decode(str){

// }

// decode("b3c4d3y2") //"bbbccccdddyy"
