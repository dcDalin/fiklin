import { Router } from 'express';
import signupAction from '../actions/auth/signup.action';
import loginAction from '../actions/auth/login.action';
import emailexistsAction from '../actions/auth/emailexists.action';

const authRoutes = Router();

authRoutes.post('/signup', signupAction);
authRoutes.post('/login', loginAction);
authRoutes.post('/emailexists', emailexistsAction);

export default authRoutes;
