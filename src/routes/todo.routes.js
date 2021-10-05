const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.js");

router.get("/", async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
} );

router.get("/:id", async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
} );

router.post("/", async(req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({ title, description });
    await todo.save();
    res.json("Tarea creada");
} );

router.put("/:id", async(req, res) => {
    const { title, description } = req.body;
    const newTodo = { title, description };
    await Todo.findByIdAndUpdate(req.params.id, newTodo);
    res.json("Tarea actualizada");
} );

router.delete("/:id", async(req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json("Tarea eliminada");
} );

module.exports = router;