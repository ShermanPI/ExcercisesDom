const d = document,
    w = window


export default function setSorteo(btnSorteo, sorteoItems){
    const $sorteoItems = d.querySelectorAll(sorteoItems);
    let currentWinner = 0;
    
    d.addEventListener("click",e=>{
        
        if(e.target.matches(btnSorteo)){

            if(w.localStorage.getItem("currentWinner")) $sorteoItems[currentWinner].classList.remove("ganador")

            const randomNumber = Math.round(Math.random() * ($sorteoItems.length)) 
            currentWinner = randomNumber

            alert(`Has ganado (${$sorteoItems[randomNumber].textContent})`)
            $sorteoItems[randomNumber].classList.add("ganador")
        }
    })
}


// $sorteoItems.forEach(e=>{
//     e.classList.remove("ganador")
// })