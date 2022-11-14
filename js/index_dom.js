import hamburgerMenu from "./dom/01_menu_hamburguesa.js";
import {setClock, alarm} from "./dom/02_reloj_digital.js";
import {setBolita, setShorcutAlert, setShorcutConfirm, setShorcutPrompt} from "./dom/03_eventos_del_teclado.js";
import {setCountdown} from "./dom/04_countdown.js";
import {scrollButton} from "./dom/05_scroll_button.js";
import {setLightMode} from "./dom/06_light_mode.js";
import { setMedia } from "./dom/07_responsive_with_js.js";
import { responsiveTester } from "./dom/08_excercise_responsive_tester.js";
import detectDevice from "./dom/09_deteccion_dispositivo_user_agent.js"
import notificationOnlineStatus from "./dom/10_detección_estado_red.js";
import setWebcam from "./dom/11_webcam.js"
import setLocation from "./dom/12_geolocation.js";
import setFilter from "./dom/13_filtro_de_busqueda.js";
import setSorteo from "./dom/14_sorteo.js";
import setSlider from "./dom/15_slider.js";
import intersectionMenu from "./dom/16_intersection_observer.js";
import videoIntersection from "./dom/17_video_intersection.js";
import validateForm from "./dom/18_19_form_validation.js";
import speech from "./dom/20_voice_lector.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    
    // llamadas del ejecicio 1
    hamburgerMenu("#burguer-menu", "nav")
    hamburgerMenu(".img-close", "nav")
    
    // llamadas del ejercicio 2
    setClock(".clock", ".startBtn", ".stopBtn")
    alarm(".playAlarmBtn", ".stopAlarmBtn")
    
    //llamadas del ejercicio 3
    setShorcutAlert("Has generado una alerta")
    setShorcutConfirm("quieres realizar esta accion")
    setShorcutPrompt("Escribe algun texto, te escucho")
    
    //llamadas ejercicio 3
    setBolita(".bolita-container", ".bolita")
    
    //llamadas del ejercicio 4
    let dateLimit = new Date(new Date().getFullYear()+1, new Date().getMonth(),new Date().getDate(), 10, 29)
    setCountdown(".countdown-container", dateLimit)
    // let dateLimit = new Date("Oct 23, 2022 22:37:25")
    // console.log(dateLimit)
    
    //llamadas ejercicio 5
    scrollButton(".top-button")

    //llamadas ejercicio 6
    setLightMode(".mode")

    //llamadas del ejercicio 7
    setMedia(700, ...objArray)

    //llamadas del ejercicio 8
    responsiveTester("form-responsive")

    //llamadas del ejercicio 9
    detectDevice("user-device")

    //llamdadas del ejercicio 10
    notificationOnlineStatus("notification")

    //llamdas del ejercicio 11
    setWebcam("webcam")

    //llamadas del ejercicio 12
    setLocation("location-info")

    //llamadas del ejercicio 13
    setFilter(".card", "search-filter")

    //llamadas del ejercicio 14
    setSorteo(".sorteo-button", ".sorteo-items li")

    //llamadas del ejercicio 15
    setSlider(".left-button", ".right-button", ".slider-item")

    //llamadas del ejercicio 16
    intersectionMenu()

    //llamadas del ejercicio 17
    videoIntersection(".rick-video")

    //llamadas del ejercicio 18 y 19
    validateForm()


})

//llamadas del ejercicio 20
speech()


var objArray = [
    {
    url: "https://www.youtube.com/watch?v=qU9mHegkTc4&ab_channel=ArcticMonkeys-Topic",

    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UlOyFgR-xA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    select: ".iframeYT",

    name: "Ver video"
    },
    {
        url: "https://goo.gl/maps/bjFodGaEQ4fGU9XUA",
    
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.4460577079453!2d-70.69168113309999!3d19.479435858367655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c5be08b867d9%3A0x235e79071ff0bdd!2sReparto%20Villalona%2C%20Santiago%20De%20Los%20Caballeros%2051000!5e0!3m2!1ses!2sdo!4v1666796240470!5m2!1ses!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    
        select: ".iframeGoogle",
    
        name: "Ver Mapa"
    }
]




//llamadas ejercicio 7 - en la solucion del jonathan del darkMode se llama fuera porque no se puede tener un eventListener del mismo tipo de donde se agrega otro. o sea, en estre caso no se puede añadir un listener de DOMContentLoad dentro de un handler de un DOMContentLoad

