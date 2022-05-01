
class ExplorerService {
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter(explorer => { return explorer.mission === mission
    })
    return explorerByMission
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorerByMission = explorers.filter(explorer => { return explorer.mission === mission
        })
         const explorerLength = explorerByMission.length
            return explorerLength
        }
        
    static getExplorersUsernamesByMission(explorers, mission){
        const username = explorers.filter((explorer) =>  explorer.mission === "node")
        return username.map(exp => exp.githubUsername)
    }
            
}
        


module.exports = ExplorerService