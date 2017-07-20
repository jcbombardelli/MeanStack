var path = require('path');

module.exports = function(app){
    
    require('./api/v1/sample.route')(app);

    app.all("/", function(req,res){
        res.render('../../client/src/index.html');
    });

    
};