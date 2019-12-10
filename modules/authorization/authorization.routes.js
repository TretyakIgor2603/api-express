import Router from 'express-promise-router';
import AuthorizationController from './authorization.controller';
import validate from 'express-validation';
import userValidationSchema from '../../validation/user';


const authorizationRouter = Router();
const { register, signIn, signOut, forgotPassword, resetPassword, updatePassword } = new AuthorizationController();

authorizationRouter.post('/register', validate(userValidationSchema), register);
authorizationRouter.post('/sign-in', signIn);
authorizationRouter.get('/sign-out', signOut);
authorizationRouter.post('/forgot-password', forgotPassword);
authorizationRouter.put('/reset-password/:resetToken', resetPassword);
authorizationRouter.put('/update-password', updatePassword);

export default authorizationRouter;
