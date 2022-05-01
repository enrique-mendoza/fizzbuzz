const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzBuzzService');
const Reader = require('../utils/Reader');

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile('explorers.json');
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernameByMission(mission) {
        const explorers = Reader.readJsonFile('explorers.json');
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile('explorers.json');
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static applyFizzbuzz(score) {
        return FizzbuzzService.applyValidationInNumber(score);
    }
}

module.exports = ExplorerController;