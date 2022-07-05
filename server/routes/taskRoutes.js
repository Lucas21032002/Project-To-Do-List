const express = require('express');

const controller = require('../controllers/taskController');

const taskRouter = express.Router();

taskRouter.get('/', controller.getAll)
taskRouter.post('/', controller.create);
taskRouter.put('/:id', controller.update);
taskRouter.delete('/:id', controller.remove);

module.exports = taskRouter;