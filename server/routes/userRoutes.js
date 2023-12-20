import express from 'express';
import {registerUser, loginUser} from '../routes/userRoutes';
const router = express.Router();


router.post('/register', registerUser)
router.post('/login', loginUser);

export default userRoutes;