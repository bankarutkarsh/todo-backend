const Gone = require('../Database/Gone');

exports.getGone = (req,res) => {
    Gone.find()
    .then(response => {
        res.status(200).json({message: "Gone list fetched successfully", Gone: response})
    })
    .catch(err => res.status(500).json({error: err}))
}