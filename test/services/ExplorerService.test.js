const ExplorerService = require('./../../lib/services/ExplorerService')
const explorers = [{mission: "node"}]

describe ("Test de Exploer Service ", () => {
    test("Requerimiento 1: Calcular los explrers en la mision  Node ",() =>{
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(1)   
    })
    // test("Requerieminto 2: Calcular el total de explorer en la mision Node ", ()=>{
        
    // })
})