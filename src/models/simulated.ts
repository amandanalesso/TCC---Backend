import { Question } from './question';

export class Simulated {
  constructor(
    public id: number,
    public titulo: string,
    public questoes: Question[],
    public desempenho?: { acertos: number; erros: number } // Estatísticas opcionais
  ) {}
}
