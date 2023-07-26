//create buttons
let rowDiv = document.getElementById('row-div');
let stitchDiv = document.getElementById('stitch-div');

let counterCreation = [
    [rowDiv, 'count1', 'reset1', 'minus1', 'plus1'],
    [stitchDiv, 'count2', 'reset2', 'minus2', 'plus2'],
]

counterCreation.forEach(one=>{
    let span = document.createElement('span');
    span.setAttribute('id', `${one[1]}`);
    one[0].appendChild(span);

    let divbtns = document.createElement('div');
    divbtns.className = 'counter-btns';
    one[0].appendChild(divbtns);

    let divreset = document.createElement('div');
    divreset.setAttribute('id', `${one[2]}`);
    divreset.className = 'reset d-flex align-items-center justify-content-center btn btn-outline-light';
    let divresettext = document.createTextNode('↺');
    divbtns.appendChild(divreset);
    divreset.appendChild(divresettext);

    let divminus = document.createElement('div');
    divminus.setAttribute('id', `${one[3]}`);
    divminus.className = 'minus d-flex align-items-center justify-content-center btn btn-outline-light disable-dbl-tap-zoom';
    let divminustext = document.createTextNode('-');
    divbtns.appendChild(divminus);
    divminus.appendChild(divminustext);

    let divplus = document.createElement('div');
    divplus.setAttribute('id', `${one[4]}`);
    divplus.className = 'plus d-flex align-items-center justify-content-center btn btn-outline-light disable-dbl-tap-zoom';
    let divplustext = document.createTextNode('+');
    divbtns.appendChild(divplus);
    divplus.appendChild(divplustext);
})

//color changer
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


//row counter
let countLabel1 = document.getElementById('count1');
let resetRow = document.getElementById('reset1');
let plusRow = document.getElementById('plus1');
let minusRow = document.getElementById('minus1');

let count1 = JSON.parse(localStorage.getItem('counter1Value')) || 0;
countLabel1.innerHTML = count1;

function counter1() {
    resetRow.onclick = function () {
        count1 = 0;
        countLabel1.innerHTML = count1
        localStorage.setItem('counter1Value', JSON.stringify(count1));
    }
    plusRow.onclick = function () {
        count1 += 1;
        countLabel1.innerHTML = count1;
        localStorage.setItem('counter1Value', JSON.stringify(count1));
    }
    minusRow.onclick = function () {
        count1 -= 1;
        countLabel1.innerHTML = count1;
        localStorage.setItem('counter1Value', JSON.stringify(count1));

        if (count1 < 0) {
            count1 = 0;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));
        }
    }
}
counter1();
function counterhalf() {
    resetRow.onclick = function () {
        count1 = 0;
        countLabel1.innerHTML = count1
        localStorage.setItem('counter1Value', JSON.stringify(count1));
    }
    plusRow.onclick = function () {
        count1 += 0.5;
        countLabel1.innerHTML = count1;
        localStorage.setItem('counter1Value', JSON.stringify(count1));
    }
    minusRow.onclick = function () {
        count1 -= 0.5;
        countLabel1.innerHTML = count1;
        localStorage.setItem('counter1Value', JSON.stringify(count1));

        if (count1 < 0) {
            count1 = 0;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));
        }
    }
};

//different options for row counter
let btnHalf = document.querySelector('.btn-half');
let btnOne = document.querySelector('.btn-one');

btnHalf.addEventListener('click', ()=>{
    btnHalf.className = 'btn btn-outline-light btn-half pressed';
    btnOne.className = 'btn btn-outline-light btn-one';
    counterhalf();
});
btnOne.addEventListener('click', ()=>{
    btnHalf.className = 'btn btn-outline-light btn-half';
    btnOne.className = 'btn btn-outline-light btn-one pressed';
    counter1();
});

//counter Stitches
let countLabel2 = document.getElementById('count2')
let resetStc = document.getElementById('reset2');
let plusStc = document.getElementById('plus2');
let minusStc = document.getElementById('minus2');

let count2 = JSON.parse(localStorage.getItem('counter2Value')) || 0;
countLabel2.innerHTML = count2;

function counter2() {
    resetStc.onclick = function () {
        count2 = 0;
        countLabel2.innerHTML = count2;
        localStorage.setItem('counter2Value', JSON.stringify(count2));
    }
    plusStc.onclick = function () {
        count2 += 1;
        countLabel2.innerHTML = count2;
        localStorage.setItem('counter2Value', JSON.stringify(count2));
    }
    minusStc.onclick = function () {
        count2 -= 1;
        countLabel2.innerHTML = count2;
        localStorage.setItem('counter2Value', JSON.stringify(count2));

        if (count2 < 0) {
            count2 = 0;
            countLabel2.innerHTML = count2;
            localStorage.setItem('counter2Value', JSON.stringify(count2));
        }
    }
}
counter2();