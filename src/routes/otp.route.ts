import { verifyOTP } from '@/controllers/otp.controller';
import { validationPayload } from '@/middleware/validation.middleware';
import { otpVerifySchema } from '@/validation/otp.validation';
import { Router } from 'express';

const otpRouter = Router();

otpRouter.post('/verify', validationPayload(otpVerifySchema), verifyOTP);

export default otpRouter;
