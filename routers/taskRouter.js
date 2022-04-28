import { Router } from "express";
import { taskController } from "../controllers";

const taskRouter = Router();

taskRouter.get('/', taskController.getTask);
taskRouter.post('/', taskController.postTask);
taskRouter.delete('/:id', taskController.deleteTask);
taskRouter.patch('/:id', taskController.patchTask);

export {taskRouter};