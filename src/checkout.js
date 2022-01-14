export const checkout = (basket) => {
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
        return accumulator;
    }, {totalPrice: 0, savings: 0, isThursdayOfferCount: 0});
    return summary;
};