const d = document;

export default function intersectionMenu(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]") 

    const cb = (entries)=>{ //entries are all the elements that are being observed by the observer

        
        entries.forEach(entry=>{
            const id = entry.target.getAttribute("id")

            // console.log(entry.target.id)
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
        
    }

    const observer = new IntersectionObserver(cb, {
        // root - el default es viewport 
        // rootMargin
        threshold: [0.5, 0.75] //min, max --> from 0 to 1 (0%-100%)
        //treshold: qué tanto del elemento se tiene que ver en el viewport del root para activar la callback, en la callback se tendria que revisar si el isIntersecting del entry es true.
    }) 

    $sections.forEach(el => observer.observe(el)) // observes elements

}