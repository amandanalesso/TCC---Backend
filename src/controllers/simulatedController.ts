import { Request, Response } from 'express';
import { SimulatedService } from '../services/simulatedService';
import { QuestionService } from '../services/questionService';

const simulatedService = new SimulatedService();
const questionService = new QuestionService();

export class SimulatedController {
  static createSimulated(req: Request, res: Response): Response | void {
    try {
      const { titulo, questionIds } = req.body;

      if (!titulo || !Array.isArray(questionIds)) {
        return res.status(400).json({ message: 'Dados inválidos. Verifique título e IDs das questões.' });
      }

      const questions = questionIds
        .map((id: number) => questionService.getQuestionById(id))
        .filter((q) => q !== undefined);

      if (questions.length === 0) {
        return res.status(400).json({ message: 'Nenhuma questão válida encontrada.' });
      }

      const simulated = simulatedService.createSimulated(titulo, questions);
      return res.status(201).json(simulated);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar simulado.', error });
    }
  }

  static calculatePerformance(req: Request, res: Response): Response | void {
    try {
      const simulatedId = Number(req.params.id);
      const { responses } = req.body;

      if (!Array.isArray(responses)) {
        return res.status(400).json({ message: 'Respostas inválidas. Deve ser uma lista.' });
      }

      const simulated = simulatedService.calculatePerformance(simulatedId, responses);

      if (!simulated) {
        return res.status(404).json({ message: 'Simulado não encontrado.' });
      }

      return res.json(simulated);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao calcular desempenho.', error });
    }
  }
}
