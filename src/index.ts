import express from 'express';
import dotenv from 'dotenv';
import router from '@routes/index.route';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome');
});
app.use('/', router);

app.listen(port, () => {
  console.log('http://localhost:', port);
});
