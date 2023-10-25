
window.onload = init;

function init(){
    let btn = document.getElementById("submitForm");
    btn.onclick = handleSubmitForm;

    function handleSubmitForm(){
        let date = document.getElementById("dateInput");
        let datePlaceholder = document.getElementById("datePlaceholder");
        let convertedDate = new Date(date.value);
        datePlaceholder.innerHTML = convertedDate.toLocaleDateString();
    }
}