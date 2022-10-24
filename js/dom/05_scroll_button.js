const d = document,
    w = window;

export function scrollButton(buttonClass){
    const $buttonUp = d.querySelector(buttonClass);

    w.addEventListener("scroll", (e)=>{
        // console.log(w.scrollY)

        if(w.scrollY > 600){
            $buttonUp.classList.remove("hide-button");
        }else{
            $buttonUp.classList.add("hide-button");
        }
    })

    d.addEventListener("click", (e)=>{
        if(e.target.matches(".top-button img") || e.target.matches(buttonClass)){
            scrollTo(0, 0)
        }
    })

}

/*

solucion del mircha - Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll 

*/