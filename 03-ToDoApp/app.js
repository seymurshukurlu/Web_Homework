const input = document.querySelector(".customInput");

const form = document.querySelector(".form");

const list = document.querySelector(".toDoList");

form.addEventListener("submit",function (e) {
    e.preventDefault();
    // console.log("Hello");
    console.log(input.value);

    createLi()
    input.value="";

})

function createLi(){
    const li = document.createElement("li");
    const delbutton = document.createElement("button")
    li.innerText = input.value;
    delbutton.innerText = "Delete"
    li.className = "toDoItem"
    delbutton.className = "deleteBtn"

    delbutton.addEventListener("click",delTodo);

    li.appendChild(delbutton);
    list.appendChild(li);

}

function delTodo(e){
    console.log(e.target.parentElement.remove());
}

