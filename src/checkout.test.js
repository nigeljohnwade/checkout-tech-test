import { checkout } from './checkout.js';

const sampleBasket1 = [
    {type: 'standard', price: 790, isThursday: true},
    {type: 'standard', price: 790, isThursday: true},
    {type: 'concession', price: 540, isThursday: true},
    {type: 'concession', price: 540, isThursday: true},
    {type: 'concession', price: 540, isThursday: true},
    {type: 'real3D', price: 90},
    {type: 'real3D', price: 90},
    {type: 'IMAX', price: 150},
    {type: 'IMAX', price: 150},
];


const sampleBasket2 = [
    {type: 'standard', price: 790, isThursday: false},
    {type: 'standard', price: 790, isThursday: false},
    {type: 'concession', price: 540, isThursday: false},
    {type: 'concession', price: 540, isThursday: false},
    {type: 'concession', price: 540, isThursday: false},
    {type: 'real3D', price: 90},
    {type: 'real3D', price: 90},
    {type: 'IMAX', price: 150},
    {type: 'IMAX', price: 150},
];

const sampleBasket3 = [
    {type: 'standard', price: 790, isThursday: false},
    {type: 'standard', price: 790, isThursday: true},
    {type: 'concession', price: 540, isThursday: false},
    {type: 'concession', price: 540, isThursday: true},
    {type: 'concession', price: 540, isThursday: false},
    {type: 'real3D', price: 90},
    {type: 'real3D', price: 90},
    {type: 'IMAX', price: 150},
    {type: 'IMAX', price: 150},
];

test('Sample basket 1', () => {
    expect(checkout(sampleBasket1)).toMatchObject({
        totalPrice: 2350,
        savings: 1330,
        isThursdayOfferCount: 5,
    });
});

test('Sample basket 2', () => {
    expect(checkout(sampleBasket2)).toMatchObject({
        totalPrice: 3680,
        savings: 0,
        isThursdayOfferCount: 0,
    });
});

test('Sample basket 3', () => {
    expect(checkout(sampleBasket3)).toMatchObject({
        totalPrice: 3140,
        savings: 540,
        isThursdayOfferCount: 2,
    });
});
