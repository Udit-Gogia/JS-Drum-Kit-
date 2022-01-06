window.addEventListener("keydown", function (e){
    playsound(e.key);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    setTimeout( function (){
        key.classList.remove('playing')
    },100);

});

function playsound(key){

    switch (key){
        case "a":
            const a = new Audio('clap.wav');
            a.play();
            break;

        case "s":
            const s = new Audio('hihat.wav');
            s.play();
            break;

        case "d":
            const d = new Audio('kick.wav');
            d.play();
            break;

        case "f":
            const f = new Audio('openhat.wav');
            f.play();
            break;

        case "g":
            const g = new Audio('boom.wav');
            g.play();
            break;

        case "h":
            const h = new Audio('ride.wav');
            h.play();
            break;

        case "j":
            const j = new Audio('snare.wav');
            j.play();
            break;

        case "k":
            const k = new Audio('tom.wav');
            k.play();
            break;

        case "l":
            const l = new Audio('tink.wav');
            l.play();
            break;
    }

}

