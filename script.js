//DOM EVENT -- СОБЫТИЯ
//?addEventListener() - добавить слушатель событий

// add - добавить
//event - событие
// Listener - слушатель
const element = document.querySelector(".title");

element.addEventListener("mouseover", () => {
    element.style.color = 'red'
});

console.log(element);
