const express = require('express');

const { controllers } = require('../controllers');

const router = express.Router();

router.get('/items/:uid', controllers.getItemDetails);
router.get('/items', controllers.getItemsList);

module.exports = router;