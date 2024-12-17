import { Question } from '../models/question';
import rawQuestions from '../database/questions.json'; // Importação do JSON

export class QuestionService {
  private questionList: Question[];

  constructor() {
    // Mapeando o JSON para o tipo Question
    this.questionList = rawQuestions.map(
      (q) =>
        new Question(q.id, q.enunciado, q.alternativas, q.respostaCorreta, q.nivel as 'facil' | 'medio' | 'dificil')
    );
  }

  getAllQuestions(): Question[] {
    return this.questionList;
  }

  getQuestionById(id: number): Question | undefined {
    return this.questionList.find((q) => q.id === id);
  }

  createQuestion(question: Question): void {
    this.questionList.push(question);
  }
}
