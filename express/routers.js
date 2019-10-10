//Express and Router Initializtion
const express = require('express');
const apiRouter = express.Router();

//require files section
var dashBoardController = require('./controllers/dashBoard-controller');

//Authentication route
apiRouter.get('/getProfileList',dashBoardController.getProfileList);


module.exports = apiRouter;