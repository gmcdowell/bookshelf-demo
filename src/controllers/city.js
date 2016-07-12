/**
 * Created by greg on 12/07/16.
 */

import Models from '../models/index';

export default {
  list(req, res){
    return Models.City
      .fetchAll()
      .then(records => {
        res.status(200).json(records);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  },

  find(req, res){
    return Models.City
      .forge('id', req.params.id)
      .fetch()
      .then(record => {
        res.status(200).json(record);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  },

  create(req, res){
    return Models.City
      .forge(req.body)
      .save(null, {method: 'insert', require:true})
      .then(record => {
        res.status(201).json(record);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  },

  update(req, res){
    return Models.City
      .forge('id', req.params.id)
      .save(req.body, {method: 'update', patch: true})
      .then(record => {
        res.status(200).json(record);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  },

  destroy(req, res){
    return Models.City
      .forge('id', req.params.id)
      .destroy({require:true}) // throws NoRowsDeletedError if no rows affected
      .then(() => {
        res.status(200).end();
      })
      .catch(err => {
        res.status(400).json(err);
      })
  }
}