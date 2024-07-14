import { config } from 'dotenv';

config();

export const envConfig = {
  PORT: process.env.PORT ?? '',
  NODE_ENV: process.env.NODE_ENV ?? '',
  LOG_DIR: process.env.LOG_DIR ?? '',
  LOG_ERROR: process.env.LOG_ERROR ?? '',
  LOG_LEVEL: process.env.LOG_LEVEL ?? ''
};
