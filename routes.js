const express = require('express');

const todoController = require('./Controllers/todo');
const progressController = require('./Controllers/progress');
const DoneController = require('./Controllers/Done');
const GoneController = require('./Controllers/Gone');
const UsersController = require('./Controllers/User');

const route = express.Router();

route.get('/todo', todoController.getTodo);
route.get('/progress', progressController.getProgress);
route.get('/Gone', GoneController.getGone);
route.get('/Done', DoneController.getDone);
route.get('/users', UsersController.getUsers);

module.exports = route;