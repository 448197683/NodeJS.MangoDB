import express, { response } from 'express';
import path from 'path';
import logger from 'morgan';
import { MongoClient } from 'mongodb';

const server = express();

const uri = `mongodb+srv://WCG:wcg921107@cluster0.gvzha.mongodb.net/test`;
const client = new MongoClient(uri);

server.use(logger('dev'));
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (request, response) => {
  return response
    .status(200)
    .sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'));
});

server.get('/write', (request, response) => {
  return response
    .status(200)
    .sendFile(path.join(__dirname, '..', 'public', 'html', 'write.html'));
});

server.post('/write', (request, response) => {
  console.log(request.body);
});

const connectdDB = async () => {
  try {
    const x = await client.connect();
    const db = client.db('post');
    db.collection('user');
    db.collection('posts');
    const xx = await db.collection('posts').deleteOne({ test: 'moya' });
  } catch (error) {
    console.log(error);
  }
};

server.listen(8080, () => {
  connectdDB();
  console.log(`Server is listening on 8080`);
});
