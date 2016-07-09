import status from 'node-status';

exports.seed = function(knex, Promise) {

  return Promise.try(() => {
    status.start();
    return;
  }); // called only in first seed
};
