const Done = require('../Database/Done');

exports.getDone = (res,req) => {
    Done.find()
    .then(response => {
        res.status(200).json({message: "Done list fetched successfully", Done: response})
    })
    .catch(err => res.status(500).json({error: err}))
}