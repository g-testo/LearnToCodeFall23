// Most common helper methods

// ****************************************

// Arrays

// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Methods: 

// let numArr = [9, 8, 7, 6, 5, 4, 3, 2];
// let strArr = ["Lions", "Tigers", "And", "Bears"];

// .forEach

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// What are the inputs?
// Acts upon: Array 
// Arguments: Callback function

// What are the outputs? (What does it return?) : undefined

// Does it change the original? (Is it destructive?) No

// numArr.forEach((num)=>{
//     console.log(num);
// })

// strArr.forEach((str)=>{
//     console.log(str);
// })

// .map

    // What are the inputs?
        // Acts upon: Array
        // Arguments: Callback Function

    // What are the outputs? (What does it return?): (new, modified) Array

    // Does it change the original? (Is it destructive?): False

    // let numArr = [9, 8, 7, 6, 5, 4, 3, 2]; // [ "$9.00", "$8.00" ...]
    // let strArr = ["Lions", "Tigers", "And", "Bears"]; // ["LIONS!", "TIGERS!", "AND!", "BEARS!"]


    // let mappedStrArr = strArr.map((str)=>{
    //     return str.toUpperCase() + "!";
    // })

    // console.log(mappedStrArr)

    // let mappedNumArr = numArr.map((num)=>{
    //     return "$" + num + ".00";
    // })
    // console.log(mappedNumArr);

// .find

    // Method Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    // let numArr = [9, 8, 7, 6, 5, 4, 3, 2];
    // What are the inputs?
        // Acts upon: Array
        // Arguments: Callback Function

    // What are the outputs? (What does it return?): First elements it finds

    // Does it change the original? (Is it destructive?): False

    // Falsey: 0, "", NaN, null, undefined, false, 
    // 1 % 2 equals 1
    // 2 % 2 equals 0
    // 3 % 2 equals 1
    // 4 % 2 equals 0
    // 5 % 2 equals 1
    // 6 % 2 equals 0

    // let firstEvenNum = numArr.find((num)=>{
    //     return num % 2 === 0;
    // })

    // console.log(firstEvenNum);

    // let strArr = ["Lions", "Tigers", "And", "Bears"];

    // let firstStrThatStartsWithB = strArr.find((str)=>{
    //     // Find the first character in the string
    //     let firstLetter = str[0].toLowerCase(); // str.charAt(0);

    //     console.log(firstLetter)

    //     // Ask if the first character is "b", case insensative and then return true
    //     return firstLetter === "b";
    // })

    // console.log(firstStrThatStartsWithB);