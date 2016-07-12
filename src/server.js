/**
 * Created by greg on 12/07/16.
 */


import express from 'express';
import bodyParser from 'body-parser';
import cors from'cors';
import Config from 'config';
import winston from '../config/_winston';
import expressWintston from 'express-winston';
//import Routes from './routes/index';


const app = express();

// Allow CORS
// https://www.npmjs.com/package/cors
app.use(cors()); // simple allow all config
app.options('*', cors()); // enables pre-flight requests e.g. DELETE, PATCH
app.use(bodyParser.urlencoded({extended: false})); // pull information from html in POST
app.use(bodyParser.json()); // support Json parsing
//app.use(passport.initialize()); // enable passport authentication

// Setup Winston http request logging
app.use(expressWintston.logger({winstonInstance: winston}));

/**
 * OAuth2 Authorization
 *
 * - /login -> uses LDAP auth call to MacVad
 */
//app.use(['/oauth/token', '/oauth/login'], OAuth2.Token);
//app.use('/oauth/refresh', OAuth2.Refresh);


/**
 * Route API v1
 */

// Routes
/*app.use([`${Config.get('API.URL_PREFIX')}/continents`],
  Routes.Continents
);*/


// Setup Winston error logging
app.use(expressWintston.errorLogger({winstonInstance: winston}));


/**
 * Exceptions & Errors
 */
app.use(function (err, req, res, next) {
  res.status(500).json({code: 500, message: 'Server error encountered'});
});

/**
 * Unknown Routes
 */
app.use(function (req, res) {
  res.status(404).json({code: 404, message: 'Resource not found'});
});

app.listen(Config.get('API.PORT'), Config.get('API.HOSTNAME'));

export default app;
