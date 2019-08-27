const R = require('ramda');

// get JWT token  
const request = {
    headers: {
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImRpRlhDT2JHREdSSlg4NENDTW1ydnFmUUowQSJ9.eyJhdWQiOiJ1cm46dXVpZDpjYWZjY2FhMi0wOTk2LTRiYTQtYjI0MS0xYTJjMTk1YzZkNzEiLCJpc3MiOiJodHRwOi8vYWRmcy11YXQucG9seXUuZWR1LmhrL2FkZnMvc2VydmljZXMvdHJ1c3QiLCJpYXQiOjE1NjYzNTgxNjgsImV4cCI6MTU2NjM2MTc2OCwiY24iOiJtZmFhcHAxIiwiYXBwdHlwZSI6IlB1YmxpYyIsImFwcGlkIjoiY2FmY2NhYTItMDk5Ni00YmE0LWIyNDEtMWEyYzE5NWM2ZDcxIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwiYXV0aF90aW1lIjoiMjAxOS0wOC0yMVQwMzoyOToyOC40NTNaIiwidmVyIjoiMS4wIn0.AsFNdkZv5qnj_GYKgvTbrEWLK6k3VlMXINuESWFctJ8pAcT_A-mbGVWlGkeLHTT5cudqVJi_WE-enTsJhW1YOnF4dSv8rDeavLbZSYe6oq_1THka5N61Au0g3_2thwAdW9e3VH1Wq6dC0HP1e3fdzpmpdPHQoCOZONLxKgEcn5tCYVLEUXUVwcEku0fBc1c8i27UcXnMEFXaNbb6l2SEjM6gNIBlnvbe0ElKdkOnXc42h2BWdK2eWvdF3kSoes8D8KPagciQgnMLi_Cd_U_PNLv44fl5FwfH49M9b9dQI3-OgfT6_-_K4vIQVOsOLjWomDOxJxLz1PWKr9igRlqVYw'
    }
}

const request2 = {
    headers: {
    }
}

const isNotNil = R.complement(R.isNil);
const authLens = R.lensPath(['headers','authorization']);

const getHeaderValue = R.curry((key, header) => R.pipe(
    R.split(' '),
    R.ifElse(
        R.pipe(R.head, R.equals(key)),
        R.last,
        R.always(undefined)
    ),
)(header))

const getBearer = getHeaderValue('Bearer');

const getToken = R.pipe(
    R.view(authLens),
    R.when(
        isNotNil, 
        getBearer
    ),
)

var token = getToken(request);
console.log(token);
console.log(getToken(request2));

// get JWT header (first part of a JWT token)
const getJWTHeader = R.pipe(
    R.split('.'),
    R.head,
    (a) => Buffer.from(a, 'base64').toString(),
    (a) => JSON.parse(a),
)

console.log(getJWTHeader(token));



