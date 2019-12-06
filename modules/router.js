import Router from 'express-promise-router';
import authorizationRoutes from './authorization/authorization.routes';


const router = Router();

router.use('/auth', authorizationRoutes);

export default router;
