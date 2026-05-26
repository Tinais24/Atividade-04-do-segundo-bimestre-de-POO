import { Emprestimo } from './Emprestimo';
import { EmprestimoTA } from './EmprestimoTA';

export class ConjuntoEmprestimos {
  private vEmprestimos: Emprestimo[];
  private corrente: number = -1;

  constructor(quantidade: number) {
    this.vEmprestimos = new Array<Emprestimo>(quantidade);
  }

  public adicionaEmprestimo(emp: Emprestimo): boolean {
    let resultado = false;
    if (this.corrente + 1 < this.vEmprestimos.length) {
      this.corrente++;
      this.vEmprestimos[this.corrente] = emp;
      resultado = true;
    }
    return resultado;
  }

  public proximasParcelas(): boolean {
    let status = false;
    for (let e = 0; e < this.vEmprestimos.length; e++) {
      const p = this.vEmprestimos[e].proximaParcela();
      if (p > 0) {
        status = true;
        const tipo = this.vEmprestimos[e] instanceof EmprestimoTA ? 'EmprestimoTA' : 'Emprestimo';
        console.log(`${tipo} ${e + 1}: ${p}`);
      }
    }
    return status;
  }
}
