function randomArray(length, lowRange, highRange) {

    let randomArray = [];
    
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.ceil(getRandomArbitrary(lowRange, highRange)));
    }

    return randomArray;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let t1 = randomArray(10, 1, 25);
console.log(t1);