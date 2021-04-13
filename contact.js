var btn =getElementsByClassName("btn");
var chat = getElementById("chat");

function open(){
    chat.style.display = "block";
}

btn.addEventListener("click", open);