import express from 'express';
import notesRoutes from './routes/notesRoutes.js';

const app = express();

app.use('/api/notes', notesRoutes);

app.listen(5500, () => {
  console.log('Server started in PORT 5500');
});

// endPoint? - an endpoint is the combination of URL + HTTP method that lets the client iteract with a specific resources
