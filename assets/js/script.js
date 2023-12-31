//create buttons
let rowDiv = document.getElementById('row-div');
let stitchDiv = document.getElementById('stitch-div');

let counterCreation = [
    [rowDiv, 'count1', 'counter-wrapper1', 'reset1', 'minus1', 'plus1'],
    [stitchDiv, 'count2', 'counter-wrapper2', 'reset2', 'minus2', 'plus2'],
];
counterCreation.forEach(one=>{
    let span = document.createElement('span');
    implementElementCharacteristic(span, one[1], ' ', one[0]);

    let divbtns = document.createElement('div');
    implementElementCharacteristic(divbtns, one[2], 'counter-btns', one[0]);

    let divreset = document.createElement('div');
    let divresettext;
    implementElementWithTextCharacteristic(divreset, one[3], 'reset d-flex align-items-center justify-content-center btn btn-outline-light', divbtns, divresettext, '↺');

    let divminus = document.createElement('div');
    let divminustext;
    implementElementWithTextCharacteristic(divminus, one[4], 'minus d-flex align-items-center justify-content-center btn btn-outline-light disable-dbl-tap-zoom', divbtns, divminustext, '-');

    let divplus = document.createElement('div');
    let divplustext;
    implementElementWithTextCharacteristic(divplus, one[5], 'plus d-flex align-items-center justify-content-center btn btn-outline-light disable-dbl-tap-zoom', divbtns, divplustext, '+')
});

function implementElementCharacteristic(nameElement, idName, listOfClasses, externalElement) {
    nameElement.setAttribute('id', `${idName}`);
    nameElement.className = `${listOfClasses}`;
    externalElement.appendChild(nameElement);
}
function implementElementWithTextCharacteristic(nameElement, idName, listOfClasses, externalElement, textElement, text) {
    implementElementCharacteristic(nameElement, idName, listOfClasses, externalElement);
    textElement = document.createTextNode(`${text}`)
    nameElement.appendChild(textElement);
};


//color changer
let beige = document.querySelector('.beige');
let orange = document.querySelector('.orange');
let red = document.querySelector('.red');
let pink = document.querySelector('.pink');
let lavender = document.querySelector('.lavender');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
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


// row counter
let counterWrapper1 = document.getElementById('counter-wrapper1');
let countLabel1 = document.getElementById('count1');
let resetRow = document.getElementById('reset1');
let plusRow = document.getElementById('plus1');
let minusRow = document.getElementById('minus1');

let count1 = JSON.parse(localStorage.getItem('counter1Value')) || 0;
countLabel1.innerHTML = count1;

function Counter1(n){
    counterWrapper1.onclick = function (event) {
        let target = event.target;

        if (target == resetRow) {
            count1 = 0;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));
        } else if (target == plusRow) {
            count1 += n;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));
        } else if (target == minusRow) {
            count1 -= n;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));

            if (count1 < 0) {
                count1 = 0;
                countLabel1.innerHTML = count1;
                localStorage.setItem('counter1Value', JSON.stringify(count1));
            }
        }
    };
}
Counter1(0.5);

// different options for row counter
let btnHalf = document.querySelector('.btn-half');
let btnOne = document.querySelector('.btn-one');
let switchingNumberWrapper = document.querySelector('.half-one-wrapper');

let n = 1;

switchingNumberWrapper.onclick = function(event){
    let target = event.target;
    const isCurrentHalf = target === btnHalf;

    btnHalf.classList.toggle('pressed', isCurrentHalf);
    btnOne.classList.toggle('pressed', !isCurrentHalf);

    n = isCurrentHalf ? 0.5 : 1;
    Counter1(n);
}

// counter Stitches
let counterWrapper2 = document.getElementById('counter-wrapper2');
let countLabel2 = document.getElementById('count2');
let resetStc = document.getElementById('reset2');
let plusStc = document.getElementById('plus2');
let minusStc = document.getElementById('minus2');

let count2 = JSON.parse(localStorage.getItem('counter2Value')) || 0;
countLabel2.innerHTML = count2;

function counter2() {
    counterWrapper2.onclick = function (event) {
        let target = event.target;

        if (target == resetStc) {
            count2 = 0;
            countLabel2.innerHTML = count2;
            localStorage.setItem('counter2Value', JSON.stringify(count2));
        } else if (target == plusStc) {
            count2 += 1;
            countLabel2.innerHTML = count2;
            localStorage.setItem('counter2Value', JSON.stringify(count2));
        } else if (target == minusStc) {
            count2 -= 1;
            countLabel2.innerHTML = count2;
            localStorage.setItem('counter2Value', JSON.stringify(count2));

            if (count2 < 0) {
                count2 = 0;
                countLabel2.innerHTML = count2;
                localStorage.setItem('counter2Value', JSON.stringify(count2));
            }
        }
    };
};
counter2();