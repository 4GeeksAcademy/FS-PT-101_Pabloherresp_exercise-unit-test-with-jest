const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (input) => {
    return input*oneEuroIs.JPY/oneEuroIs.USD
}

const fromEuroToDollar = (input) => {
    return input*oneEuroIs.USD
}

const fromYenToPound = (input) => {
    return input*oneEuroIs.GBP/oneEuroIs.JPY
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound}