// Asynchronous functions always return promises
const getOne = async _ => {
    return 1;
}

const promise = getOne()

console.log(promise)

promise.then(a => console.log(`getOne: ${a}`))

// await keyword lets you wait for the promise to resolve
const awaitTest = async _ => {
    const one = await getOne()
    console.log(`awaitTest: ${one}`) // 1
}

awaitTest()

// no need to await before returning a promise. You can return the promise directly.
//
const test = _ => {
    return getOne()
}

test().then(value => {
    console.log(`test: ${value}`) // 1
})