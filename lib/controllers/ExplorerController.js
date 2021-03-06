const Reader = require("./../../lib/utils/Reader");

const ExplorerService =  require("./../../lib/services/ExplorerService");

const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController{
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(explorers, mission);
      
    }
    static getExplorersUsernamesByMission(mission){
        // const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static ValidationInNumber(score){
        return FizzbuzzService.applyValidationInNumber(score)
    }
}

module.exports = ExplorerController;