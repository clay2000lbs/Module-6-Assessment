const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    // CODE HERE
    let bots = [1, 2, 3]
    let shuffleValue = shuffleArray(bots)

    test('shuffleArray should return an array', () => {
        expect(typeof shuffleValue).toEqual('array')
    })

    test('returned array should be the same length as as the argument array', () => {
        expect(bots.length == shuffleArray.length)
    })

})