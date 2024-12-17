import express from 'express';
import questionRoutes from './routes/questionsRoutes'; // Importação padrão
import simulatedRoutes from './routes/simulatedRoutes'; // Importação padrão

const app = express();

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Rotas
app.use('/questions', questionRoutes);
app.use('/simulated', simulatedRoutes);

export default app;
