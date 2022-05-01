const FizzBuzzService = require('./../../lib/services/FizzBuzzService');

describe('Test Suits for FizzBuzzService', () => {
    test('1) Trick === FIZZ when score % 3', () => {
        const explorer = {
            name: 'Woopa',
            score: 3,
        };

        FizzBuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe('FIZZ');
    });

    test('2) Trick === BUZZ when score % 5', () => {
        const explorer = {
            name: 'Woopa',
            score: 5,
        };

        FizzBuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe('BUZZ');
    }); 

    test('3) Trick === FIZZBUZZ when score % 3 and score % 5', () => {
        const explorer = {
            name: 'Woopa',
            score: 15,
        };

        FizzBuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe('FIZZBUZZ');
    });

    test('4) Trick === 1 when !score % 3 and !score % 5', () => {
        const explorer = {
            name: 'Woopa',
            score: 1,
        };

        FizzBuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe(1);
    });

    test('5) Result === FIZZ when number % 3', () => {
        const result = FizzBuzzService.applyValidationInNumber(3);

        expect(result).toBe('FIZZ');
    });

    test('6) Result === BUZZ when number % 5', () => {
        const result = FizzBuzzService.applyValidationInNumber(5);

        expect(result).toBe('BUZZ');
    });

    test('7) Result === FIZZBUZZ when number % 3 and number % 5', () => {
        const result = FizzBuzzService.applyValidationInNumber(15);

        expect(result).toBe('FIZZBUZZ');
    });

    test('8) Result === 1 when !number % 3 and !number % 5', () => {
        const result = FizzBuzzService.applyValidationInNumber(1);

        expect(result).toBe(1);
    });
});