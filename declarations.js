escape = "\'\\\/\"\`"
let arr = [4,"2"]

let obj = {
    str : 'string',
    num : 5,
    bool : true,
    undef : undefined
}
let nested = {
    arr : [4,undefined,'2'],
    obj : {str : 'string', num : 5, bool : true}
}
Object.freeze(obj)
Object.freeze(arr)
Object.freeze(nested.obj)
Object.freeze(nested.arr)