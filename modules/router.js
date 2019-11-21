const express = require('express');

const router = express.Router();

const authorizationRoutes = require('./authorization/authorization.routes');

router.use('/auth', authorizationRoutes);

module.exports = router;
