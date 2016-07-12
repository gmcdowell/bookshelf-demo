/**
 * Created by greg on 12/07/16.
 */

import express from 'express';
import controller from '../controllers/city';

let router = express.Router();

router.route('/')
  .get(controller.list)
  .post(controller.create);

router.route('/:id')
  .get(controller.find)
  .patch(controller.update)
  .delete(controller.destroy);

export default router;


