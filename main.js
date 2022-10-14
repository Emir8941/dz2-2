let btnred = document.querySelector('.red')
let btnyellow = document.querySelector('.yellow')
let btngreen = document.querySelector('.green')
let btnreset = document.querySelector('.reset')

const body = document.body

btnred.addEventListener('click', () => {
    setTimeout(() => {
       body.style.background = 'red';
       console.log('red');
    },1000)
})
btnyellow.addEventListener('click', () => {
    setTimeout(() => {
        body.style.background = 'yellow';
        console.log('yellow');
    },1000)
})
btngreen.addEventListener('click', () => {
    setTimeout(() => {
        body.style.background = 'green';
        console.log('green');
    },1000)
    
})
btnreset.addEventListener('click', () => {
    body.style.background = 'white'
    console.log('reset');
})