const w = window,
    d = document;

// const elObjIterable = {
//     url: "https://www.youtube.com/watch?v=qU9mHegkTc4&ab_channel=ArcticMonkeys-Topic",

//     iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UlOyFgR-xA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

//     select: ".irlYT",

//     name: "Ver video"
// } --> estructura del objeto que se debe pasar a la funcion.

export function setMedia(minWidth, ...elObjIterable){ 
    //recibirá varios objetos de tipo elObjIterable, que tienen la estructura de arriba.
    const mql = w.matchMedia(`(min-width: ${minWidth}px)`); // mediaQueryList

    const adaptToMedia = function(elObjIterable){
        elObjIterable.forEach((el)=>{
            const $el = document.querySelector(el.select);
    
            if(mql.matches){
                $el.innerHTML = el.iframe
            }else{
                // console.log(mql)
                $el.innerHTML = `<a href="${el.url}" target="_blank">${el.name}</a>`
            }
        })
    }

    adaptToMedia(elObjIterable)

    w.addEventListener("resize", (e)=>{
        adaptToMedia(elObjIterable)
    })


}

/*

solucion del jonathan 

*/