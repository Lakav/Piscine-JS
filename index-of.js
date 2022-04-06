function indexOf(arr,value,pos=0){
    for(let i=pos; i<arr.length; i++){
        if(arr[i] == value){
            return i
        }
    }
return -1
}
function lastIndexOf(arr,value,pos=arr.length){
    for(let i=pos; i>0; i--){
        if(arr[i] == value){
            return i
        }
    }
return -1
}
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))