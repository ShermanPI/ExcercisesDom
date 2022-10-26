import hamburgerMenu from "./dom/01_menu_hamburguesa.js";
import {setClock, alarm} from "./dom/02_reloj_digital.js";
import {getThePressedKey, setBolita, setShorcutAlert, setShorcutConfirm, setShorcutPrompt} from "./dom/03_eventos_del_teclado.js";
import {setCountdown} from "./dom/04_countdown.js";
import {scrollButton} from "./dom/05_scroll_button.js";
import {setLightMode} from "./dom/06_light_mode.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    
    // llamadas del ejecicio 1
    hamburgerMenu("#burguer-menu", "nav")
    hamburgerMenu(".img-close", "nav")
    
    // llamadas del ejercicio 2
    setClock(".clock", ".startBtn", ".stopBtn")
    alarm(".playAlarmBtn", ".stopAlarmBtn")
    
    //llamadas del ejercicio 3
    getThePressedKey()
    setShorcutAlert("Has generado una alerta")
    setShorcutConfirm("quieres realizar esta accion")
    setShorcutPrompt("Escribe algun texto, te escucho")
    
    //llamadas ejercicio 4
    setBolita(".bolita-container", ".bolita")
    
    //llamadas del ejercicio 5
    let dateLimit = new Date(new Date().getFullYear()+1, new Date().getMonth(),new Date().getDate(), 10, 29)
    setCountdown(".countdown-container", dateLimit)
    // let dateLimit = new Date("Oct 23, 2022 22:37:25")
    // console.log(dateLimit)
    
    //llamadas ejercicio 6
    scrollButton(".top-button")

    //llamadas ejercicio 7
    setLightMode(".mode")
})


//llamadas ejercicio 7 - en la solucion del jonathan del darkMode se llama fuera porque no se puede tener un eventListener del mismo tipo de donde se agrega otro. o sea, en estre caso no se puede añadir un listener de DOMContentLoad dentro de un handler de un DOMContentLoad

