import connectToMongo from './db.js';
import express from 'express';
import cors from 'cors';
import Routes from './routes/Routes.js';
import dotenv from 'dotenv';

connectToMongo();
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the Payment API');
});

app.use('/api', Routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;


