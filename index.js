const Reader = require("./../fizzbuzz/lib/utils/Reader")

const explorers = Reader.readJsonFile("explorers.json")
// console.log(explorers)

const ExplorerService =  require('./../fizzbuzz/lib/services/ExplorerService')

console.log(ExplorerService)



// Aplicación del ExplorerService sobre la lista de explorers
// ExplorerService.filterByMission(explorers, "node");
// ExplorerService.getAmountOfExplorersByMission(explorers, "node");
// ExplorerService.getExplorersUsernamesByMission(explorers, "node");
