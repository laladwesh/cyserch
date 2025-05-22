import express from 'express';
import bodyParser from 'body-parser';
import testrouter from './routes/test.routes.js';
import mainRouter from './routes/main.routes.js';
const app = express();
const PORT = 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use('/test' , testrouter)
app.use('/api' , mainRouter)
app.listen(PORT, () => {
  console.log(`XSS Scanner server running at http://localhost:${PORT}`);
});
