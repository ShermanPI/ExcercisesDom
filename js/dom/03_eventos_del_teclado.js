// Cosas a mejorar:
// 1. Usar menos listener, hacen que ocupe mas memoria. Cuando podias utilizar uno para el documento y el key down, utilzaste varios


const d = document;

export function setShorcutAlert(msj){
    d.addEventListener("keydown", (e)=>{
        if((e.key == 'a')&& (e.altKey == true)){
            alert(msj)
        }

    })
}

export function setShorcutConfirm(msj){
    window.addEventListener("keydown", (e)=>{
        if((e.key == 'c')&& (e.altKey == true)){
            confirm(msj)
        }
    })
}

export function setShorcutPrompt(msj){
    window.addEventListener("keydown", (e)=>{
        if((e.key == 'p')&& (e.altKey == true)){
            prompt(msj)
        }
    })
}


// ↓↓↓↓↓↓ para saber los eventos del teclado, cuando sucede un keyUp y keyDown en la consola ↓↓↓↓↓↓

// export function getThePressedKey(){
//     document.addEventListener("keyup", log);
//     document.addEventListener("keydown", log);
    
//     function log(event){
//         console.log( event );
//     }
// }


// solucion del jonathan del ejercicio 3.1, hizo lo mismo con el teclado solo que sin porder especificar el mensaje que se mostrará, y utilizando este archivo para simplemente establecer el handler para el listener que se va a estar ejecutando en el archivo principal y asi haciendo que solo este un listener por parte del documento.

/***********

ejercicio 3.2 - hacer mover bolita con las flechas.

***********/


export function setBolita(stage, bolita){
    let $bolita = d.querySelector(bolita),
        $stage = d.querySelector(stage),
        x = 0,
        y = 0;
    
    const moveBall = function (e, bolita){
        let stageLimits = $stage.getBoundingClientRect(),
            bolitaLImits = $bolita.getBoundingClientRect();

        switch (e.key) {
            case "ArrowLeft":
                // puedes utilizar math.round() para no tener que sumarle a donde esta la 
                // bolita, y asi ser mas exacto. le sumo 12 porque es la medida del em ↓↓↓↓
                if(bolitaLImits.left - 12 > stageLimits.left) x -= 1; 
                e.preventDefault();
                break;
            case "ArrowRight":
                if(bolitaLImits.right + 12 < stageLimits.right) x += 1;
                e.preventDefault();
                break;
            case "ArrowUp":
                if(bolitaLImits.top - 12 > stageLimits.top) y -= 1;
                e.preventDefault();
                break;
            case "ArrowDown":
                if(bolitaLImits.bottom + 12 < stageLimits.bottom) y += 1;
                e.preventDefault();
                break;
        }

        bolita.style.setProperty("transform", `translate(${x}em, ${y}em)`);
        
        if(e.key == "r" && e.altKey == true){
            x = 0;
            y = 0;
            bolita.style.setProperty("transform", `translate(${x}em, ${y}em)`);
            alert("Bolita reiniciada >:)")
        }
    }
    
    // se hizo una funciona para el handler y asi poder referise al handler y poderle pasar parametros a la funcion de dentro(el handler verdadero) y que esa funcion se ejecute por igual ↓↓↓↓↓↓
    const sostenedorDelHandler = function (e){ 
        moveBall(e, $bolita)
    }
    
    //este evento hace que se active el escenario cuando se le de click y que se pueda mover la bolita, 
    //y que cuando se le de click en otro lado ya no se mueva ↓↓↓↓↓↓
    d.addEventListener("click", (e)=>{ 
        if(e.target.matches(stage)){
            $stage.style.border = "1px solid black";
            d.addEventListener("keydown", sostenedorDelHandler)

        }else if(!(e.target.matches(stage))){
            d.removeEventListener("keydown", sostenedorDelHandler)
            $stage.style = null;
        }
        

    })
    
}


/***********

ejercicio 3.2 - hacer mover bolita con las flechas. -> SOLUCION DEL JONATHAN Curso JavaScript: 85

***********/
