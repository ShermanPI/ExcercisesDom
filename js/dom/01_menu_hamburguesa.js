export default function hamburgerMenu(btn, nav){
    const d = document;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            d.querySelector(nav).classList.toggle("toggle-menu")
        }
    })
}