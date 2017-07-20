var MongoClient = require('mongodb').MongoClient;

const urlDatabase = 'mongodb://mean:mean@ds111103.mlab.com:11103/mean-reference-sample';
var db = null;



module.exports = function(){

    MongoClient.connect(urlDatabase, function (err, db) {
        if (err) { throw err; }
        console.log('banco de dados conectado: ' + db.databaseName);
    });

};


