let populateEditFields = (id) => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("user-id").value = data.userId;
            document.getElementById("title").value = data.title;
        });
};

window.onload = () => {
    let queryParams = new URLSearchParams(location.search);
    let currentToDoId = queryParams.get("id");
    populateEditFields(currentToDoId);

    let cancelBtnEl = document.getElementById("cancel-btn");
    cancelBtnEl.onclick = () => {
        location.href = "/index.html";
    };

    let editToDoFormEl = document.getElementById("edit-todo-form");
    editToDoFormEl.onsubmit = (event) => {
        event.preventDefault();
        let responseMessageEl = document.getElementById("response-message");

        let data = {
            userId: document.getElementById("user-id").value,
            title: document.getElementById("title").value,
        };

        let resetResponseMessage = (response) => {
            setTimeout(() => {
                responseMessageEl.textContent = ``;
                responseMessageEl.classList.remove(response);
            }, 4000);
        };

        fetch("https://jsonplaceholder.typicode.com/todos/" + currentToDoId, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                responseMessageEl.textContent = `ToDo item edited successfully with an id of ${data.id}`;
                responseMessageEl.classList.add("success");

                resetResponseMessage("success");
            })
            .catch((err) => {
                responseMessageEl.textContent = `ToDo item update failed`;
                responseMessageEl.classList.add("error");

                resetResponseMessage("error");
                console.log("Error", err);
            });
    };
};
