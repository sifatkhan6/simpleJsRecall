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


//Problem 4: Finding Bad data
function findingBadData(arr) {
    const badData = arr.filter(element => element < 0)
    return badData.length;
}

console.log(findingBadData([-4, -9, -5, -33, -55]));


//Problem 5: Convert your gems into diamond
let gemsToDiamond = (n1, n2, n3) => {
    p1 = n1 * 21;
    p2 = n2 * 32;
    p3 = n3 * 43;

    totalDiamond = p1+p2+p3;

    if(totalDiamond > 2*1000) {
        return totalDiamond - 2000;
    }
    else{
        return totalDiamond;
    }
}

console.log(gemsToDiamond(20, 200, 50));