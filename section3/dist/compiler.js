"use strict";
let globalHello = 'hello';
function echo(message) {
    if (message) {
        return message;
    }
}
let implicitAny;
implicitAny = 'implicitAny';
let nullableMessage = echo('hi');
let undefinedableMessage = undefined;
let onlyNull = null;
let onlyUndefined = undefined;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
const newFunction = echo.apply(null, ['hi']);
