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

    // .push
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    // .shift
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    // .unshift
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    // .pop
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

    // let numArr = [0, 9, 8, 7, 6, 5, 4, 3, 2];

    // numArr.push(1, 11);

    // console.log(numArr);

    // console.log(result);

    // Method Docs:
        // What are the inputs?
            // Acts upon: Array
            // Arguments: the value of the item(s) you want to add to the end of the array

        // What are the outputs? (What does it return?): the new length of the array

        // Does it change the original? (Is it destructive?): True


        // let oneToOneHundred = [1,2,3,4,5,6,7,8,...];
        // let countArr = [];
        // for(let i=1;i<1_000_001;i++){
        //     countArr.push(i);
        // }
        // console.log(countArr);

        // let normalWord = "bird";

        // let reversedWord = [];
        // for(let i = normalWord.length-1;i>=0;i--){
        //     reversedWord.push(normalWord[i]);
        // }

        // console.log(reversedWord.join(""));

        // let numArr = [9, 8, 7, 6, 5, 4, 3, 2];

        // let result = numArr.pop();

        // console.log(result);
        // console.log(numArr);

        // let numArr = [9, 8, 7, 6, 5, 4, 3, 2];

        // // let result = numArr.shift();

        // // console.log(result);
        // // console.log(numArr);

        // numArr.unshift(12, 11, 10);
        // numArr.pop();

        // console.log(numArr);

        //