function multiply (a,b){
    let res = 0
    if(a<0 && b<0){
        a = -a
        b = -b
        for(let i=0; i<b ;i++){
            res += a
        }
        return res
    }
    if(b>=0){
        for(let i=0; i<b ;i++){
            res += a
        }
        return res
    }
    if(b<0){
        for(let i=0; i<a ;i++){
            res += b
        }
        return res
    }
}

function divide (a,b){
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
    }
    if(a<0){
        a = -a
        for(res; a>b ;res++){
            a-=b
        }
        res = -res
    }
    if(b<0){
        b = -b
        for(res; a>b ;res++){
            a-=b
        }
        res = -res
    }
    return res
}

function modulo (a,b){

}

//console.log(multiply(10,20))
//console.log(multiply(20,10))
//console.log(multiply(34,78))
//console.log(multiply(123,0))
//console.log(multiply(0,-230))
//console.log(multiply(0,0))
//console.log(multiply(123,-22))
//console.log(multiply(-22,123))
//console.log(multiply(-22,-123))

//console.log(divide(34, 78))
//console.log(divide(78, 34))
//console.log(divide(123,22))
//console.log(divide(123,-22))
//console.log(divide(-123,22))
//console.log(divide(-123,-22))

console.log(modulo(34, 78))
console.log(modulo(78, 34))
console.log(modulo(123,22))
console.log(modulo(123,-22))
console.log(modulo(-123,22))
console.log(modulo(-123,-22))