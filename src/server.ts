import logger from './utils/logger.js';
import { APP_CONFIG } from './config/env.config.js';
import app from './app.js';

app
  .listen(APP_CONFIG.PORT, () => {
    logger.info(`Server is starting on ${APP_CONFIG.APP_URL}`);
    logger.info(`Admin is starting on ${APP_CONFIG.APP_URL}/admin`);
  })
  .on('error', (e) => logger.error(e));
