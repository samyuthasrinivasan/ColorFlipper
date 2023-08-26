const colors = ["#178264", "#ef5462", "#ad2341", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function (){
   // get random number between 0 and 3
    // access random color with the randomly selected index
   const randomNumber = getRandomNumber();
   const randomColor = colors[randomNumber];

   document.body.style.color = getInverseColor(randomColor);
   document.body.style.backgroundColor = randomColor;
   color.textContent = randomColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

export function getInverseColor(pointColor) {
    const l1 = "fedcba9876543210";
    const l2 = "0123456789abcdef";
    let inverseColor = '#';
    let add = "";
    for(let i = 1; i < pointColor.length; i++){
        add = l2[l1.indexOf(pointColor[i])];
        inverseColor += add;
    }
    return inverseColor;
}
