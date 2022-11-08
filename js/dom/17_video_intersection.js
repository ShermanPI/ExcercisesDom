const d = document;

export default function videoIntersection(videoSelector){
    const $video = d.querySelector(videoSelector);
    
    const cb = (entries)=>{

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.play()
            }else{
                entry.target.pause()
            }

            d.addEventListener("visibilitychange", e=>{
                if(document.visibilityState =="hidden"){
                    entry.target.muted = true
                }else{
                    entry.target.muted = false
                }
            })

        });

    }

    const observer = new IntersectionObserver(cb, {
        threshold: [0.5, 0.75]
    })

    observer.observe($video)


    //note: puedes utilizar los data atributes para volver video intelignete al que quieras
}