const d = document; 
export function setCountdown(container, dateLimit){    
    
    const $container = d.querySelector(container),
        dateLimitInTimeStamp = dateLimit.getTime();
    
    let timelapse = dateLimitInTimeStamp - new Date().getTime()

    const intervalCountdown = setInterval(() => {
        let days = Math.floor(timelapse / (1000 * 60 * 60 * 24)),
            hours = Math.floor(timelapse % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(timelapse % (1000 * 60 * 60) / (1000 * 60)),
            seconds = Math.floor(timelapse % (1000 * 60) / 1000);
        
        $container.innerHTML=`
        <h4>Faltan:</h4>
        <div class="countown-time">
            ${days} día/s
        </div>
        <div class="countown-time">
            ${hours} hora/s
        </div>
        <div class="countown-time">
            ${minutes} minutos/s
        </div>
        <div class="countown-time">
            ${seconds} segundo/s
        </div>
        `

        timelapse -= 1000;
        if (timelapse < 0) {
            clearInterval(intervalCountdown);
            alert("EL COUNTDOWN HA LLEGADO A SU FIN JIJIJIJA")
          }
    }, 1000);
        

    // new Date().localeTimeString(); --> 05:56:52
    

}