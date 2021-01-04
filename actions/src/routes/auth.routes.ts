import { Router } from 'express';
import onCreateAction from '../actions/auth/onCreate.action';

const authRoutes = Router();

authRoutes.post('/oncreate', onCreateAction);

export default authRoutes;
