import { Emprestimo } from "./Emprestimo";

export class EmprestimoComDesconto extends Emprestimo {
    private percentualDesconto: number;

    // Variáveis auxiliares para saber quando é a última parcela
    private totalParcelas: number;
    private parcelaAtual: number;

    constructor(s: number, n: number, j: number, percentualDesconto: number) {

    // O super irá chamar o construtor da classe base (Emprestimo)
    super(s, n, j);
    this.percentualDesconto = percentualDesconto;

    // Salvando o 'n' para saber qual é o total de parcelas
    this.totalParcelas = n;
    this.parcelaAtual = 1; // Começa na primeira parcela
    }

    // Método getter getPercentualDesconto(): number
    public getPercentualDesconto(): number {
        return this.percentualDesconto;
    }

    // Sobrescrevendo o método da classe pai
    public proximaParcela(): number {

        // Pega o valor da parcela calculada pela classe base (Emprestimo)
        let parcela = super.proximaParcela();

        // Se a parcela for maior que 0, significa que o empréstimo ainda não acabou, FALTA PAGAR
        if (parcela > 0) {

        // VERIFICA SE É A ÚLTIMA PARCELA
        if (this.parcelaAtual === this.totalParcelas) {
        
        // APLICA A FÓRMULA DO DESCONTO EXIGIDA NO ENUNCIADO
        parcela = parcela - (parcela * (this.percentualDesconto / 100));
        }
        // Avança o contador local
        this.parcelaAtual++;
        }
    return parcela;
    }
}