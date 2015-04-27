if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([
    'express',
    'path',
    'serve-favicon',
    'morgan',
    'cookie-parser',
    'body-parser',
    './routes/index',
    './routes/users',
    './routes/authors',
    './routes/books',
    './routes/persons'
], function (express, path, favicon, logger, cookieParser, bodyParser, routes, users, authors, books, persons) {

    var app = express();

    var port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', routes);
    //app.use('/users', users);
    app.use('/authors', authors);
    app.use('/books', books);
    /* app.use('/persons', persons);*/

// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handlers

// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });


    /**
     * * Normalize a port into a number, string, or false.
     * @param val
     * @returns {*}
     */

    function normalizePort(val) {
        var port = parseInt(val, 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }

    return app;
});


//module.exports = app;
