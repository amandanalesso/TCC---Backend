import { Router } from 'express';
import { SimulatedController } from '../controllers/simulatedController';

const router = Router();

// Rota para criar um simulado
router.post('/', (req, res) => {
  SimulatedController.createSimulated(req, res);
});

// Rota para calcular o desempenho de um simulado
router.post('/:id/performance', (req, res) => {
  SimulatedController.calculatePerformance(req, res);
});

export default router;
