import express from 'express';
import path from 'path';

const server = express();

server.use(express.static('public'));

server.get('/', (request, response) => {
  return response.sendFile(
    path.join(__dirname, '..', 'public', 'html', 'index.html')
  );
});

server.listen(8080, () => {
  console.log(`Server is listening on 8080`);
});
