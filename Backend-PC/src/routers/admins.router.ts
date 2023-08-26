import express from 'express';
import { login } from '../controllers/admin.controller';


const router = express.Router();
//login
// http://localhost:3000/users/login
router.post('/login', login);





export default router;