const User = require('../Database/User');

exports.getUsers = (req,res) => {
    User.find()
    .then(response => {
        res.status(200).json({message: "Todo list fetched successfully", users: response})
    })
    .catch(err => res.status(500).json({error: err}))
}
