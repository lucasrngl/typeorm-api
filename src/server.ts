import 'dotenv/config';

import 'reflect-metadata';
import express from 'express';
import './data-source';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log('Server running'));
