import { Router } from 'express';
import otpRouter from '@/routes/otp.route';

const router = Router();

router.use('/otp', otpRouter);

export default router;
