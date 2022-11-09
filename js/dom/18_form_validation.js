/*
Las validaciones del HTML se pueden usar para cuando se haga submit
Las validaciones del JS se pueden usar para cuando el usuario esté interacturando con el formulario y le vaya avisando cómo debe ir llenando el fomulario

Al menos en este caso fue así, es mejor hacer esas validaciones de submit con el HTML para no tener que escribir tant linea de código validando las cosas.

*/

export default function validateForm(){
    const $form = document.getElementById("contact-form"),
        $inputs = document.querySelectorAll("#contact-form [required]")

    $inputs.forEach(input=>{
        const $span = document.createElement("span");
        $span.id = input.name
        $span.classList.add("contact-form-error", "none");
        $span.textContent = input.title;

        input.insertAdjacentElement("afterend", $span)
    })

    document.addEventListener("input", e=>{
        if(e.target.matches("#contact-form [required]")){
            
            const $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
            
            const regex = new RegExp(pattern)

            if(pattern && $input.value !== ""){
                return !regex.test($input.value) 
                    ? document.getElementById($input.name).classList.add("is-active")
                    : document.getElementById($input.name).classList.remove("is-active")
            }

            if(!pattern){
                return $input.value === "" 
                    ? document.getElementById($input.name).classList.add("is-active")
                    : document.getElementById($input.name).classList.remove("is-active")
            }

        }
    })

    
}

// <span class="contact-form-error"></span>
