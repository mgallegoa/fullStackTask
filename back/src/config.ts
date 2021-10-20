import dotenv from 'dotenv';
dotenv.config();

export default {
    SERVER_PORT : process.env.SERVER_PORT || '3000',
}