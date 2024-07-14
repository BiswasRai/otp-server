import { object, string, number } from 'yup';
import { VALIDATION_MESSAGE } from '@/constants/lang';
import { OTP_VALID_LENGTH } from '@/constants/magicNumber';

export const otpVerifySchema = object().shape({
  otp: number()
    .typeError('Please enter valid number')
    .positive(VALIDATION_MESSAGE.REQUIRED('OTP'))
    .required('Cannot be blank')
    .test(
      'len',
      `OTP must be exactly ${OTP_VALID_LENGTH} digits`,
      val => val.toString().length === OTP_VALID_LENGTH
    ),
  id: string().required(VALIDATION_MESSAGE.REQUIRED('id'))
});
