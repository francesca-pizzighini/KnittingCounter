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

function counter1() {
    counterWrapper1.onclick = function(event){
        let target = event.target;

        if(target == resetRow){
            count1 = 0;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));
        }else if (target == plusRow){
            count1 += 1;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));
        }else if(target == minusRow){
            count1 -= 1;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));

            if (count1 < 0) {
                count1 = 0;
                countLabel1.innerHTML = count1;
                localStorage.setItem('counter1Value', JSON.stringify(count1));
            }
        }else{
        };
    };
};
function counterhalf() {
    counterWrapper1.onclick = function (event) {
        let target = event.target;

        if (target == resetRow) {
            console.log('reset half');
            count1 = 0;
            countLabel1.innerHTML = count1
            localStorage.setItem('counter1Value', JSON.stringify(count1));
        } else if (target == plusRow) {
            console.log('plus half');
            count1 += 0.5;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));
        } else if (target == minusRow) {
            console.log('minus half');
            count1 -= 0.5;
            countLabel1.innerHTML = count1;
            localStorage.setItem('counter1Value', JSON.stringify(count1));

            if (count1 < 0) {
                count1 = 0;
                countLabel1.innerHTML = count1;
                localStorage.setItem('counter1Value', JSON.stringify(count1));
            }
        } else {
            console.log('else half');
        };
    };
};
counterhalf();

// different options for row counter
let btnHalf = document.querySelector('.btn-half');
let btnOne = document.querySelector('.btn-one');
let switchingNumberWrapper = document.querySelector('.half-one-wrapper');

switchingNumberWrapper.onclick = function(event){
    let target = event.target;

    if(target == btnHalf){
        btnHalf.className = 'btn btn-outline-light btn-half pressed';
        btnOne.className = 'btn btn-outline-light btn-one';
        counterhalf();
    } else if(target == btnOne){
        btnHalf.className = 'btn btn-outline-light btn-half';
        btnOne.className = 'btn btn-outline-light btn-one pressed';
        counter1();
    } else{

    }
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
            console.log('reset2');
            count2 = 0;
            countLabel2.innerHTML = count2;
            localStorage.setItem('counter2Value', JSON.stringify(count2));
        } else if (target == plusStc) {
            console.log('plus2');
            count2 += 1;
            countLabel2.innerHTML = count2;
            localStorage.setItem('counter2Value', JSON.stringify(count2));
        } else if (target == minusStc) {
            console.log('minus2');
            count2 -= 1;
            countLabel2.innerHTML = count2;
            localStorage.setItem('counter2Value', JSON.stringify(count2));

            if (count2 < 0) {
                count2 = 0;
                countLabel2.innerHTML = count2;
                localStorage.setItem('counter2Value', JSON.stringify(count2));
            }
        } else {
            console.log('else2');
        };
    };
};
counter2();






// // codice commentato non funzionante
// // row counter
// let counterWrapper1 = document.getElementById('counter-wrapper1');
// let countLabel1 = document.getElementById('count1');
// let resetRow = document.getElementById('reset1');
// let plusRow = document.getElementById('plus1');
// let minusRow = document.getElementById('minus1');

// let count1 = JSON.parse(localStorage.getItem('counter1Value')) || 0;
// countLabel1.innerHTML = count1;

// // counter Stitches
// let counterWrapper2 = document.getElementById('counter-wrapper2');
// let countLabel2 = document.getElementById('count2');
// let resetStc = document.getElementById('reset2');
// let plusStc = document.getElementById('plus2');
// let minusStc = document.getElementById('minus2');

// let count2 = JSON.parse(localStorage.getItem('counter2Value')) || 0;
// countLabel2.innerHTML = count2;

// //funzione counter
// function counter(counterwrapper, reset, plus, minus, count, countLabel, localStoragename, value) {
//     counterwrapper.onclick = function (event) {
//         let target = event.target;

//         if (target == reset) {
//             count = 0;
//             countLabel.innerHTML = count;
//             localStorage.setItem(`${localStoragename}`, JSON.stringify(count));
//         } else if (target == plus) {
//             count += value;
//             countLabel.innerHTML = count;
//             localStorage.setItem(`${localStoragename}`, JSON.stringify(count));
//         } else if (target == minus) {
//             count -= value;
//             countLabel.innerHTML = count;
//             localStorage.setItem(`${localStoragename}`, JSON.stringify(count));

//             if (count < 0) {
//                 count = 0;
//                 countLabel.innerHTML = count;
//                 localStorage.setItem(`${localStoragename}`, JSON.stringify(count));
//             }
//         } else {

//         }
//     }
// }
// //counter row +1
// // counter(counterWrapper1, resetRow, plusRow, minusRow, count1, countLabel1, 'counter1Value', 1);
// //counter row +0.5
// counter(counterWrapper1, resetRow, plusRow, minusRow, count1, countLabel1, 'counter1Value', 0.5);


// // different options for row counter
// let btnHalf = document.querySelector('.btn-half');
// let btnOne = document.querySelector('.btn-one');

// btnHalf.addEventListener('click', () => {
//     btnHalf.className = 'btn btn-outline-light btn-half pressed';
//     btnOne.className = 'btn btn-outline-light btn-one';
//     counter(counterWrapper1, resetRow, plusRow, minusRow, count1, countLabel1, 'counter1Value', 0.5); //counter row +0.5
// });
// btnOne.addEventListener('click', () => {
//     btnHalf.className = 'btn btn-outline-light btn-half';
//     btnOne.className = 'btn btn-outline-light btn-one pressed';
//     counter(counterWrapper1, resetRow, plusRow, minusRow, count1, countLabel1, 'counter1Value', 1); //counter row +1
// });

// //counter stc
// counter(counterWrapper2, resetStc, plusStc, minusStc, count2, countLabel2, 'counter2Value', 1);