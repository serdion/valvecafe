module.exports = function (req, res) {
    req.collection.find({}, {sort: {_id: 1}, fields: req.visibility})
            .then(function (result) {
                res.send(result);
            });
};
