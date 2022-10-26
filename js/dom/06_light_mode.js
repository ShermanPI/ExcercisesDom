/*

nota: si quieres comparar con lo que tiene un atributo dentro mejor hazlo con el metodo element.getProperty() porque te decuelve lo que esta dentro de la etiqueta. Por ejemplo estaba comparando lo que me da $btnActivste.src que devolvia --> http://127.0.0.1:5500/img/blah/blha.png en vez de compararlo con lo que me devuele el element.getAttribute() que me devuelve lo que neecsito --> img/blah/blha.png

*/

const d = document;
const localStorageKey = "theme-mode";

const lightProps = {
    green: "#F9F6EE",
    black: "#477998",
    img: "img/icon/luna.png",
    theme: "light"
}

const darkProps = {
    green: "#C4D6B0",
    black: "#291F1E",
    img: "img/icon/soleado.png",
    theme: "dark"
}

export function setLightMode(btn){
    const $btnActivate = d.querySelector(btn);
    
    const changeMode = ({green, black, img, theme})=>{
        localStorage.setItem(localStorageKey, theme)
        $btnActivate.src = img;    
        d.documentElement.style.setProperty("--neutral-green", green)
        d.documentElement.style.setProperty("--neutral-black", black)
    }
        
    if(localStorage.getItem(localStorageKey) == lightProps.theme){
        changeMode(lightProps)
    }else{
        localStorage.setItem(localStorageKey, darkProps.theme) 
    }
    
    d.addEventListener("click", (e)=>{
        
        if(!(e.target.matches(btn))) return;
        
        if(localStorage.getItem(localStorageKey) == darkProps.theme){
            changeMode(lightProps)
            return; // en vez del else
        }
        
        changeMode(darkProps)

    })

}

/*

solucion del jonathan --> Curso JavaScript: 88. DOM: Ejercicios Prácticos 

*/

// solucion del jonathan - Curso JavaScript: 89. DOM: Ejercicios Prácticos | API localStorage 
