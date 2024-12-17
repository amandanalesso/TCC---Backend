import { Simulated } from '../models/simulated';
import { Question } from '../models/question';

export class SimulatedService {
  private simulatedList: Simulated[] = [];

  createSimulated(titulo: string, questions: Question[]): Simulated {
    const newSimulated = new Simulated(
      this.simulatedList.length + 1,
      titulo,
      questions
    );
    this.simulatedList.push(newSimulated);
    return newSimulated;
  }

  calculatePerformance(simulatedId: number, responses: string[]): Simulated | undefined {
    const simulated = this.simulatedList.find((s) => s.id === simulatedId);
    if (!simulated) return undefined;

    let acertos = 0;
    simulated.questoes.forEach((q, index) => {
      if (q.respostaCorreta === responses[index]) {
        acertos++;
      }
    });

    simulated.desempenho = {
      acertos,
      erros: simulated.questoes.length - acertos,
    };

    return simulated;
  }
}
