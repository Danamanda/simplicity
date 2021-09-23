const botaoMenu = document.querySelector (".icone"); /* ou: nav h2 a */
const menu = document.querySelector (".menu"); /* ou: nav ul */

botaoMenu.addEventListener("click", function (event){
    event.preventDefault();
    menu.classList.toggle("menu-aberto");


    if ( menu.classList.contains("menu-aberto") ){
        botaoMenu.innerHTML = "Fechar &times;";
    } else {
        botaoMenu.innerHTML = "Menu &equiv;";
    }

});