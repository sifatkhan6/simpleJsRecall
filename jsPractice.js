//Problem 1: Let’s play a mind game
function mindGame(i) {
    mul = i * 3;
    sum = mul + 10;
    div = sum / 2;
    sub = div - 5;

    return sub;
}

console.log(mindGame(5));


//Problem 2: Finding even or odd
function evenOdd(str) {
    len = str.length;

    if(len % 2 == 0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

evenOdd('Batch7')


//Problem 3: Is Less or Greater than seven
function isLGSeven(i) {
    if(i > 7){
        return i*2;
    }
    else if(i < 7) {
        return i - 7;
    }
    else{
        return 0;
    }
}

console.log(isLGSeven(15));