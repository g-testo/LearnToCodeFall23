window.onload = () => {
    console.log("nav", navigator);
    console.log("loc",location);
    // location.reload();
    let submitBtn = document.getElementById("submit-btn");
    let closeBtn = document.getElementById("close-btn");

    let newWindow;

    submitBtn.onclick = ()=>{
        // setTimeout(()=>{
        newWindow = window.open("https://www.w3schools.com/js/js_htmldom.asp", "_self");
        // }, 2000);
    }
    closeBtn.onclick = ()=>{
        newWindow.close();
    }
};
