import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config()

console.log(process.env.MONGO_URI)

const app = express();
const PORT = process.env.PORT || 5500;

connectDB();

app.use('/api/notes', notesRoutes);

app.listen(5500, () => {
  console.log('Server started in PORT 5500');
});

// endPoint? - an endpoint is the combination of URL + HTTP method that lets the client iteract with a specific resources


