import express, { response } from 'express';
import { request } from 'http';
import path from 'path';

const server = express();

server.use(express.static('public'));

server.get('/', (request, response) => {
  return response.sendFile(
    path.join(__dirname, '..', 'public', 'html', 'index.html')
  );
});

server.get('/write', (request, response) => {
  console.log(request);
  return response.sendFile(
    path.join(__dirname, '..', 'public', 'html', 'write.html')
  );
});

server.post('/write', (request, response) => {
  console.log(request.body);
});

//如何查到post的方式

server.listen(8080, () => {
  console.log(`Server is listening on 8080`);
});
