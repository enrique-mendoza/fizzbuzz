const ExplorerController = require('./../../lib/controllers/ExplorerController');

describe('Test Suits for ExplorerController.js', () => {
    const mission = 'node';

    test('1) Get explorers by mission', () => {
        const result = ExplorerController.getExplorersByMission(mission);

        expect(result).not.toBeUndefined();
    });

    test('2) Get explorer usernames by mission', () => {
        const result = ExplorerController.getExplorersUsernameByMission(mission);

        expect(result).not.toBeUndefined();
    });

    test('3) Get explorers amount by mission', () => {
        const result = ExplorerController.getExplorersAmountByMission(mission);

        expect(result).not.toBeUndefined();
    });
});