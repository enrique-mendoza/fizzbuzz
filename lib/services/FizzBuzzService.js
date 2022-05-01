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

    static applyValidationInNumber(number) {
        if(number % 5 === 0 && number % 3 === 0) {
            return 'FIZZBUZZ';
        }

        if(number % 3 === 0) {
            return 'FIZZ';
        }

        if(number % 5 === 0) {
            return 'BUZZ';
        }

        return number;
    }
}

module.exports = FizzBuzzService;