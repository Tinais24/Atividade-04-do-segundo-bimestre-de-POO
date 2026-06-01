import { ConjuntoEmprestimos } from './ConjuntoEmprestimos';
import { Emprestimo } from './Emprestimo';
import { EmprestimoTA } from './EmprestimoTA';

// Importações das tarefas 1, 2, 3, 4, 5 e 6
import { EmprestimoComDesconto } from './EmprestimoComDesconto'; // Tarefa 1
import { EmprestimoEducacional } from './EmprestimoEducacional'; // Tarefa 2
import { EmprestimoComJurosProgressivo } from './EmprestimoComJurosProgressivo'; // Tarefa 3
import { EmprestimoMoradia } from './EmprestimoMoradia'; // Tarefa 4
import { EmprestimoVeiculo } from './EmprestimoVeiculo'; // Tarefa 5
import { EmprestimoComFiador } from './EmprestimoComFiador'; // Tarefa 6

class ConjuntoEmprestimosPoli {
  public static main(): void {
      
    // Tamanho do array aumentado de 11 para 13 para comportar todos os testes
    const ce = new ConjuntoEmprestimos(13);

    // Empréstimos base
    ce.adicionaEmprestimo(new Emprestimo(200, 3, 1));
    ce.adicionaEmprestimo(new EmprestimoTA(500, 4, 2, 15));
    ce.adicionaEmprestimo(new Emprestimo(300, 2, 1));
    ce.adicionaEmprestimo(new Emprestimo(450, 3, 2));
    ce.adicionaEmprestimo(new EmprestimoTA(700, 2, 3, 10));

    // Testes das Tarefas 1 a 4
    ce.adicionaEmprestimo(new EmprestimoComDesconto(1000, 3, 2, 50));
    ce.adicionaEmprestimo(new EmprestimoEducacional(500, 4, 5, 2));
    ce.adicionaEmprestimo(new EmprestimoComJurosProgressivo(500, 3, 2, 1));
    ce.adicionaEmprestimo(new EmprestimoMoradia(1000, 3, 2, true));

    // Testes da Tarefa 5 (Veículo)
    // Cenário 1: Veículo USADO com 3 parcelas (aciona o juros + 1%, sem taxa administrativa)
    ce.adicionaEmprestimo(new EmprestimoVeiculo(1000, 3, 2, 'usado'));

    // Cenário 2: Veículo NOVO com 61 parcelas (aciona a taxa administrativa de 2%)
    ce.adicionaEmprestimo(new EmprestimoVeiculo(2000, 61, 2, 'novo'));

    // Testes da Tarefa 6 (Fiador)
    // Cenário 1: Com fiador (juros reduzido em 20%)
    ce.adicionaEmprestimo(new EmprestimoComFiador(1000, 3, 2, true));

    // Cenário 2: Sem fiador (juros com taxa de risco de +5%)
    ce.adicionaEmprestimo(new EmprestimoComFiador(1000, 3, 2, false));

    let status: boolean;
    do {
      status = ce.proximasParcelas();
    } while (status);
  }
}

// Executa o programa
ConjuntoEmprestimosPoli.main();