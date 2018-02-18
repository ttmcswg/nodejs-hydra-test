var mongoose = require('mongoose'),
    Task = require('./api/models/itemListModel'),
    Test = require('./api/models/testModel');
// bodyParser = require('body-parser');

const hydraExpress = require('hydra-express'),
    hydra = hydraExpress.getHydra(),
    config = require('./config.json');

mongoose.connect('mongodb://admin:admin@ds239638.mlab.com:39638/tasks');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

hydraExpress.init(`./config.json`, () => {
    hydraExpress.registerRoutes({
        '/v1/hello': require('./api/routes/itemListRoutes')
    });
})
    .then((serviceInfo) => {
        let logEntry = `Started ${hydra.getServiceName()} (v.${hydra.getInstanceVersion()})`;
        console.log(logEntry);
        console.log(serviceInfo);
    })
    .catch((err) => {
        console.log('err', err);
    });