const ExplorerController = require('./controllers/ExplorerController');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET METHODS
app.get('/', (req, res) => {
    res.json({message: 'FizzBuzz API Welcome!'});
});

app.get('/v1/explorers/:mission', (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});

app.get('/v1/explorers/amount/:mission', (req, res) => {
    const mission = req.params.mission;
    const amountExplorersInMission = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission, quantify: amountExplorersInMission});
});

app.get('/v1/explorers/usernames/:mission', (req, res) => {
    const mission = req.params.mission;
    const filterByMission = ExplorerController.getExplorersUsernameByMission(mission);
    res.json({mission, explorers: filterByMission});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});