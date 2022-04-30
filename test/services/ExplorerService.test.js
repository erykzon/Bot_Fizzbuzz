const ExplorerService = require('./../../lib/services/ExplorerService')

describe ("Test de Exploer Service ", () => {
    test("Requerimiento 1: Filtrar los explrers en la mision  Node ",() =>{
        const explorers = [{mission: "node"}]
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        // expect(explorersInNode.mission).toMatch(/node/)   
        expect(explorersInNode.mission).toMatch(explorers.mission)
        expect(explorersInNode.mission).toBe("node")

    })
    test("Requerieminto 2: Calcular el total de explorer en la mision Node ", ()=>{
        const explorers = [{mission: "node"}]
        const Amount = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        expect(Amount.length).toBe(1)
    })
})