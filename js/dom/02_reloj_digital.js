/*

MI SOLUCION

cosas a mejorar: se debio hacer solamente un listener en el dom para delegar las acciones.
Al querer hacer un setInterval y luego utilizar el mismo setInterval en el mismo scope se tuvo que hacer otro listener, pero simplemente podias hacer una variable vacia y que dentro de la condicional if(e.target.matches(...)) cambiar el valor de esa referencia a la variable vacia, asi haciendo que sea accesible desde otro scope.

El sonido pudo haberse pasado como parametro :v

*/

export function setClock(container, btnStart, btnStop){
    const d = document;
    d.addEventListener("click", (e)=>{

        if(e.target.matches(btnStart)){
            const clockContainer = d.querySelector(container)
            const $btnStart = d.querySelector(btnStart)
            const $btnStop = d.querySelector(btnStop)
            
            $btnStart.setAttribute('disabled', '')

            const interval = setInterval(()=>{
                clockContainer.textContent = new Date().toString().slice(16, 24)
            }, 1000)
            console.log('nuevo intervalo creado')

            $btnStop.addEventListener("click", (e)=>{
                clearInterval(interval)
                e.stopPropagation()
                $btnStart.removeAttribute('disabled')
                console.log("se ha parado el intervalo")
            })
        }
    })
}

export function alarm(playAlarmBtn, stopAlarmBtn){
    const d = document;
    d.addEventListener("click", (e)=>{

        if(e.target.matches(playAlarmBtn)){
            const $alarm = d.getElementById("sound");
            $alarm.play();

            const $stopAlarmBtn = d.querySelector(stopAlarmBtn)
            $stopAlarmBtn.addEventListener("click", (e)=>{
                $alarm.pause();
                $alarm.currentTime = 0;
                e.stopPropagation();
            })

        }
    })
}

/*

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ solucion del jonathan ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

*/


// export function setClock(container, btnStart, btnStop){
//     const d = document;
//     d.addEventListener("click", (e)=>{
//         let interval;
//         const $btnStart = d.querySelector(btnStart)

//         if(e.target.matches(btnStart)){
//             const clockContainer = d.querySelector(container)
            
//             $btnStart.setAttribute('disabled', '')

//             interval = setInterval(()=>{
//                 clockContainer.textContent = new Date().toString().slice(16, 24)
//             }, 1000)
//             console.log('nuevo intervalo creado')

//         }

//         if(e.target.matches(btnStop)){
//             clearInterval(interval)
//             $btnStart.removeAttribute('disabled')
//             console.log("se ha parado el intervalo")
//         }
//     })
// }

// export function alarm(sound, btnPlay, btnStop){
//     let alarmTempo;
//     const $alarm = d.createElement("audio")
//     $alarm.src = sound

//     d.addEventListener("click", (e)=>{
//         if(e.target.matches(btnPlay)){
//             alarmTempo = setTimeout(()=>{
//                 $alarm.play()
//             }, 2000)

//             e.target.disabled = true;
//         }

//         if(e.target.matches(btnStop)){
//             clearTimeout(alarmTempo);
//             $alarm.pause();
//             $alarm.currentTime = 0;
//             d.querySelector(btnPlay).disabled = false;
//         }

//     })
// }
