window.onload = function(){
    let selectEl = document.getElementById("dropdown");

    let numbers = [
        {
            displayText: "One",
            value: "1"
        },{
            displayText: "Two",
            value: "2"
        },{
            displayText: "Three",
            value: "3"
        },{
            displayText: "Four",
            value: "4"
        },{
            displayText: "Five",
            value: "5"
        },{
            displayText: "Six",
            value: "6"
        },{
            displayText: "Seven",
            value: "7"
        },{
            displayText: "Eight",
            value: "8"
        },{
            displayText: "Nine",
            value: "9"
        },{
            displayText: "Zero",
            value: "0"
        }
    ]

    for(let number of numbers){
        let optionEl = new Option(number.displayText, number.value);
        selectEl.appendChild(optionEl);
    }
}