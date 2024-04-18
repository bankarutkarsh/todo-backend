const Todo = require('../Database/todo');

exports.getTodo = (res,req) => {
    Todo.find()
    .then(response => {
        res.status(200).json({message: "Todo list fetched successfully", todo: response})
    })
    .catch(err => res.status(500).json({error: err}))
}

// exports.postTask = (res,req) => {
//     let newTask = {
//         task: req.body.task,
//         description: req.body.description
//     }

// }