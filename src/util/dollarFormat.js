const dollarFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const toDollarFormat = num => dollarFormatter.format(num)

export default toDollarFormat