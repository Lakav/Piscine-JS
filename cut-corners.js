function round(num){

    if(num < 0){

        let numPositive = num * -1
        let mod = numPositive%1

        if (mod < 0.5){
            numPositive = numPositive - mod
            return numPositive * -1
        }
        if ( mod > 0.5){
            numPositive = numPositive - mod + 1
            return numPositive * -1
        }

    }
    let mod = num % 1 
    if (mod < 0.5){
        return num - mod
    }
    if ( mod > 0.5){
        return num - mod + 1
    }
}

function ceil(num){
    if(num < 0){
        let numPositive = num * -1
        let mod = numPositive%1

        return (numPositive - mod)* -1
    }
    if (num == 0){
        return 0
    }

    let mod = num%1
    return num - mod + 1
}

function floor(num){
    if(num < 0){
        let numPositive = num * -1
        let mod = numPositive%1

        return (numPositive - mod+1)* -1
    }
    if (num == 0){
        return 0
    }

    let mod = num%1
    return num - mod
}

function trunc(num){
    if (num < 0){
        let numPositive = num * -1
        let mod = numPositive%1

        return (numPositive - mod)* -1
    }
    if (num == 0){
        return 0
    }
    else {
        let mod = num%1
        return num - mod
    }
}


console.log(trunc(3.2))
console.log(trunc(3.7))
console.log(trunc(-3.2))
console.log(trunc(-3.7))
console.log(trunc(0))