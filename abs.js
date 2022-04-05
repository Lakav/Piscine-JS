function isPositive(a){
    if(a>0){
        return true
    }
    if(a==0){
        return false
    }
    if(a==-0){
        return false
    }
    else{
        return false
    }
}

function abs(b){
    if (b>=0){
        return b
    }
    if (b==-0){
        return b*-1
    }
    else{
        return b*-1
    }
}

console.log(isPositive(3))
console.log(isPositive(1998790))
console.log(!isPositive(-1))
console.log(!isPositive(-0.7))
console.log(!isPositive(-787823))
console.log(!isPositive(0))

console.log(abs(0))
console.log(abs(-1))
console.log(abs(-13.2))
console.log(abs(132))