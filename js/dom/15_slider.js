const d = document;

export default function setSlider(leftButton, rightButton, itemSelector){
    const $items = d.querySelectorAll(itemSelector);
    
    let actualItem = 0; 
    
    const moveSlider = (e)=>{
    
        if(e.target.matches(leftButton)){
            $items.forEach(el=>{
                el.classList.remove("primero"); // this can be better.
            })

            if(actualItem === 0){
                actualItem = $items.length;
            }

            actualItem--;
            $items[actualItem].classList.add("primero");
        }

        if(e.target.matches(rightButton)){
            $items.forEach(el=>{                    //
                el.classList.remove("primero");  // this can be better.
            })                                      //

            if(actualItem === $items.length - 1){
                actualItem = -1;
            }

            actualItem++;
            $items[actualItem].classList.add("primero");

        }


    }
    
    d.addEventListener("click",e=>{
        if(e.target.matches(rightButton) || e.target.matches(leftButton)){
            moveSlider(e);
        }
    })

}

/*
EN EL CSS

Jonathan utilizo position relativ y absolute para el slider, y pudo trabajar con el transition. No utilizó .

para que las imagene sean responsive puso en la img esto:

.slider-slide img{
    height: inherit; toma el tama;o de su contenedor
    width: inherit;toma el tama;o de su contenedor
    object-fit: cover; -> se adapta al ancho del contenedor
    object-position: 50% 0;

    laPutaMadre ._.;
}
*/