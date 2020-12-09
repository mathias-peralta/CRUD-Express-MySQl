const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexControllers');

router.get('/', controller.list);

router.post('/add', controller.save);

router.get('/delete/:id', controller.delete);

router.get('/update/:id', controller.update);

router.post('/edit/:id', controller.edit);
module.exports = router;