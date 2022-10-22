import hamburgerMenu from "./dom/01_menu_hamburguesa.js";
import {setClock, alarm} from "./dom/02_reloj_digital.js";
import {getThePressedKey, setBolita, setShorcutAlert, setShorcutConfirm, setShorcutPrompt} from "./dom/03_eventos_del_teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    // llamadas del ejecicio 1
    hamburgerMenu("#burguer-menu", "nav")
    hamburgerMenu(".img-close", "nav")

    // llamadas del ejercicio 2
    setClock(".clock", ".startBtn", ".stopBtn")
    alarm(".playAlarmBtn", ".stopAlarmBtn")

    //llamadas ejercicio 4
    setBolita(".bolita-container", ".bolita")
})


//llamadas del ejercicio 3
getThePressedKey()
setShorcutAlert("Has generado una alerta")
setShorcutConfirm("quieres realizar esta accion")
setShorcutPrompt("Escribe algun texto, te escucho")