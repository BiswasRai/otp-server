import { errorFormatter } from '@/utils/error.utils';
import logger from '@/utils/logger.utils';
import { responseFormatter } from '@/utils/response.utils';

interface OTPPayload {
  id: string;
  otp: number;
}
/**
 * Function to verify the OTP
 *
 * @param {OTPPayload} payload
 * @returns {Payload}
 */
export const verify = (payload: OTPPayload) => {
  logger.info(`Verifying the otp of Id: ${payload.id}`);
  // Failing knowingly for testing purpose
  if (payload.otp === 123456) {
    logger.error(`Invalid OTP request of Id: ${payload.id}`);

    return errorFormatter({
      status: 403,
      data: {
        info: `Invalid OTP ${payload.otp}`
      },
      message: { type: 'verify', data: 'OTP' }
    });
  }

  try {
    logger.info(`Successfully verified the otp of Id: ${payload.id}`);

    return responseFormatter({
      status: 200,
      data: payload,
      message: { type: 'verify', data: 'OTP' }
    });
  } catch (error) {
    logger.info(
      `Error while verifying the otp of Id: ${payload.id}, errorMessage: ${error}`
    );
    return errorFormatter({
      status: 500,
      data: {
        info: 'something went wrong, try again later'
      },
      message: { type: 'verify', data: 'verify' }
    });
  }
};
