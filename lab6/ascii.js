(function() {
"use strict";

var startTimer, timerDelay = 250;
var aavElem, startElem, stopElem, aniElem, sizeElem, speedElem;
var currText, currFrameIndex, frameArr;
var fontSizeArr = [];
fontSizeArr["tiny"] = "7pt";
fontSizeArr["small"] = "10pt";
fontSizeArr["medium"] = "12pt";
fontSizeArr["large"] = "16pt";
fontSizeArr["extralarge"] = "24pt";
fontSizeArr["xxl"] = "32pt";


function handleStart(){
    console.log("handleStart");
    startElem.disabled = true;
    stopElem.disabled = false;
    aniElem.disabled = true;
    currText = aavElem.value;
    currFrameIndex = 0;
    startTimer = setInterval(handleAnimation, timerDelay);
}

function handleStop(){
    console.log("handleStop");
    startElem.disabled = false;
    stopElem.disabled = true;
    aniElem.disabled = false;
    aavElem.value = currText;
    currFrameIndex = 0;
    clearInterval(startTimer);
}

function handleAnimeChange(){
    console.log("handleAnimeChange");
    aavElem.value = ANIMATIONS[aniElem.value];
    frameArr = aavElem.value.split("=====\n");
    currFrameIndex = 0;
}

function handleSizeChange(){
    console.log("handleSizeChange");
    aavElem.style.fontSize = fontSizeArr[sizeElem.value];
}

function handleSpeed(){
    console.log("handleSpeed");
    timerDelay = 250;
    if (speedElem.checked == true){
        timerDelay = 50;
    }
    if (startElem.disabled == true){
        clearInterval(startTimer);
        startTimer = setInterval(handleAnimation, timerDelay);
    }
}

function handleAnimation() {
    console.log("handleAnimation");
    aavElem.value = frameArr[currFrameIndex];
    currFrameIndex += 1;
    if (currFrameIndex >= frameArr.length){
        currFrameIndex = 0;
    }
}

function initialize() {
    aavElem = document.getElementById('aav');
    aavElem.style.fontSize = fontSizeArr["medium"];

    startElem = document.getElementById("startBtn");
    startElem.onclick = handleStart;
    startElem.disabled = false;

    stopElem = document.getElementById("stopBtn")
    stopElem.onclick = handleStop;
    stopElem.disabled = true;

    aniElem = document.getElementById("animeOpt")
    aniElem.onchange = handleAnimeChange;

    sizeElem = document.getElementById("sizeOpt")
    sizeElem.onchange = handleSizeChange;

    speedElem = document.getElementById("speedChkBox")
    speedElem.onclick = handleSpeed;
}

window.onload = initialize;
})();
