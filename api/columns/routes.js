const express = require('express');
const { isAuthenticated } = require('../middlewares/auth/services');

const controller = require('./controller');

const {
  createColumnHandler,
  getAllColumnHandler,
  updateColumnHandler,
  deleteColumnHandler,
} = controller;

const router = express.Router();

router.get('/', getAllColumnHandler);
router.post('/', isAuthenticated, createColumnHandler);
router.patch('/:id', isAuthenticated, updateColumnHandler);
router.delete('/:id', isAuthenticated, deleteColumnHandler);

module.exports = router;
