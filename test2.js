function f1(a, ...[b,c]) {
    console.log(a)
    console.log(b)
    console.log(c)
}

f1(1,2,3,4)

function f2(a, ...b) {
    console.log(a)
    console.log(b)
}

f2(5,6,7,8)
