import { getInverseColor } from "./app.js";
const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function (){
    const hexColor = getRandomHexColor();
    document.body.style.color = getInverseColor(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomHexColor(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += colors[getRandomNumber()];
    }
    return hexColor;
    //return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

