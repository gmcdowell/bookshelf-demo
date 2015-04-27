/**
 * Created by greg on 28/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['express', '../models/index'], function (express, Models) {

    var router = express.Router();

    router.get('/', function (req, res, next) {

        // tapping into Knex query builder to modify query being run
        return Models.Book.query(function (qb) {
            /* qb.innerJoin('persons', 'persons.id', 'authors.person_id');
             qb.select('persons.*');*/
            qb.limit(25);
        }).fetchAll({
            debug: true
        }).then(function (result) {
            res.json(result);
        });

    });

    router.get('/:id', function (req, res, next) {

        // eager loading related 'books' on 'author' object
        return Models.Book.where({id: req.params.id})
            .fetch({withRelated: ['author', 'owners', 'publisher.contact'], debug: true})
            .then(function (result) {
                res.json(result);
            });

    });

    return router;
});