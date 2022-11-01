const n = navigator,
    d = document;

// url referncia: https://www.google.com/maps/@19.4664952,-70.6811497,15

export default function setLocation(divId){
    const $infoSection = d.getElementById(divId);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = (position)=>{
        // console.log(position)
        // console.log(position.coords)
        let urlGoogleMaps = `https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude}`
        
        $infoSection.innerHTML = `
            <p><b>Latitud: </b> ${position.coords.latitude}</p>
            <p><b>Longitud: </b> ${position.coords.longitude}</p>
            <p><b>Precisión: </b> ${Math.floor(position.coords.accuracy)} metros</p>
            <a href = '${urlGoogleMaps}' target ="_blank" rel="noopener">Ver en Maps</a>
        `

    }

    const error = (err)=>{
        console.log(`Hubo un error:  codigo ${err.code}: ${err.message}`)
    }

    n.geolocation.getCurrentPosition(success, error, options)




}