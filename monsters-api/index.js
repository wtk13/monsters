const express = require('express');
const config = require('./config');
const Monsters = require('./monsters');
const bodyParser = require('body-parser');

const app = express();

const monsters = new Monsters();

app.use(config.staticDir, express.static('static'));
app.use(bodyParser.json());

app.use(config.apiPath, (request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "application/json");
    next();
});

app.get(config.apiPath, (request, response) => {
    response.status(200).send({
        data: {
            message: "Hello, Monsters API! 👋"
        }
    });
});

app.get(`${config.apiPath}/monsters`, (request, response) => {
    response.status(200).send({
        data: monsters.getMonstersList()
    });
});

app.get(`${config.apiPath}/monster/:name`, (request, response) => {
    const monster = monsters.getMonster(request.params.name);

    if(monster) {
        response.status(200).send({
            data: monster
        });
        return;
    }

    response.status(404).send({error: `"${request.params.name}" monster not found 🙁`});
});

app.get(`${config.apiPath}/teapot`, (request, response) => {
    response.status(418).send({});
});

app.listen(config.port, () => {
    console.log(`It's alive! http://localhost:${config.port}${config.apiPath} 🚀`);
});
