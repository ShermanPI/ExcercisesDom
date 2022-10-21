import hamburgerMenu from "./dom/01_menu_hamburguesa.js"
import {setClock, alarm} from "./dom/02_reloj_digital.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu("#burguer-menu", "nav")
    hamburgerMenu(".img-close", "nav")
    setClock(".clock", ".startBtn", ".stopBtn")
    alarm(".playAlarmBtn", ".stopAlarmBtn")
})