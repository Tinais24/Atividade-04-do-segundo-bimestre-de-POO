import { Emprestimo } from "./Emprestimo";

export class EmprestimoVeiculo extends Emprestimo {
    private tipo: string;
    private totalParcelas: number;

    constructor(s: number, n: number, j: number, tipo: string) {
        
        // Se o veículo for usado, adiciona 1% aos juros
        let jurosAjustado = (tipo === 'usado') ? j + 1 : j;

        // Chama a classe base com o juros ajustado
        super(s, n, jurosAjustado);
        
        this.tipo = tipo;
        this.totalParcelas = n; // Salva o total de parcelas para usar na regra da taxa administrativa
    }

    // Método Getter
    public getTipo(): string {
        return this.tipo;
    }

    // Sobrescrevendo o método da classe pai
    public proximaParcela(): number {
        
        // Pega o valor da parcela calculada pela classe base
        let parcela = super.proximaParcela();

        // Verifica se ainda existem parcelas a serem pagas
        if (parcela > 0) {
            
            // Se o total de parcelas for maior que 60, vai aplicar 2% de taxa administrativa
            if (this.totalParcelas > 60) {
                parcela = parcela + (parcela * 0.02);
                console.log(`[EmprestimoVeiculo - ${this.tipo}] Valor: R$ ${parcela.toFixed(2)} (Inclui 2% de taxa adm)`);
            } else {
                console.log(`[EmprestimoVeiculo - ${this.tipo}] Valor: R$ ${parcela.toFixed(2)} (Sem taxa adm)`);
            }
        }

        return parcela;
    }
}