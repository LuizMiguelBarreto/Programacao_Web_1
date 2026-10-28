let segparagrafo = document.getElementById("SegParag")
let div1 = document.getElementById("div1")

function mudarCorin(){
    div1.style.backgroundColor="Green"
    segparagrafo.textContent = ":D"
}

function mudarCorOut(){
    div1.style.backgroundColor="Red"
    segparagrafo.textContent = ":("
}

function mudarCorClick(){
    div1.style.backgroundColor="Pink"
    segparagrafo.textContent = ":3"
}