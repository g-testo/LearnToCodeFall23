function spinWords(string) {
    let words = string.split(" ");
    let processedWords = words.map((word) => {
        if (word.length >= 5) {
            let chars = word.split("");
            chars.reverse();
            return chars.join("");
        } else {
            return word;
        }
    });
    return processedWords.join(" ");
}

// "Hey fellow warriors" => "Hey wollef sroirraw"
function spinWords(string) {
    // "Hey fellow warriors"
    console.log(string);

    // _Split_ string into an array of words
    let words = string.split(" ");

    // ["Hey", "fellow", "warriors"] => .split(" ")
    console.log(words);

    // Iterate _map_ through the array of words
    let processedWords = words.map((word) => {
        // "Hey" / "fellow" / "warriors"
        console.log(word);

        // Ask if the _length_ of the word is greater than 5 "Hey"
        if (word.length >= 5) {
            // _Split_ the word into an array of chars
            let chars = word.split("");

            // ["f", "e", "l", "l", "o", "w"] => .split("")
            console.log(chars);

            // Use _reverse_ to reverse the array
            chars.reverse();

            // ["w", "o", "l", "l", "e", "f"] => .reverse();
            console.log(chars);

            // _Join_ the string together
            let newWord = chars.join("");

            // (return) "wollef" => ".join("")"
            console.log(newWord);

            // return new string
            return newWord;
        } else {
            return word;
        }
    });

    // ["Hey", "wollef", "sroirraw"]
    console.log(processedWords);

    // _Join_ the array of words together again
    let processedWordsString = processedWords.join(" ");

    // (return) "Hey wollef sroirraw" => .join(" ")
    console.log(processedWordsString);

    // Return the new array
    return processedWordsString;
}

// let result1 = spinWords("Welcome"); //, "emocleW"
// console.log(result1);

let result2 = spinWords("Hey fellow warriors"); // , "Hey wollef sroirraw"
console.log(result2);

// let result3 = spinWords("Just kidding there is still one more"); //, "Just gniddik ereht is llits one more"
// console.log(result3);

// let song = "This is the song that never ends...";

// console.log(song.split(""));
