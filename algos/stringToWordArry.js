
const strtoWordArry = (str)=>{
    let result = [];
    let word = "";
    for(let i = 0; i< str.length; i++){
        if(str[i]!= " "){
            word += str[i]
            // console.log("word looking like this", word)
        }else{
            if(word.length >0){
                result.push(word)
            }
            word = ""
        }
    }
    console.log("word at end of loop", word)
    if(word.length>0){
        result.push(word)
    }
    console.log(result)
    return result

}




strtoWordArry("   Hello how is    it going?   ") // ["Hello", "how", "is", "it", "going?"]
strtoWordArry("    Lakers    in 5 though")






