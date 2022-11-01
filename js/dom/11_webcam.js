const d = document,
    n = navigator;

export default function setWebcam(divId){
    const $video = d.getElementById(divId);
    
    n.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then((stream)=>{
            console.log(stream)
            $video.srcObject = stream;
            $video.play()
            
        }).catch((err)=>{
            console.log(`Sucedió un error con la cámara: ${err}`);
            $video.insertAdjacentHTML('beforebegin',`<p>${err}</p>`);
        })
    
}