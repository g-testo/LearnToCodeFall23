window.onload = () => {
    // let submitBtn = document.getElementById("submit-btn");
    // let closeBtn = document.getElementById("close-btn");
    // let newWindow;

    // submitBtn.onclick = ()=>{
    //     // setTimeout(()=>{
    //     newWindow = window.open("https://www.w3schools.com/js/js_htmldom.asp", "_self");
    //     // }, 2000);
    // }
    // closeBtn.onclick = ()=>{
    //     newWindow.close();
    // }

    // ***********

    let boxes = document.getElementsByClassName("box");

    for(let i=0;i<boxes.length;i++){
        console.log(boxes[i]);
        boxes[i].style.width = "100px";
        boxes[i].style.height = "100px";
        boxes[i].style.backgroundColor = "red";
    }

};
