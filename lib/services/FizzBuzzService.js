class FizzBuzzService {
    static applyValidationInExplorer(explorer) {
        if(explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            return explorer.trick = 'FIZZBUZZ';
        }

        if(explorer.score % 3 === 0) {
            return explorer.trick = 'FIZZ';
        }

        if(explorer.score % 5 === 0) {
            return explorer.trick = 'BUZZ';
        }

        return explorer.trick = explorer.score;
    }
}

module.exports = FizzBuzzService;