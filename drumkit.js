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
        case "A":
            const a = new Audio('sounds/clap.wav');
            a.play();
            break;

        case "s":
        case "S":
            const s = new Audio('sounds/hihat.wav');
            s.play();
            break;

        case "d":
        case "D":
            const d = new Audio('sounds/kick.wav');
            d.play();
            break;

        case "f":
        case "F":
            const f = new Audio('sounds/openhat.wav');
            f.play();
            break;

        case "g":
        case "G":
            const g = new Audio('sounds/boom.wav');
            g.play();
            break;

        case "h":
        case "H":
            const h = new Audio('sounds/ride.wav');
            h.play();
            break;

        case "j":
        case "J":
            const j = new Audio('sounds/snare.wav');
            j.play();
            break;

        case "k":
        case "K":
            const k = new Audio('sounds/tom.wav');
            k.play();
            break;

        case "l":
        case "L":
            const l = new Audio('sounds/tink.wav');
            l.play();
            break;
    }

}

