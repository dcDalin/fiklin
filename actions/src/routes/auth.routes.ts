import { Router } from 'express';
import signupAction from '../actions/auth/signup.action';
import emailexistsAction from '../actions/auth/emailexists.action';

const authRoutes = Router();

authRoutes.post('/signup', signupAction);
authRoutes.post('/emailexists', emailexistsAction);

export default authRoutes;
