import express from 'express';
import { QuestionController } from '../controllers/questionController';

const router = express.Router();

router.get('/', QuestionController.getAllQuestions);
router.get('/:id', QuestionController.getQuestionById);
router.post('/', QuestionController.createQuestion);

export default router; // Exportação padrão
