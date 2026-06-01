import { Emprestimo } from "./Emprestimo"

export class EmprestimoEducacional extends Emprestimo {
    private periodoIsencao: number;
    private jurosNormal: number;
    
    // Variáveis auxiliares para controlarmos o saldo e a parcela manualmente
    private parcelaAtual: number;
    private saldoAtual: number;

    constructor(s: number, n: number, j: number, periodoIsencao: number) {

        // Passando o 0 como juros para a classe base, a classe base não irá aplica o juros fixo e nós mesmos controlamos quando o juros deve começar a ser aplicado.
        super(s, n, 0);
        
        this.periodoIsencao = periodoIsencao;
        this.jurosNormal = j; // Guardamos o juros real (que virá após a isenção)
        
        this.parcelaAtual = 1;
        this.saldoAtual = s; // O saldo inicial é o valor de 's'
    }

    // Método Getter
    public getPeriodoIsencao(): number {
        return this.periodoIsencao;
    }

    // Sobrescrevendo o método da classe pai
    public proximaParcela(): number {

        // Chamando o super para aproveitar o controle de limite de parcelas da classe pai.
        // Ele vai retornar 's' (se ainda tiver parcela) ou '0' (se o empréstimo acabou).
        let status = super.proximaParcela();
        
        // Se o status for maior que 0, significa que o empréstimo AINDA NÃO ACABOU
        if (status > 0) {
            // Guardei o valor atual para retornar para a tela (pode ser com ou sem juros)
            let retorno = this.saldoAtual;

            // Saída no terminal, vai avisar se esta parcela está isenta ou com juros
            if (this.parcelaAtual <= this.periodoIsencao) {
                console.log(`[EmprestimoEducacional] Parcela ${this.parcelaAtual}: R$ ${retorno.toFixed(2)} (Isenta de Juros)`);
            } else {
                console.log(`[EmprestimoEducacional] Parcela ${this.parcelaAtual}: R$ ${retorno.toFixed(2)} (Aplicado juros de ${this.jurosNormal}%)`);
            }

            // VERIFICAÇÃO DO PERÍODO DE ISENÇÃO:
            // Se a parcela atual já alcançou ou passou do período de isenção, nós preparamos a PRÓXIMA parcela adicionando os juros normais ao saldo.
            if (this.parcelaAtual >= this.periodoIsencao) {
                this.saldoAtual = this.saldoAtual + (this.saldoAtual * (this.jurosNormal / 100));
            }
            
            // Avança o contador local
            this.parcelaAtual++;
            
            // Retorna a parcela calculada
            return retorno;
        }
        
        // Se o empréstimo acabou (status = 0), vai retornar 0
        return 0;
    }
}