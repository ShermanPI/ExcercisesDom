/*

    Los objetos principales para este ejercicio fueron
    1. new SpeechSynthesisUtterance();
    2. speechSynthesis

*/


const d =document,
    w = window;

export default function speech(){
    const $select = d.getElementById("speech-select"),
        $textToSpeech = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        speechMessage =  new SpeechSynthesisUtterance();

    let voices = [];

    d.addEventListener("DOMContentLoaded",e =>{
        

        w.speechSynthesis.addEventListener("voiceschanged",e => { //this will be executed when the browser get the list of voices availables
        
            const $fragment = d.createDocumentFragment()

            voices = w.speechSynthesis.getVoices()

            voices.forEach(voice=>{
                const $option = d.createElement("option")
                $option.value = voice.name
                $option.textContent = `${voice.name} - ${voice.lang}`

                $fragment.append($option)
            })

            $select.append($fragment)

        })

        d.addEventListener("change", e=>{
            if(e.target === $select){
                speechMessage.voice = voices.find((voice) => voice.name === e.target.value)
            }
        })

        d.addEventListener("click", e=>{
            if(e.target == $speechBtn){
                speechMessage.text = $textToSpeech.value;
                w.speechSynthesis.speak(speechMessage)
            }
        })


    })
}