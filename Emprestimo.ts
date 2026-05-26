export class Emprestimo {
  private n: number; // (parcelas): número total de parcelas
  private j: number; // (juros): percentual de juros
  private corrente: number;
  private p: number;

  constructor(s: number, n: number, j: number) {
    this.n = n;
    this.j = j;
    this.corrente = 1;
    this.p = s; // (saldo): valor inicial do empréstimo
  }

  // Método: proximaParcela(): calcula próxima parcela com juros
  public proximaParcela(): number {
    let retorno = this.p;
    this.corrente++;
    if (this.corrente <= this.n) {
      this.p = this.p + (this.p * (this.j / 100));
    } else {
      this.p = 0;
    }
    return retorno;
  }
}
