import { envConfig } from '@/config/environment.config';
import router from '@/routes/index';
import logger from '@/utils/logger.utils';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' })); // Can be only enable for the allowed resources
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

app.listen(envConfig.PORT, () => {
  logger.info(`Server started at ${envConfig.PORT}`);
});

export default app;
