let words = [
    ["quick", "lazy"],
    ["brown", "red", "grey"],
    ["fox", "dog"]

]



function allcombs(words){
    let result =[];
    function helper(comb, i){
        if(i==words.length){ //if we have a word from each of the sub arrays
            result.push(comb)
        }
        else{ //if we are still generating combination words --> comb looks like "", or "quick" or "quick brown"
            for(let j = 0; j< words[i].length; j++){
                helper(comb+ words[i][j] + " ", i+1)
            }

        }
    }
    helper("", 0)
    return result
}

console.log(allcombs(words))//["quick brown fox", "quick brown dog", "quick red fox" etc;]






// function decode(str){

// }

// decode("b3c4d3y2") //"bbbccccdddyy"



