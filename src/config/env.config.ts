import Joi from 'joi';
import { config } from 'dotenv';

config();

const envVariableSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().positive().required(),
    CORS_URL: Joi.string().required(),
    APP_NAME: Joi.string().required(),
    APP_URL: Joi.string().required(),
    COOKIE_SECRET: Joi.string().required(),
    COOKIE_NAME: Joi.string().required(),
  })
  .unknown();

const { value, error } = envVariableSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const { NODE_ENV, PORT, CORS_URL, APP_NAME, APP_URL, COOKIE_SECRET, COOKIE_NAME } = value;

const APP_CONFIG = { NODE_ENV, PORT, CORS_URL, APP_NAME, APP_URL };

const ADMIN_CONFIG = { COOKIE_SECRET, COOKIE_NAME };

export { APP_CONFIG, ADMIN_CONFIG };
