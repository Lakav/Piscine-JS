function slice(arg, start = 0, end = arg.length) {
    let array = []
    let string = ""
    let sliced = undefined

    if (start < 0) {
        start = arg.length + start
    }
    if (end < 0) {
        end = arg.length + end
    }
    for (let index = start; index < end; index++) {
        if (typeof arg === "object") {
            array.push(arg[index])
            sliced = array
        } else if (typeof arg === "string") {
            string = string + arg[index]
            sliced = string
        }
    }
    return sliced
}

console.log(slice([1, 2, 3, 4, 5, 6], 2))
console.log(slice([1, 2, 3, 4, 5, 6], -2))
console.log(slice([1, 2, 3, 4, 5, 6], 0, 2))
console.log(slice([1, 2, 3, 4, 5, 6], 0, -2))
console.log(slice([1, 2, 3, 4, 5, 6], 2, 4))
console.log(slice([1, 2, 3, 4, 5, 6], -3, -1))