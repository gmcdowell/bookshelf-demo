/**
 * Created by greg on 28/04/15.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['express', '../src/models/index'], function (express, Models) {

    var router = express.Router();

    router.get('/', function (req, res, next) {

        // tapping into Knex query builder to modify query being run
        return Models.Author.query(function (qb) {
            qb.innerJoin('persons', 'persons.id', 'authors.person_id');
            qb.select('persons.*');
            qb.limit(25);
        }).fetchAll({
            debug: true
        }).then(function (result) {
            res.json(result);
        });

    });

    router.get('/:id/books', function (req, res, next) {

        // eager loading related 'books' on 'author' object
        return Models.Author.where({id: req.params.id})
            .fetch({withRelated: ['person', 'books'], debug: true})
            .then(function (result) {
                res.json(result);
            });

    });

    return router;
});


