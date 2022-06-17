import 'dotenv/config';
const { stdout } = process;
const PORT = process.env.PORT || 4000;
import * as http from 'http';

http.createServer((request, response) => {
  response.write('Hello world!!!!!!');
  response.end();
}).listen(PORT);



stdout.write(`\nSERVER IS RUNNIG ON PORT ${PORT}\n\n`);


