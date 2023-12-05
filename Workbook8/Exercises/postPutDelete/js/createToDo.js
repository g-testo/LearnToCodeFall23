window.onload = () => {
    let createToDoFormEl = document.getElementById("create-todo-form");
    createToDoFormEl.onsubmit = (event) => {
        event.preventDefault();
        let responseMessageEl = document.getElementById("response-message");

        let data = {
            userId: document.getElementById("user-id").value,
            title: document.getElementById("title").value,
        };

        let resetResponseMessage=(response)=>{
            setTimeout(()=>{
                responseMessageEl.textContent = ``;
                responseMessageEl.classList.remove(response);
            }, 2000);
        }

        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                responseMessageEl.textContent = `ToDo item created successfully with an id of ${data.id}`;
                responseMessageEl.classList.add("success");

                resetResponseMessage("success");
            })
            .catch((err) => {
                responseMessageEl.textContent = `ToDo item creation failed`;
                responseMessageEl.classList.add("error");
                
                resetResponseMessage("error");
                console.log("Error", err);
            });
    };
};
