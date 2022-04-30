const ExplorerService = require('./../../lib/services/ExplorerService');
const Reader = require('./../../lib/utils/Reader');

describe('Test Suits for ExplorerService.js', () => {
    const explorers = Reader.readJsonFile('explorers.json');

    test('1) Filter by mission', () => {
        const results = ExplorerService.filterByMission(explorers, 'node');

        expect(results.length).toBe(10);
    });

    test('2) Get amout of explorers', () => {
        const results = ExplorerService.getAmountOfExplorers(explorers, 'node');

        expect(results).toBe(10);
    });

    test('3) Get explorers usernames', () => {
        const results = ExplorerService.getExplorersUsernames(explorers, 'node');

        expect(results).not.toBeUndefined();
    });
});