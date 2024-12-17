import { Request, Response } from 'express';
import { QuestionService } from '../services/questionService';

const questionService = new QuestionService();

export class QuestionController {
  static getAllQuestions(req: Request, res: Response) {
    res.json(questionService.getAllQuestions());
  }

  static getQuestionById(req: Request, res: Response) {
    const question = questionService.getQuestionById(Number(req.params.id));
    if (question) res.json(question);
    else res.status(404).json({ message: 'Questão não encontrada.' });
  }

  static createQuestion(req: Request, res: Response) {
    questionService.createQuestion(req.body);
    res.status(201).json({ message: 'Questão criada com sucesso.' });
  }
}
