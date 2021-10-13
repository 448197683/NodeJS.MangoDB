import express from 'express';

const server = express();

server.get('/', (request, response) => {
  return response.sendFile(__dirname + `/index.html`);
});

server.listen(8080, () => {
  console.log(`Server is listening on 8080`);
});
