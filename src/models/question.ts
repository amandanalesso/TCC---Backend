export class Question {
    constructor(
      public id: number,
      public enunciado: string,
      public alternativas: string[],
      public respostaCorreta: string,
      public nivel: 'facil' | 'medio' | 'dificil' // Tipo literal
    ) {}
  }
  