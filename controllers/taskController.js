import { todoItems, index } from "../db"

export const getTask = async (req, res) => {
    return res.json({ data: todoItems, status: "success" })
}

export const postTask = async (req, res) => {
    todoItems.push({
        index: index++,
        value: req.body.value,
        done: false,
    })
    return res.json({ data: todoItems, status: 'success' })
}

export const deleteTask = async (req, res) => {
    const todoItems = todoItems.filter(item => item.index != +req.params.id)
    return res.json({ data: todoItems, status: 'success' })
}

export const patchTask = async (req, res) => {
    todoItems.filter(item => item.index == +req.params.id)[0].done = req.body.done
    return res.json({ data: todoItems, status: 'success' })
}