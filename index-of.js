function indexOf(arr,value,pos=0){
    for(let i=pos; i<arr.length; i++){
        if(arr[i] == value){
            return i
        }
    }
return -1
}
function lastIndexOf(arr,value,pos=arr.length){
    for(let i=pos; i>=0; i--){
        if(arr[i] == value){
            return i
        }
    }
return -1
}
function includes(arr,value){
    for(const i of arr){
        if(i == value){
            return true
        }
    }
    return false
}
