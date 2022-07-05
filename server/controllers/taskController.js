const { Task } = require('../models')

const getAll = async (req, res) => {
    const allTasks = await Task.findAll();
    return res.status(200).json(allTasks)
}

const create = async (req, res) => {
    const { description } = req.body;

    if(!description) return res.status(400)

    const newTask = await Task.create({description});
    return res.status(201).json(newTask)
}

const update = async (req, res) => {
    const { id, description } = req.body;
    const updtTask = await Task.update(description, {where: { id } })
    console.log(updtTask)
    return res.status(200).json(updtTask)
}

const remove = async (req, res) => {
    const { id } = req.params;
    await Task.destroy({where: {id}});
    return res.status(200).json({message: "Task deleted"})
}

module.exports = {
    getAll,
    create,
    update,
    remove
}