const ExplorerService = require('./../../lib/services/ExplorerService')
const explorers = [{mission: "node"}]

describe ("Test de Exploer Service ", () => {
    test("Requerimiento 1: Filtrar los explrers en la mision  Node ",() =>{
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.mission).toMatch(/node/)   
        // expect(explorersInNode).toMatch("node")   
    })
    test("Requerieminto 2: Calcular el total de explorer en la mision Node ", ()=>{
        const Amount = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        expect(Amount.length).toBe(1)
    })
})