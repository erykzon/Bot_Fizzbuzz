const Reader = require("./../fizzbuzz/lib/utils/Reader")

const ExplorerService =  require('./../fizzbuzz/lib/services/ExplorerService')

const explorers = Reader.readJsonFile("explorers.json")
// console.log(explorers)
console.log(ExplorerService.filterByMission(explorers,"node"))