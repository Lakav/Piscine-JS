const t = (f) => tests.push(f)
const bigArray = [...Array(999).keys(), ...Array(999).keys()]

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

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
console.log(lastIndexOf([0, 0, t, t], t))
console.log(lastIndexOf([0, 0, t, t], t, 3))
console.log(lastIndexOf([t, 0, 0, t], t, 2))

console.log(indexOf([t, 0, 0, t], t, 1))
console.log(indexOf([t, 0, 0, t], t, 2))