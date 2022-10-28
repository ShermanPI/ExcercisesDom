const w = window,
    d = document,
    n = w.navigator;

export default function notificationOnlineStatus(divId){
    const $notification = d.getElementById(divId);

    const sendMessage = (msgType, msg)=>{
        $notification.classList.add(`c-${msgType}`)
        $notification.classList.add("show")
        $notification.textContent = msg

        setTimeout(()=>{
            $notification.classList.remove(`c-${msgType}`)
            $notification.classList.remove("show")
        }, 2000)
    }
     
    w.addEventListener("online", (e)=>{
        sendMessage("onLine", "Conexión establecida")
    })
    w.addEventListener("offline", (e)=>{
        sendMessage("offLine", "Se calló XD")
    })


}

/*

solucion del jonathan> Curso JavaScript: 93. DOM: Ejercicios Prácticos | Detección del estado de la red

*/


