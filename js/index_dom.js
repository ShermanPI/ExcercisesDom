import hamburgerMenu from "./dom/01_menu_hamburguesa.js"
import getTime from "./dom/02_reloj_digital.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu("#burguer-menu", "nav")
    hamburgerMenu(".img-close", "nav")
})

console.log(getTime())