const Reader = require("./../../lib/utils/Reader");
const ExplorerService =  require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const ExplorerController = require("../../lib/controllers/ExplorerController");
// const explorers = [{mission: "node", githubUsername: "ajolonauta1", mission: "node"}];

const explorers = Reader.readJsonFile("explorers.json");
const filterByMission = explorers.filter((explorer) => explorer.mission == "node");

describe("Realizando test de Controllers",() =>{
    test("Realizando test de requerimiento filterbymission", () => {
        const explorerByMission = ExplorerController.getExplorersByMission("node");
        expect(explorerByMission).toEqual(filterByMission);
    });
    test("Realizando test de requerimiento filterUserNames",() => {
        // const filterUserNames = explorers.filter((explorer) => explorer.mission === "node")
        const username = filterByMission.map( exp => exp.githubUsername);
        const ExplorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(ExplorersUsernamesByMission).toEqual(username);
    });
    test("Realizando test de requerimiento Amountbymission",()=>{
        const ExplorersAmonutByMission = ExplorerController.getExplorersAmonutByMission("node");
        expect(ExplorersAmonutByMission).toBe(10);
    });
});
