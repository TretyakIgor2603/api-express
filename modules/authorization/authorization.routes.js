const express = require('express');

const authorizationRouter = express.Router();

const AuthorizationController = require('./authorization.controller');
const { register, signIn, signOut, forgotPassword, resetPassword, updatePassword } = new AuthorizationController();

authorizationRouter.post('/register', register);
authorizationRouter.post('/sign-in', signIn);
authorizationRouter.post('/sign-out', signOut);
authorizationRouter.post('/forgot-password', forgotPassword);
authorizationRouter.post('/reset-password/:resetToken', resetPassword);
authorizationRouter.post('/update-password', updatePassword);

module.exports = authorizationRouter;
