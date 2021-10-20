import express, { response } from 'express';
import path from 'path';
import logger from 'morgan';

const server = express();

server.use(logger('dev'));
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (request, response) => {
  return response.sendFile(
    path.join(__dirname, '..', 'public', 'html', 'index.html')
  );
});

server.get('/write', (request, response) => {
  return response.sendFile(
    path.join(__dirname, '..', 'public', 'html', 'write.html')
  );
});

server.post('/write', (request, response) => {
  console.log(request.body);
});

server.listen(8080, () => {
  console.log(`Server is listening on 8080`);
});
