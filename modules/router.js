const Router = require('express-promise-router');

const router = Router();

const authorizationRoutes = require('./authorization/authorization.routes');

router.use('/auth', authorizationRoutes);

module.exports = router;
