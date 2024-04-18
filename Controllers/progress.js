const Progress = require('../Database/progress');

exports.getProgress = (req,res) => {
    Progress.find()
    .then(response => {
        res.status(200).json({message: "Progress list fetched successfully", Progress: response})
    })
    .catch(err => console.log(err));
}