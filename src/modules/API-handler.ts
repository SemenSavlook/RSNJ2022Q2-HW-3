import * as http from 'http';

export default function apiHandler(request: http.IncomingMessage, response: http.ServerResponse) {  

  if (String(request.url) === '/favicon.ico') {
    response.end();
    return;
  }
  
  if (request.url === '/api/users' || request.url === '/api/users/') {
    response.write('users responsed');
  } else {
    console.log('no ger');
    response.write('Hello WWWWWWWWWWworld!!!!!!');
  }
  response.end();
}