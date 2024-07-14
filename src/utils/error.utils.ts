import { ERROR_MESSAGE } from '../constants/lang';

export interface errorApiResponse {
  status: number;
  data: object;
  message: Message | any;
}

interface Message {
  type: string;
  data: string;
}

interface ErrorResponse {
  status: number;
  data: object;
  message: string;
}

/**
 * Function to format the response.
 *
 * @param apiData ApiResponse
 * @returns {ApiResponse}
 */
export const errorFormatter = (apiData: errorApiResponse): ErrorResponse => {
  const { status, data, message } = apiData;

  return {
    status,
    data,
    message: handleErrorMessage({
      type: message.type || '',
      data: message.data || message
    })
  };
};

/**
 * Function to handle error message according to message.
 *
 * @param message object
 * @returns string
 */
export const handleErrorMessage = (message: Message): string => {
  switch (message.type) {
    case 'fetch':
      return ERROR_MESSAGE.FETCHED(message.data);

    case 'create':
      return ERROR_MESSAGE.CREATED(message.data);

    case 'update':
      return ERROR_MESSAGE.UPDATED(message.data);

    case 'delete':
      return ERROR_MESSAGE.DELETED(message.data);

    case 'verify':
      return ERROR_MESSAGE.VERIFIED(message.data);

    default:
      return message.data;
  }
};
