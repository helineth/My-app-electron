// db.ts

// db.ts

import Dexie from 'dexie';

class MyDatabase extends Dexie {
  alunos: Dexie.Table<IAluno, number>; // Define a tabela 'alunos'

  constructor() {
    super('MyDatabase'); // Nome do banco de dados local

    // Define a estrutura da tabela 'alunos'
    this.version(1).stores({
      alunos: '++id,nomeAluno,dataNascimento,morada,sexo',
    });

    // Inicializa a tabela 'alunos'
    this.alunos = this.table('alunos');
  }
}

// Interface para representar um aluno
interface IAluno {
  id?: string
  nomeAluno: string
  dataNascimento: string
  morada: string
  sexo: string
}

const db = new MyDatabase();

export default db;

