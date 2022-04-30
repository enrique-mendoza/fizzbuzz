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

    test('4) Trick === FIZZBUZZ when score % 3 and score % 5', () => {
        const explorer = {
            name: 'Woopa',
            score: 1,
        };

        FizzBuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe(1);
    });
});