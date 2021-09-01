// Your code here

let removeLi = (span) => {
    span.addEventListener("click", () => {
        span.parentNode.remove();
    })
};

let add = document.getElementById("addToDo");
add.addEventListener("change", () => {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${add.value}`;
    removeLi(li.childNodes[0]);
    ul.appendChild(li);
    document.getElementById("addToDo").value = "";
})

let list = document.querySelectorAll("span");
list.forEach(removeLi);






