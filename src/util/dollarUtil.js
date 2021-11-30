const numeral = require('numeral')

const dollarFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const toDollarFormat = num => dollarFormatter.format(num)

const shortenDollar = num => numeral(num).format('0.0a')

export { toDollarFormat, shortenDollar };
