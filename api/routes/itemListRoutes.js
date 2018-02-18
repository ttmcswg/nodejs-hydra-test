
'use strict';
var itemListController = require('../controllers/itemListController');

const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();
const express = hydraExpress.getExpress();
const ServerResponse = hydra.getServerResponseHelper();
let serverResponse = new ServerResponse();

let api = express.Router();

api.get('/', (req, res) => {
    serverResponse.sendOk(res, {
        result: {
            msg: `hello from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`
        }
    });
});

api.get('/test', (req, res) => {
    res.json({
        result: {
            msg: `hello from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`
        }
    });
});

api.get('/tasks', itemListController.listAllItems);
api.post('/tasks', itemListController.createNewItem);
api.get('/tasks/:id', itemListController.getItem);
api.put('/tasks/:id', itemListController.updateItem);
api.delete('/tasks/:id', itemListController.deleteItem);


module.exports = api;