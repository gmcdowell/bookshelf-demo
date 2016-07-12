/**
 * Created by greg on 12/07/16.
 */

var winston = require('winston');
var Config = require('config');
//require('winston-rollbar');


var logger = new (winston.Logger)({

  /*transports: [
    new winston.transports.Rollbar({
      rollbarAccessToken: Config.get('ROLLBAR_TOKEN'),
      rollbarConfig: {
        environment: process.env.NODE_ENV || 'development',
        host: (Config.get('API.hostname')).concat(Config.get('API.V1_URL_PREFIX')),
        scrubFields: ['password', 'access_token', 'refresh_token', 'client_id', 'client_secret'],
        scrubHeaders: ['Authorization']
      },
      metadataAsRequest: false, // false is default
      level: 'error', // warn is default,
      silent: false, // on/off switch
      handleExceptions: true,
      name: 'rollbar'
    })
  ],*/
  exitOnError: false
});

// filter/rewrite passwords
logger.rewriters.push(function(level, msg, meta) {
  if(meta.password) delete meta.password;

  return meta;
});

// customize settings for the various environments
switch(process.env.NODE_ENV || 'development'){
  /*case 'qa':
    logger.transports.rollbar.level = 'warn';
    break;*/
  case 'development':
    logger.add(winston.transports.Console, {json: false, colorize: true});
    break;
}

module.exports = logger;