import { checkout } from './checkout.js';

const summary = checkout([
    {product: 'ticket', type: 'standard', price: 790, isThursday: true},
    {product: 'ticket', type: 'standard', price: 790, isThursday: true},
    {product: 'ticket', type: 'concession', price: 540, isThursday: true},
    {product: 'ticket', type: 'concession', price: 540, isThursday: true},
    {product: 'ticket', type: 'concession', price: 540, isThursday: true},
    {product: 'extra', type: 'real3D', price: 90},
    {product: 'extra', type: 'real3D', price: 90},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
]);

console.log(summary);


