function dedupe(str){
    //we put each character from the og string into the temp array IF the character is not already in the array. Otherwise (else) if the character is in the array already, we looked in the array and found which index that character is located in, spliced it off, and THEN we put that character in the array at the end.
    let temp = [];
    for(let i = 0; i<str.length; i++){
        // console.log(str[i])
        //push the character into the temp array IF the character is not already in the array
        if(temp.includes(str[i])== false){
            temp.push(str[i])
        }else{
            //we need to look into the temp array to see where in the temp array we find the value
            for(let j =0; j<temp.length; j++){
                if(str[i] == temp[j]){
                    //j represent the index number of the temp array where we found the duplicate
                    temp.splice(j, 1)
                    break;
                }
            }
            temp.push(str[i])
            

            
        }
    }
    console.log(temp)
    let result = ""
    for(let i = 0; i< temp.length; i++){
        result += temp[i]
    }
    // temp.map(letter=>{
    //     result+= letter
    // })

    // for (x in temp){
    //     result += temp[x]
    // }

    console.log(result)
    return(result)

}

// "abcbsdcfc"
// ["a", "b", "s", "d", "f","c"]




dedupe("abcbsdcfc") 

dedupe("Snaps! Crackles! Pops!") //"SnCrackle Pops!"

// dedupe("national basketball") //"ion sketbal"


//HINTS
// let temp = [];
//array splice method to remove dupes from array



// ["i", "o", "n", " ", "s", "k", "e", "t", "b", "a", "l"  ]



