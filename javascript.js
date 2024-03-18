console.log("hallo");

let Level = 1;
let Levens = 3;

console.log('Level '+ Level);

function laadLevel(){
    if(Level === 1){
        zoekDoos.style.left = '595px';
        zoekDoos.style.top = '525px';
    }
    else if(Level === 2){
        zoekDoos.style.left = '160px';
        zoekDoos.style.top = '335px';
    }
    else if(Level === 3){
        zoekDoos.style.left = '60px';
        zoekDoos.style.top = '315px';
    }
    else if(Level === 4){
        zoekDoos.style.left = '287px';
        zoekDoos.style.top = '410px';
    }
    else{
        zoekDoos.style.left = '615px';
        zoekDoos.style.top = '455px';
    }
}

let zoekDoelwit = document.querySelector("#zoekDoelwit");

function laadFoto(){
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
    }
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
        setTimeout(()=> {
            alert('GameOver!');
        }, 1000);
        setTimeout(()=> {
            location.reload();
        }, 2000);
        
    }
}




/*
let aantalLevens = Math.ceil(Math.random()*3);

let plaatjesArray = ['1levens.png','2levens.png','3levens.png']

let levensAfbeelding = plaatjesArray[aantalLevens-1]; 

document.getElementById("levens").src = "images/"+levensAfbeelding;
*/ 

/*
let secondsOver = 5

let timer = setInterval(countSeconds, 1000)

function countSeconds(){
    document.querySelector('h2').textContent = 'Tijd over:'+secondsOver
    console.log(secondsOver);
    secondsOver --;
    
    if (secondsOver <= -1 ){
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


document.querySelector('h1').textContent = "Start spel";


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
    updateLevel(Level);
}

function updateLevel(Level){
    console.log('Level '+ Level);
    laadLevel();
    laadFoto();
}


