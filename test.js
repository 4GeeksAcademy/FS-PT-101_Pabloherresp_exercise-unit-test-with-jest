const {sum} = require('./app.js')


test('Add 14 + 9 to equal 23', () => {
    let total = sum(14,9)
    expect(total).toBe(23)
})

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(dollars).toBe(expected);
})

test("1.07 dollar should be 156.5 yen", function() {
    const {fromDollarToYen } = require('./app.js')

    const yens = fromDollarToYen(1.07)
    
    const expected = (1.07/1.07)*156.5

    expect(yens).toBe(expected)
})

test("156.5 yen should be 0.87 pounds", function(){
    const {fromYenToPound} = require('./app.js')

    const pounds = fromYenToPound(156.5)

    const expected = (156.5/156.5)*0.87

    expect(pounds).toBe(expected)
})