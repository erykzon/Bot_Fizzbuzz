const express = require("express")
const ExplorerController = require("./controllers/ExplorerController")
const app = express()
app.use(express.json())
const port = 3000


app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
}); 

//requerimientos

app.get("/v1/explorers/:mission", (request, response) => {
    const { mission } = request.params;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const { mission } = request.params;
    const amountOfExplorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({ mission: request.params.mission, quantity : amountOfExplorersInMission });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const { mission } = request.params;
    const ExplorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({ mission: request.params.mission, explorers : ExplorersUsernamesByMission });
});