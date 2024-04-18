const Progress = require('../Database/progress');

exports.getProgress = (res,req) => {
    Progress.find()
    .then(response => {
        res.status(200).json({message: "Progress list fetched successfully", Progress: response})
    })
    .catch(err => res.status(500).json({error: err}))
}