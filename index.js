const Reader = require("./lib/utils/Reader");

const explorers = Reader.readJsonFile("explorers.json");
// console.log(explorers)

const ExplorerService =  require("./lib/services/ExplorerService");
console.log(ExplorerService);

const FizzbuzzService = require("./lib/services/FizzbuzzService");

console.log(FizzbuzzService);


// Aplicación del ExplorerService sobre la lista de explorers
// ExplorerService.filterByMission(explorers, "node");
// ExplorerService.getAmountOfExplorersByMission(explorers, "node");
// ExplorerService.getExplorersUsernamesByMission(explorers, "node");
