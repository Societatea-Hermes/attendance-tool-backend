import express from 'express';
import sessionRoutes from './routes/sessionRoutes';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', sessionRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
export default app;