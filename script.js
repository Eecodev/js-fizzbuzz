// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const wrapperEl = document.getElementById('boxWrapper');

for(let i = 1; i <= 100; i++){
    console.log(i);
    let bgBox;
    let content = i;
    if(i % 3 === 0){
        bgBox = 'fizz';
        content = 'fizz';
    } else if (i % 5 === 0){
        bgBox = 'buzz';
        content = 'buzz';
    } else
        console.log(i);


    const boxEl = document.createElement('div');
    boxEl.className = 'box ${bgBox} d-flex justify-content-center align-items-center border';
    boxEl.innerHTML = i;
    wrapperEl.append(boxEl);
}



// UTILITY
function randomInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}