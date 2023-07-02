const express = require('express');
const router = express.Router();
const views = require('./views');

router.route('/auth/users').get(views.createUser);

module.exports = router;
