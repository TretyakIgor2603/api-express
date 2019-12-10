import { authorizationLogger } from '../../configs/loggers';
import JsonRenderer from '../../utils/json-renderer';

class AuthorizationController extends JsonRenderer {
    /**
     * @description         Register user
     * @method              POST
     * @path                api/v1/auth/register
     * @access              public
     */
    register = async (req, res) => {
        this.success(res, { message: 'Register user' });
        authorizationLogger.info('Register user.');
    };

    /**
     * @description         Login user
     * @method              POST
     * @path                api/v1/auth/sign-in
     * @access              public
     */
    signIn = (req, res) => {
        this.success(res, { message: 'User login' });
        authorizationLogger.info('User login');
    };

    /**
     * @description         Log user out
     * @method              GET
     * @path                api/v1/auth/sign-out
     * @access              public
     */
    signOut = (req, res) => {
        this.success(res, { message: 'User log out' });
        authorizationLogger.info('User log out');
    };

    /**
     * @description         Forgot password
     * @method              POST
     * @path                api/v1/auth/forgot-password
     * @access              public
     */
    forgotPassword = (req, res) => {
        this.success(res, { message: 'Forgot password' });
        authorizationLogger.info('Forgot password');
    };

    /**
     * @description         Reset password
     * @method              PUT
     * @path                api/v1/auth/reset-password/:resetToken
     * @access              public
     */
    resetPassword = (req, res) => {
        this.success(res, { message: 'Reset password' });
        authorizationLogger.info('Reset password');
    };

    /**
     * @description         Update password
     * @method              PUT
     * @path                api/v1/auth/update-password
     * @access              private
     */
    updatePassword = (req, res) => {
        this.success(res, { message: 'Update password' });
        authorizationLogger.info('Update password');
    };
}

export default AuthorizationController;
