const validateBasket = (basket) => {
    const summary = basket.reduce((accumulator, currentValue) => {
        if (currentValue.product === 'ticket') {
            accumulator.tickets++;
        }
        if (currentValue.product === 'extra') {
            accumulator.extras[currentValue.type]++;
        }
        return {...accumulator};
    }, {tickets: 0, extras: {real3D: 0, IMAX: 0}});
    if (summary.extras.real3D > summary.tickets || summary.extras.IMAX > summary.tickets) {
        return false;
    }
    return true;
};

export const checkout = (basket) => {
    try {
        if (!validateBasket(basket)) throw new Error('basket invalid');
        const summary = basket.reduce((accumulator, currentValue) => {
            if (currentValue.isThursday) {
                accumulator.isThursdayOfferCount++;
                if (accumulator.isThursdayOfferCount % 3 > 1) {
                    accumulator.savings = accumulator.savings + currentValue.price;
                } else {
                    accumulator.totalPrice = accumulator.totalPrice + currentValue.price;
                }
            } else {
                accumulator.totalPrice = accumulator.totalPrice + currentValue.price;
            }
            return {...accumulator};
        }, {totalPrice: 0, savings: 0, isThursdayOfferCount: 0});
        return summary;
    } catch (e) {
        return e;
    }
};