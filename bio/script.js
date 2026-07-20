const interruptor = document.querySelector('#switch');
const paginaHtml = document.querySelector('html');

let listener = false;
console.log(paginaHtml);

interruptor.addEventListener("click", function (e) {
    listener = !listener;
    if (listener) {
        interruptor.id = "switch-active";
        paginaHtml.classList = "dark-mode"
    }else{
        interruptor.id = "switch";
        paginaHtml.removeAttribute('class');
    }
});