 function dog (word) {
    let initialWord = ""
    for(let i = 0; i < word.length; i++) {
        let tempChar = word[i].charCodeAt(0);
        if( (tempChar >= 65 && tempChar <= 90) || (tempChar >= 97 && tempChar <= 122) || (tempChar >= 48 && tempChar <= 57)) {
            initialWord += word[i]
        }
    }
    middleWord = initialWord.toLowerCase()
    let finalWord = ""
    for(let i = middleWord.length-1; i >= 0; i--) {
        if(i === 0) {
            finalWord+=middleWord[i].toLowerCase()
        }

        else{
        finalWord+=middleWord[i]
        }
    }
    console.log(finalWord)
    if(middleWord == finalWord) {
        return true
    }
    else {
        return false
    }
};
console.log(dog("r3ace3car"))