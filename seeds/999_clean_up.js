import status from 'node-status';
exports.seed = function(knex, Promise) {

  return Promise.try(() => {
    //status.removeAll();
    status.stop();
    return;
  })
};
