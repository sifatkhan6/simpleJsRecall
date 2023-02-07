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