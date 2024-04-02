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

document.onkeydown = function(e) {
    switch (e.key) {
        case 'ArrowLeft':
            content.scrollLeft -= 550;
            break;
        case 'ArrowUp':
            alert('up');
            break;
        case 'ArrowRight':
            content.scrollLeft += 550;
            break;
        case 'ArrowDown':
            alert('down');
            break;
    }
};
