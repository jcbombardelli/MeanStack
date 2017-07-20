var db = require('mongojs')('mongodb://mean:mean@ds111103.mlab.com:11103/mean-reference-sample', ['sample']);

var api = {}

api.add = function (req, res) {
    var sample = req.body;
    delete sample._id;
    db.insert(sample, function (err, newDoc) {
        if (err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });
};

api.find = function (req, res) {
    db.sample.findOne({ _id: req.params.sampleId }, function (err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.update = function (req, res) {
    console.log('Parâmetro recebido:' + req.params.sampleId);
    db.update({ _id: req.params.sampleId }, req.body, function (err, numReplaced) {
        if (err) return console.log(err);
        if (numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });
};

api.list = function (req, res) {
    db.sample.find(function (err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.remove = function (req, res) {

    db.remove({ _id: req.params.sampleId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if (numRemoved) res.status(200).end();
        res.status(500).end();
    });
};


module.exports = api;