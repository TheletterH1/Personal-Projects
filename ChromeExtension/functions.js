document.addEventListener('DOMContentLoaded', init, false);
function init(){
var sadButton = document.getElementById('sadBtn');
//Buttons
if(sadButton){
  sadButton.onclick = responseSad;
}
var anxiousButton = document.getElementById('anxiousBtn');
if(anxiousButton){
  anxiousButton.onclick = responseAnxious;
}
var okayButton = document.getElementById('okayBtn');
if(okayButton){
  okayButton.onclick = responseOkay;
}
var goodButton = document.getElementById('goodBtn');
if(goodButton){
  goodButton.onclick = responseGood;
}
var greatButton = document.getElementById('greatBtn');
if(greatButton){
  greatButton.onclick = responseGreat;
}
};
var h2 = document.getElementById('answer');
function responseSad(){
    var tempSad = Math.floor(Math.random() * 2);
    if(tempSad === 0){
        h2.innerText = "Text Joe";
    }else{
        h2.innerHTML = "Remember that it's okay to cry";
    }
};

function responseAnxious(){
    var tempAnxious = Math.floor(Math.random() * 2);
    if(tempAnxious === 0){
        h2.innerText = "Try a stress-relieving activity";
    }else{
        h2.innerText = "Text Joe";
    };
};

function responseOkay(){
    var tempOkay = Math.floor(Math.random() * 2);
    if(tempOkay === 0){
        h2.innerText = "Text Joe :)";
    }else{
        h2.innerText = "That's better than bad";
    };
};

function responseGood(){
    var tempGood = Math.floor(Math.random() * 2);
    if(tempGood === 0){
        h2.innerText = "Nice"
    }else{
        h2.innerText = "Text Joe :)";
    };
};

function responseGreat(){
    var tempHappy = Math.floor(Math.random() * 2);
    if(tempHappy === 0){
        h2.innerText = "Sick. Keep vibin";
    }else{
        h2.innerText = "Text Joe :)";
    };
};
chrome.runtime.connect({ name: "popup" });