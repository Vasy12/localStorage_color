'use strict';

const COLOR_VALUE_PATTERN = /[0-9.]{1,4}/g;

const DOCUMENT_BG_COLOR_KEY = "DOCUMENT_BG_COLOR_KEY";

const colorControls = document.querySelectorAll('label > input[type="range"]');
for (const input of colorControls){
    input.oninput = refreshBodyBGColor;
}





function refreshBodyBGColor() {
    let value = "rgba(";
    colorControls.forEach(function (range,index, list) {
        if(index === list.length - 1){
            value += range.value + ')';
        }else{
            value += range.value + ',';
        }
    });
    localStorage.setItem(DOCUMENT_BG_COLOR_KEY, document.body.style.backgroundColor);

    document.body.style.backgroundColor = value;
    console.log( document.body.style.backgroundColor)
}

window.onload = function () {
    const value = localStorage.getItem(DOCUMENT_BG_COLOR_KEY);
    document.body.style.backgroundColor = value;
    const matchValues = value.match(COLOR_VALUE_PATTERN);
    console.log(matchValues)
    matchValues.forEach(function (value, index) {
        colorControls[index].value = value;
    })
};



