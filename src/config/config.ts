import dotenv from'dotenv';

dotenv.config();

const SERVERHOST_NAME = process.env.SERVERHOST_NAME || 'localhost';
const SERVER_PORT = process.env.SERVERPORT || 3000;

const SERVER =  {
    server:SERVERHOST_NAME,
    port:SERVER_PORT
}

export const config ={
    server:SERVER
}
