// press ctrl alt n to execute code
var _ = require('lodash');

var a = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });

var b = [1,2,3,4].filter(x => x > 1);

console.log(a);
console.log(b);

setTimeout(function(){
    console.log("Hello World");
},1);

function foo() {
    // NOTE: don't ever do crazy long-running loops like this
    for (var i=0; i<=10000; i++) {
        console.log(i);
    }
}

foo();

function *foo() {
    var x = 1 + (yield "foo");
    console.log(x);
}

var it = new foo();

function foo(x) {
    console.log("x: " + x);
}

function *bar() {
    yield 1; // just pause
    foo( yield ); // pause waiting for a parameter to pass into `foo(..)`
}

var it = new bar();
var message = bar.next();
console.log(message);

let enrollment = [{enrolled:2,grade:100, enrolled:1, grade:89}];
for (let i=0; i<enrollment.length; i++) {
    let student = enrollment[i];
    if (student !== null) {
        if (student.enrolled > 1) {
            totalGrades += student.grade;
            totalStudentsFound++;
        }
    }
}
var average = totalGrades / totalStudentsFound;

var _ = require('lodash');
let enrollment = [{enrolled:2,grade:100}, {enrolled:2,grade:90}, {enrolled:1, grade:89}];
var a =
_.chain(enrollment)
    .filter(student => student.enrolled > 1)
    .map('grade')
    .mean()
    .value();
    ;
console.log(a);

function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

var it = foo();

var message = it.next();
console.log(message);


var message = it.next();
console.log(message);

var message = it.next();
console.log(message);

var message = it.next();
console.log(message);

var message = it.next();
console.log(message);


var message = it.next();
console.log(message);


function larger(limit, x) {
    return x > limit;
  }
  var larger3 = larger.bind(null, 3);
  console.log(larger3(10)); // true

var R = require('ramda');

const runProgram = R.pipe (
    R.map(R.toLower),
    R.uniq,
    R.sortBy(R.identity)
);

console.log(runProgram(['Functional', 'Programming', 'Curring']));