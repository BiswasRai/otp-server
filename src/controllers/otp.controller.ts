import { verify } from '@/services/otp.service';
import { Request, Response } from 'express';

/**
 * Controller to verify OTP.
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<Response>}
 */
export const verifyOTP = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await verify(req.body);

  return res.status(response.status).json(response);
};
