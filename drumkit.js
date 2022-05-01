let audioW = document.getElementById("audio-w");
let audioA = document.getElementById("audio-a");
let audioS = document.getElementById("audio-s");
let audioD = document.getElementById("audio-d");
let audioJ = document.getElementById("audio-j");
let audioK = document.getElementById("audio-k");
let audioL = document.getElementById("audio-l");


document.addEventListener("keydown", function(e){
    if(e.key === "w" || e.key === "W"){
        console.log(`you just hit the ${e.key} button!`);
        audioW.currentTime = 0;
        audioW.play();
    }
    else if(e.key === "a" || e.key === "A"){
        console.log(`you just hit the ${e.key} button!`);
        audioA.currentTime = 0;
        audioA.play();
    }
    else if(e.key === "s" || e.key === "S"){
        console.log(`you just hit the ${e.key} button!`);
        audioS.currentTime = 0;
        audioS.play();
    }
    else if(e.key === "d" || e.key === "D"){
        console.log(`you just hit the ${e.key} button!`);
        audioD.currentTime = 0;
        audioD.play();
    }
    else if(e.key === "j" || e.key === "J"){
        console.log(`you just hit the ${e.key} button!`);
        audioJ.currentTime = 0;
        audioJ.play();
    }
    else if(e.key === "k" || e.key === "K"){
        console.log(`you just hit the ${e.key} button!`);
        audioK.currentTime = 0;
        audioK.play();
    }
    else if(e.key === "l" || e.key === "L"){
        console.log(`you just hit the ${e.key} button!`);
        audioL.currentTime = 0;
        audioL.play();
    }

})
