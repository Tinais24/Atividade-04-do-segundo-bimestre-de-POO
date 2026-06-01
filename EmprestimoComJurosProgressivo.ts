import { Emprestimo } from "./Emprestimo";

export class EmprestimoComJurosProgressivo extends Emprestimo {

    private acrescimoJuros: number;
    
    // Variáveis auxiliares
    private jurosAtual: number;
    private saldoAtual: number;

    constructor(s: number, n: number, jurosInicial: number, acrescimoJuros: number) {
        
        // Passamos o juros como 0 para o super
        // A classe base vai apenas contar as parcelas para nós.
        super(s, n, 0); 
        
        this.acrescimoJuros = acrescimoJuros;
        
        // Guardando o juros inicial e o saldo inicial nas nossas variáveis
        this.jurosAtual = jurosInicial;
        this.saldoAtual = s; 
    }

    // Método Getter
    public getAcrescimoJuros(): number {
        return this.acrescimoJuros;
    }

    // Sobrescrevendo o método da classe pai
    public proximaParcela(): number {

        // O super verifica se ainda temos parcelas a pagar
        let status = super.proximaParcela();

        // Se status > 0, significa que ainda temos parcelas (o empréstimo não acabou)
        if (status > 0) {
            
            // Guardei o valor do saldo ATUAL para ser o retorno desta parcela
            let retorno = this.saldoAtual;

            // Preparando o saldo para a próxima parcela, aplicando o juros atual
            this.saldoAtual = this.saldoAtual + (this.saldoAtual * (this.jurosAtual / 100));

            // Aumentando o juros para a próxima parcela (Regra de Negócio da Tarefa 3)
            this.jurosAtual = this.jurosAtual + this.acrescimoJuros;

            // Saída no terminal para acompanhar o aumento
            console.log(`[Juros Progressivo] Valor: R$ ${retorno.toFixed(2)} | O juros para a próxima parcela subiu para: ${this.jurosAtual.toFixed(2)}%`);

            return retorno;
        }

        // Se acabaram as parcelas, vai retornar 0
        return 0;
    }
}