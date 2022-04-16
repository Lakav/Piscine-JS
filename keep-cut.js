function cutFirst(str){
    let result = str.substring(2)
    return result
}

function cutLast(str){
    let result = str.substring(0, str.length-2)
    return result
}


function cutFirstLast(str){
    if(str.length <= 4){
        return ""
    }
    let result = str.substring(2, str.length-2)
    return result
}

function keepFirst(str){
    let result = str.slice(0,2)
    return result
}

function keepLast(str){
    let result = str.slice(str.length-2)
    return result
}

function keepFirstLast(str){
    if(str.length <=4){
        return str
    }
    let resultone = str.slice(0,2)
    let resulttwo = str.slice(str.length-2)
    return resultone + resulttwo
}

