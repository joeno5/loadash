const R = require('ramda');

// different of always and identity
console.log(R.always(undefined)); // function
console.log(R.identity(undefined)); // value

// currying to a pipe. you could pass parameters to a pipe later
var startwithFn = R.curry((a, b) => {return a.startsWith(b)});

var f = R.curry((path, excludePaths) => R.pipe(
    R.split(';'),
    R.any(startwithFn(path)),
    R.not
)(excludePaths));

var p = '/a/ping1'
const jwtExcludePaths = '/ping/;/users/;/ping';

console.log(f(p, jwtExcludePaths));

// usewith
const method = R.useWith(
    R.pipe(R.find, R.prop('attached')),
    [R.propEq('number'), R.pluck('data')]
  );

  const input = [
    { data: { number: 'v01', attached: [ 't01' ] } },
    { data: { number: 'v02', attached: [ 't02' ] } },
    { data: { number: 'v03', attached: [ 't03' ] } },
  ]

  console.log(method('v02', input))
