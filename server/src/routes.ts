import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//---- Routes
import authRoutes from './routes/auth.route';
import toDoRoutes from './routes/to_do.route';

//---- Configs
import connectionMongoDb from './config/mongo';
import './config/init_database';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connectionMongoDb();

app.use(
    cors({
        origin: '*',
    })
);

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(authRoutes);
app.use(toDoRoutes);

app.listen(PORT);
