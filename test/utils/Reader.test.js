const Reader = require('./../../lib/utils/Reader');

describe('Test Suits for Reader.js', () => {
    test('1) Read json file', () => {
        const explorers = Reader.readJsonFile('explorers.json'); 

        expect(explorers).not.toBeUndefined();
    });
});