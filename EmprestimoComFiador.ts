import { Emprestimo } from "./Emprestimo";

export class EmprestimoComFiador extends Emprestimo {
    private temFiador: boolean;

    constructor(s: number, n: number, j: number, temFiador: boolean) {
        
        // Aplica o desconto de 20% (0.80) se tiver fiador, senão aplica a taxa de risco de 5% (1.05)
        let jurosAjustado = temFiador ? (j * 0.80) : (j * 1.05);

        // Chama a classe base com o juros final já calculado
        super(s, n, jurosAjustado);
        
        this.temFiador = temFiador;
    }

    // Método Getter
    public verificarFiador(): boolean {
        return this.temFiador;
    }

    // Sobrescrevendo o método da classe pai
    public proximaParcela(): number {
        
        // Pega o valor da parcela calculada pela classe base
        let parcela = super.proximaParcela();

        // Verifica se ainda existem parcelas a serem pagas
        if (parcela > 0) {
            
            // Saída de terminal para visualizar o impacto do fiador no console
            if (this.temFiador) {
                console.log(`[EmprestimoComFiador] Valor: R$ ${parcela.toFixed(2)} (Com fiador: -20% de juros)`);
            } else {
                console.log(`[EmprestimoComFiador] Valor: R$ ${parcela.toFixed(2)} (Sem fiador: +5% taxa de risco nos juros)`);
            }
        }

        return parcela;
    }
}