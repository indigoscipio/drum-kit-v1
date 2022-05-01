// let audioW = document.getElementById("audio-w");
// let audioA = document.getElementById("audio-a");
// let audioS = document.getElementById("audio-s");
// let audioD = document.getElementById("audio-d");
// let audioJ = document.getElementById("audio-j");
// let audioK = document.getElementById("audio-k");
// let audioL = document.getElementById("audio-l");

//detect keyboard press
document.addEventListener("keydown", function(e){
    console.log(e.key.toUpperCase());
    makeSound(e.key.toUpperCase());
    }
)

//detect button press
let numOfBtns = document.querySelectorAll(".drum");
for(i = 0; i < numOfBtns.length; i++){
    numOfBtns[i].addEventListener("click", function(){
    var innerTextButton = this.innerText;
    makeSound(innerTextButton);
    console.log(this.innerText)
})
}

//create sound
function makeSound(key){
    switch(key){
        case "W":
            var audioW = new Audio("sounds/tom-1.mp3");
            audioW.play(); 
        break;

        case "A":
            var audioA = new Audio("sounds/tom-2.mp3");
            audioA.play(); 
        break;

        case "S":
            var audioS = new Audio("sounds/tom-3.mp3");
            audioS.play(); 
        break;

        case "D":
            var audioD = new Audio("sounds/tom-4.mp3");
            audioD.play(); 
        break;

        case "J":
            var audioJ = new Audio("sounds/crash.mp3");
            audioJ.play(); 
        break;

        case "K":
            var audioK = new Audio("sounds/kick-bass.mp3");
            audioK.play(); 
        break;

        case "L":
            var audioL = new Audio("sounds/snare.mp3");
            audioL.play(); 
        break;

        default:
    }
}

// document.addEventListener("keydown", function(e){
//     if(e.key === "w" || e.key === "W"){
//         console.log(`you just hit the ${e.key} button!`);
//         audioW.currentTime = 0;
//         audioW.play();
//     }
//     else if(e.key === "a" || e.key === "A"){
//         console.log(`you just hit the ${e.key} button!`);
//         audioA.currentTime = 0;
//         audioA.play();
//     }
//     else if(e.key === "s" || e.key === "S"){
//         console.log(`you just hit the ${e.key} button!`);
//         audioS.currentTime = 0;
//         audioS.play();
//     }
//     else if(e.key === "d" || e.key === "D"){
//         console.log(`you just hit the ${e.key} button!`);
//         audioD.currentTime = 0;
//         audioD.play();
//     }
//     else if(e.key === "j" || e.key === "J"){
//         console.log(`you just hit the ${e.key} button!`);
//         audioJ.currentTime = 0;
//         audioJ.play();
//     }
//     else if(e.key === "k" || e.key === "K"){
//         console.log(`you just hit the ${e.key} button!`);
//         audioK.currentTime = 0;
//         audioK.play();
//     }
//     else if(e.key === "l" || e.key === "L"){
//         console.log(`you just hit the ${e.key} button!`);
//         audioL.currentTime = 0;
//         audioL.play();
//     }

// })
