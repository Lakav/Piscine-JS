function modulo (a,b){
    let res = 0
    if(a>0 && b>0){
        for(res; a>b ;res++){
            a-=b
        }
    }
    if(a<0 && b<0){
        a = -a
        b = -b
        for(res; a>b ;res++){
            a-=b
        }
        a = -a
    }
    if(a<0){
        a = -a
        for(res; a>b ;res++){
            a-=b
        }
        a = -a
    }
    if(b<0){
        b = -b
        for(res; a>b ;res++){
            a-=b
        }
    }
    return a
}

function round(num){
    console.log(1, num)

    if(num < 0){

        let numPositive = num * -1
        let mod = modulo(numPositive, 1)

        if (mod < 0.5){
            numPositive = numPositive - mod
            return numPositive * -1
        }
        if ( mod > 0.5){
            numPositive = numPositive - mod + 1
            return numPositive * -1
        }

    }
    let mod = modulo(num, 1)
    if (mod < 0.5){
        return num - mod
    }
    if ( mod > 0.5){
        return num - mod + 1
    }
}

function ceil(num){
    console.log(2, num)
    if(num < 0){
        let numPositive = num * -1
        let mod = modulo(numPositive, 1)

        return (numPositive - mod)* -1
    }
    if (num == 0){
        return 0
    }

    let mod = modulo(num, 1)
    return num - mod + 1
}

function floor(num){
    console.log(3, num)
    if(num < 0){
        let numPositive = num * -1
        let mod = modulo(numPositive, 1)

        return (numPositive - mod+1)* -1
    }
    if (num == 0){
        return 0
    }

    let mod = modulo(num, 1)
    return num - mod
}

function trunc(num){
    console.log(4, num)
    if (num < 0){
        let numPositive = num * -1
        let mod = modulo(numPositive, 1)

        return (numPositive - mod)* -1
    }

    else {
        let mod = modulo(num, 1)
        return num - mod
    }
}

console.log(trunc(688789677856675677578.7760))