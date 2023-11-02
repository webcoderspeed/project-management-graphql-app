import dotenv from 'dotenv';

dotenv.config({});


export const PORT = process.env.PORT ?? 1337;
export const NODE_ENV = process.env.NODE_ENV;
export const IS_PROD = NODE_ENV === 'production';
export const MONGO_URL = process.env.MONGO_URL;
