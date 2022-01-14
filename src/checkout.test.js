import { checkout } from './checkout.js';

const sampleBasket1 = [
    {product: 'ticket', type: 'standard', price: 790, isThursday: true},
    {product: 'ticket', type: 'standard', price: 790, isThursday: true},
    {product: 'ticket', type: 'concession', price: 540, isThursday: true},
    {product: 'ticket', type: 'concession', price: 540, isThursday: true},
    {product: 'ticket', type: 'concession', price: 540, isThursday: true},
    {product: 'extra', type: 'real3D', price: 90},
    {product: 'extra', type: 'real3D', price: 90},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
];


const sampleBasket2 = [
    {product: 'ticket', type: 'standard', price: 790, isThursday: false},
    {product: 'ticket', type: 'standard', price: 790, isThursday: false},
    {product: 'ticket', type: 'concession', price: 540, isThursday: false},
    {product: 'ticket', type: 'concession', price: 540, isThursday: false},
    {product: 'ticket', type: 'concession', price: 540, isThursday: false},
    {product: 'extra', type: 'real3D', price: 90},
    {product: 'extra', type: 'real3D', price: 90},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
];

const sampleBasket3 = [
    {product: 'ticket', type: 'standard', price: 790, isThursday: false},
    {product: 'ticket', type: 'standard', price: 790, isThursday: true},
    {product: 'ticket', type: 'concession', price: 540, isThursday: false},
    {product: 'ticket', type: 'concession', price: 540, isThursday: true},
    {product: 'ticket', type: 'concession', price: 540, isThursday: false},
    {product: 'extra', type: 'real3D', price: 90},
    {product: 'extra', type: 'real3D', price: 90},
    {product: 'extra', type: 'IMAX', price: 150},
    {product: 'extra', type: 'IMAX', price: 150},
];

test('Sample basket 1', () => {
    expect(checkout(sampleBasket1)).toMatchObject({
        totalPrice: 2350,
        savings: 1330,
        isThursdayOfferCount: 5,
    });
    expect(checkout(sampleBasket1)).not.toMatchObject({
        totalPrice: 2350,
        savings: 1330,
        isThursdayOfferCount: 2,
    });
    expect(checkout(sampleBasket1)).not.toMatchObject({
        totalPrice: 3680,
        savings: 0,
        isThursdayOfferCount: 5,
    });
});

test('Sample basket 2', () => {
    expect(checkout(sampleBasket2)).toMatchObject({
        totalPrice: 3680,
        savings: 0,
        isThursdayOfferCount: 0,
    });
    expect(checkout(sampleBasket2)).not.toMatchObject({
        totalPrice: 3680,
        savings: 0,
        isThursdayOfferCount: 5,
    });
    expect(checkout(sampleBasket2)).not.toMatchObject({
        totalPrice: 2350,
        savings: 1330,
        isThursdayOfferCount: 5,
    });
});

test('Sample basket 3', () => {
    expect(checkout(sampleBasket3)).toMatchObject({
        totalPrice: 3140,
        savings: 540,
        isThursdayOfferCount: 2,
    });
    expect(checkout(sampleBasket3)).not.toMatchObject({
        totalPrice: 3680,
        savings: 0,
        isThursdayOfferCount: 2,
    });
    expect(checkout(sampleBasket3)).not.toMatchObject({
        totalPrice: 1480,
        savings: 540,
        isThursdayOfferCount: 0,
    });
});
