import express from 'express';
import { createTodo, deleteTodoById, getAllTodos, getTodoById, updataTodoById } from '../controllers/TodoController.js';

const router = express.Router()

router.post("/todo", createTodo)
router.get("/todos", getAllTodos)
router.delete("/todo/:id", deleteTodoById)
router.put("/todo/:id", updataTodoById)
router.get("/todo/:id", getTodoById)

export default router