const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexControllers');

router.get('/', controller.list);

router.post('/add', controller.save);

module.exports = router;