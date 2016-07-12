/**
 * Created by greg on 12/07/16.
 */

import App from './server';
import * as Log from 'winston';

//App.listen(App.get('port'), function () {
App.listen(3000, function () {
  Log.log('API running on port: %s & environment %s', App.get('port'), process.env.NODE_ENV || 'development');
});
