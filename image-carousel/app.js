const rightBtn = document.querySelector("#prev");
const leftBtn = document.querySelector("#next");

const content = document.querySelector(".carousel");

rightBtn.addEventListener("click", () => {
    content.scrollLeft += 550;
})

leftBtn.addEventListener("click", () => {
    content.scrollLeft -= 550;
})

//scrollLeft 
// mover a la derecha += 600px
// mover a la izquierda -= 600px

