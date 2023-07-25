let beige = document.querySelector('.beige');
let orange = document.querySelector('.orange');
let red = document.querySelector('.red');
let pink = document.querySelector('.pink');
let lavender = document.querySelector('.lavender');
let blue = document.querySelector('.blue')
let green = document.querySelector('.green')
let grey = document.querySelector('.grey');

let colors = [
    [beige, 'beige'], 
    [orange, 'orange'], 
    [red, 'red'],
    [pink, 'pink'],
    [lavender, 'lavender'],
    [blue, 'blue'],
    [green, 'green'],
    [grey, 'grey'],
];

colors.forEach(origin=>{
    origin[0].addEventListener('click', ()=>{
        document.querySelector('.background-gradient').className = `background-gradient ${origin[1]}`;
        document.querySelector('body').className = `${origin[1]}`;
    });
});


let btnHalf = document.querySelector('.btn-half');
let btnOne = document.querySelector('.btn-one');

btnHalf.onclick = function () {
    alert('half');
}
btnOne.onclick = function () {
    alert('one');
}



let resetRow = document.getElementById('reset1');
let plusRow = document.getElementById('plus1');
let minusRow = document.getElementById('minus1');

resetRow.onclick = function () {
    alert('reset');
}
plusRow.onclick = function () {
    alert('plus');
}
minusRow.onclick = function () {
    alert('minus');
}








let resetStc = document.getElementById('reset2');
let plusStc = document.getElementById('plus2');
let minusStc = document.getElementById('minus2');

resetStc.onclick = function (){
    alert('reset');
}
plusStc.onclick = function (){
    alert('plus');
}
minusStc.onclick = function (){
    alert('minus');
}
