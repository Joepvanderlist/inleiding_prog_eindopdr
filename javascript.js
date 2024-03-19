console.log("hallo");

let Level = 1;
let Levens = 3;


const gameoverScherm = document.querySelector('#gameoverScherm')
const knop1 = document.querySelector("#knop1");


console.log('Level '+ Level);

function laadLevel(){
    if(Level === 1){
        zoekDoos.style.left = '945px';
        zoekDoos.style.top = '525px';
    }
    else if(Level === 2){
        zoekDoos.style.left = '510px';
        zoekDoos.style.top = '335px';
    }
    else if(Level === 3){
        zoekDoos.style.left = '410px';
        zoekDoos.style.top = '315px';
    }
    else if(Level === 4){
        zoekDoos.style.left = '637px';
        zoekDoos.style.top = '410px';
    }
    else{
        zoekDoos.style.left = '965px';
        zoekDoos.style.top = '455px';
    }
}

let zoekDoelwit = document.querySelector("#zoekDoelwit");

let plaatjesArray = ['persoon1.png','persoon2.png','persoon3.png','persoon4.png','persoon5.png' ]


function laadFoto(){
    let afbeelding = "images/" + plaatjesArray[(Level - 1)];
    zoekDoelwit.src = afbeelding;
/*
    if(Level === 1){
        zoekDoelwit.src = "images/persoon1.png";
    }
    else if(Level === 2){
        zoekDoelwit.src = "images/persoon2.png";
    }
    else if(Level === 3){
        zoekDoelwit.src = "images/persoon3.png";
    }
    else if(Level === 4){
        zoekDoelwit.src = "images/persoon4.png";
    }
    else{
        zoekDoelwit.src = "images/persoon5.png";
    }*/
}


const achtergrondFoto = document.querySelector("#achtergrondFoto");

achtergrondFoto.addEventListener('click', updateLevens);

function updateLevens(){
    if(Levens === 3){
        Levens --;
    }
    else if(Levens === 2){
        Levens --;
    }
    else if(Levens === 1){
        Levens --;
    }
    verlaagLevens(Levens);
}

let levensFoto = document.getElementById('Levens'); 

function verlaagLevens(Levens){
    if(Levens === 2){
        levensFoto.src = 'images/2levens.png';
    }
    else if(Levens === 1){
        levensFoto.src = 'images/1levens.png';
    }
    else{
        levensFoto.src = 'images/0levens.png';
        gameoverScherm.style.display = 'block';
        /*
        setTimeout(()=> {
            alert('GameOver!');
        }, 1000);
        setTimeout(()=> {
            location.reload();
        }, 2000);*/
        
    }
}



knop1.addEventListener('click', speelOpnieuw);

function speelOpnieuw(){
    console.log("sjj");
    window.location.reload();
}


/*
let aantalLevens = Math.ceil(Math.random()*3);

let plaatjesArray = ['1levens.png','2levens.png','3levens.png']

let levensAfbeelding = plaatjesArray[aantalLevens-1]; 

document.getElementById("levens").src = "images/"+levensAfbeelding;
*/ 


let timeOptions = ['200', '190', '180', '170'];
let secondsOver = parseInt(timeOptions[Math.floor(Math.random() * timeOptions.length)]);

let timer = setInterval(countSeconds, 1000);

function countSeconds() {
    document.querySelector('h2').textContent = 'Tijd over: ' + secondsOver;
    secondsOver--;
    
    if (secondsOver < 0) {
        clearInterval(timer); // Stop de timer als de tijd voorbij is
        gameoverScherm.style.display = 'block'; // Toon het game-over-scherm
    }
}

/*
let TijdTotaal = Math.ceil(Math.random()*4);

let tijdArray = ['200','190','180','170' ]

let secondOver = tijdArray[TijdTotaal-1]; 


let timer = setInterval(countSeconds, 1000)

function countSeconds(){
    document.querySelector('h2').textContent = 'Tijd over:'+secondsOver
    console.log(secondsOver);
    secondsOver --;
    
    if (secondsOver <= -1 ){
        gameoverScherm.style.display = 'block';
        
        console.log("tijd klaar ");
        setTimeout(()=> { 
            alert('GameOver!');
        }, 1000);
        clearInterval(timer);
    }

}*/

/*
let aantalPersonen = Math.ceil(Math.random()*5);

console.log(aantalPersonen);

let plaatjesArray = ['persoon1.png','persoon2.png','persoon3.png','persoon4.png','persoon5.png' ]

let persoonAfbeelding = plaatjesArray[aantalPersonen-1];

document.getElementById("zoekDoelwit").src = "images/"+persoonAfbeelding;
*/





const zoekDoos = document.getElementById('zoekDoos'); 


zoekDoos.addEventListener('click', gewonnen);

const winGeluid = new Audio('audio/win_geluid.mp3');

function gewonnen(){
    winGeluid.play();
    /*alert("Gewonnen");*/
    if(Level === 5){
        Level = 1;
    }
    else{
        Level++;
    }
    updateLevel();
}
/*
function updateLevel(){
    console.log('Level '+ Level);
    laadLevel();
    laadFoto();
}*/


const levelsArray = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];

function updateLevel() {
    levelsArray.forEach((levelText, index) => {
        if (index + 1 === Level) {
            console.log(levelText); 
            document.querySelector('h1').textContent = levelText; 
        }
    });
    laadLevel();
    laadFoto();
}

