const w = window,
    d = document;

export function responsiveTester (formId){
    const $form = d.getElementById(formId);
    let winTester;

    d.addEventListener("submit", (e)=>{
        if(e.target === $form){
            e.preventDefault();
            winTester = w.open($form.url.value, "winTester",`innerWidth = ${$form.width.value} innerHeight = ${$form.height.value}`)
        }
    })

    d.addEventListener("click", e=>{
        if(e.target === $form.cerrar) winTester.close();
    })

}