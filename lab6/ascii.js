var startTimer;
var aavElem, startElem, stopElem, aniElem, sizeElem, speedElem;
var currFrameIndex, frameArr;

function handleStart(){
    console.log("handleStart");
    startElem.disabled = true;
    stopElem.disabled = false;
    startTimer = setInterval(handleAnimation, 250);
}

function handleStop(){
    console.log("handleStop");
    startElem.disabled = false;
    stopElem.disabled = true;
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
}

function handleSpeed(){
    console.log("handleSpeed");
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