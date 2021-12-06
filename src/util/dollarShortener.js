const dollarShortener = value => {
    value = value + 0
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(3));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(2);
    }
    return shortValue+suffixes[suffixNum];
}

export default dollarShortener