const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");



class ExplorerService {
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission.length;
    }
        
    static getExplorersUsernamesByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission.map(exp => exp.githubUsername);
    }
            
}
        


module.exports = ExplorerService;