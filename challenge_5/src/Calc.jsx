import React from 'react'

function add(a, b) {
    let sum = a + b;
    return sum;
}

function minus(a, b) {
    let sub = a - b;
    return sub;
}

function divide (a, b) {
    let quot = a / b;
    quot = quot.toFixed(2);
    return quot;
}

function multiply (a, b) {
    let mul  = a * b;
    return mul;
}

export { add, minus, divide, multiply };