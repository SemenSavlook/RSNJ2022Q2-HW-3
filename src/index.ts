import 'dotenv/config';
const { stdout } = process;
const PORT = process.env.PORT || 4000;
import * as http from 'http';
import apiHandler from './modules/API-handler';
import { db } from './interfaces/db';

const dataBase: db = [];

http.createServer(apiHandler).listen(PORT);

stdout.write(`\nSERVER IS RUNNIG ON PORT ${PORT}\n\n`);


