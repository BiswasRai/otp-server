import { Request, Response, NextFunction } from 'express';

import { AnySchema } from 'yup';
import { errorFormatter } from '@/utils/error.utils';

/**
 * Function to validate the payload.
 *
 * @param {Object} schema
 * @returns {Boolean}
 */
export const validationPayload =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await schema.validate(body);

      next();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json(
          errorFormatter({
            status: 400,
            data: {
              info: error.message
            },
            message: error.message
          })
        );
      }
    }
  };
