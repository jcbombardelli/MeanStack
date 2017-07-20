var api = require('../../../api/sample')

module.exports  = function(app) {
    
    app.route('/api/v1/sample')
        .post(api.add)
        .get(api.list);

    app.route('/api/v1/sample/:sampleId')
        .delete(api.remove)
        .get(api.find)
        .put(api.update);
};