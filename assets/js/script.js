let blue = document.querySelector('.blue')
let green = document.querySelector('.green')
let pink = document.querySelector('.pink');
let black = document.querySelector('.black');
let white = document.querySelector('.white');
let beige = document.querySelector('.beige');
let purple = document.querySelector('.purple');
let orange = document.querySelector('.orange');





let colors = [
    [blue, 'blue'], 
    [green, 'green'], 
    [pink, 'pink'],
    [black, 'black'],
    [white, 'white'],
    [beige, 'beige'],
    [purple, 'purple'],
    [orange, 'orange'],
];

colors.forEach(origin=>{
    origin[0].addEventListener('click', ()=>{
        document.querySelector('.background-gradient').className = `background-gradient ${origin[1]} `
    })
})



  
