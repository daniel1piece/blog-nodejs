import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import categoryRoutes  from './routes/category.routes.js';
import commentRoute from './routes/comment.routes.js';
 
const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api/usuarios', userRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/comentarios', commentRoute);

export default app;
