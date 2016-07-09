/**
 * Created by greg on 28/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['express', '../models/index'], function (express, Models) {

    var router = express.Router();

    router.get('/', function (req, res, next) {

        return Models.Person.query(function (qb) {
            qb.limit(25);
        }).fetchAll({
            debug: true
        }).then(function (result) {
            res.json(result);
        });
    });

    router.get('/:id', function (req, res, next) {

        return Models.Person.where({id: req.params.id})
            .fetch({withRelated: ['books', 'publish'], debug:true})
            .then(function(result){
                res.json(result);
            });
    });

    return router;
});