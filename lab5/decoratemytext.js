function sayHello(){
    alert("Hello, world!");
}

function handleDecoration() {
    var sampleTextElem = document.getElementById("sampleText");
    var style = window.getComputedStyle(sampleTextElem, null).getPropertyValue('font-size');
    var fontSize = parseInt(style) + 2;
    fontSize = Math.min(fontSize, 48);
    console.log(fontSize);
    sampleTextElem.style.fontSize = fontSize;
}

function handleBling() {
    var blingElem = document.getElementById("bling");
    var sampleTextElem = document.getElementById("sampleText");
    if (blingElem.checked) {
        sayHello();
        sampleText.style.fontWeight = "bold";
        sampleText.style.color = "green";
        sampleText.style.textDecoration = "underline";

    }else {
        sampleText.style.fontWeight = "normal";
        sampleText.style.textDecoration = "none";
        sampleText.style.color = "black";
    }
}

function timer() {
    setInterval(handleDecoration, 500);
}