import { checkout } from './checkout.js';

const summary = checkout([
    {type: 'standard', price: 790, isThursday: true},
    {type: 'standard', price: 790, isThursday: true},
    {type: 'concession', price: 540, isThursday: true},
    {type: 'concession', price: 540, isThursday: true},
    {type: 'concession', price: 540, isThursday: true},
    {type: 'real3D', price: 90},
    {type: 'real3D', price: 90},
    {type: 'IMAX', price: 150},
    {type: 'IMAX', price: 150},
]);

console.log(summary);


