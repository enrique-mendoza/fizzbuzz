// Clase anterior con la que obtenemos los explorers
const Reader = require('./lib/utils/Reader');
const ExplorerService = require('./lib/services/ExplorerService');
const FizzBuzzService = require('./lib/services/FizzBuzzService');

const explorers = Reader.readJsonFile('explorers.json');

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, 'node');
ExplorerService.getAmountOfExplorersByMission(explorers, 'node');
ExplorerService.getExplorersUsernamesByMission(explorers, 'node');

const explorer1 = {name: 'Explorer1', score: 1};
FizzBuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: 'Explorer3', score: 3};
FizzBuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: 'Explorer5', score: 5};
FizzBuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: 'Explorer15', score: 15};
FizzBuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}