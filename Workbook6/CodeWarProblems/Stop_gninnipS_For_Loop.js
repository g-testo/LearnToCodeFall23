function spinWords(string) {
    let words = [];

    let accumString = "";
    for(let i=0;i<string.length;i++){
        let char = string[i];
        let isLastChar = (i === string.length-1);
        if(char === " " || isLastChar){
            if(isLastChar){
                accumString += char;
            }
            words.push(accumString);
            accumString = "";
        } else {
            accumString += char;
        }
    }

    let processedWords = [];

    for(let word of words){
        if(word.length >= 5){
            let reversedWord = "";
            for(let letter of word){
                reversedWord = letter + reversedWord;
            }
            processedWords.push(reversedWord);
        } else {
            processedWords.push(word);
        }
    }

    let processedString = "";

    for(let i=0;i<processedWords.length;i++){
        processedString += processedWords[i];
        if(i !== processedWords.length-1){
            processedString += " ";
        }
    }

    return processedString;
}

let result = spinWords("Hey fellow warriors"); // , "Hey wollef sroirraw"
console.log(result);
