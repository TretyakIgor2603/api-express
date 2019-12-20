const Router = require('express-promise-router');
const authorizationRoutes = require('./authorization/authorization.routes');

const router = Router();

router.use('/auth', authorizationRoutes);

module.exports = router;
