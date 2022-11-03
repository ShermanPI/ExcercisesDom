const d = document, 
    w = window;

export default function setFilter(itemClass, searchFilter){
    const $items = d.querySelectorAll(itemClass),
        $searchFilter = d.querySelector(`.${searchFilter}`);

    d.addEventListener("input", (e)=>{

        if(e.target.matches(`.${searchFilter}`)){

            $items.forEach(el=>{
                if(!(el.textContent.toLowerCase().includes($searchFilter.value.toLowerCase()))){ 
                    el.classList.add("hidden")
                    console.log($searchFilter.value)
                }else{
                    el.classList.remove("hidden")
                }
                
            })


        }

    })
}