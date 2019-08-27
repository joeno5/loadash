function curry(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

function volume(l,h,w) {
    return l * h * w
}
const hCy = curry(volume,100);

console.log(hCy(200,900)); 
console.log(hCy(70,60)); 