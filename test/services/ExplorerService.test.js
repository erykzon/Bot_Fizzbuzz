const ExplorerService = require('./../../lib/services/ExplorerService')

describe ("Test de Exploer Service ", () => {
    test("Requerimiento 1: Calcular los explrers en el proyecto Node ",() =>{
        const explorers = [{mission: "node"}]
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(1)   
    })

})