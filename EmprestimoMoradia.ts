import { Emprestimo } from "./Emprestimo";

export class EmprestimoMoradia extends Emprestimo {
    
    private temSeguroMoradia: boolean;

    constructor(s: number, n: number, j: number, temSeguroMoradia: boolean) {
        
        // Aplica a fórmula de desconto nos juros se for acima de 120 parcelas (10 anos)
        let jurosAjustado = (n > 120) ? j * 0.85 : j;

        // Chama a classe base com o juros já devidamente calculado
        super(s, n, jurosAjustado);
        
        this.temSeguroMoradia = temSeguroMoradia;
    }

    // Método Getter
    public temSeguro(): boolean {
        return this.temSeguroMoradia;
    }

    // Sobrescrevendo o método da classe pai
    public proximaParcela(): number {
        
        // Pega o valor da parcela calculada pela classe base
        let parcela = super.proximaParcela();

        // Verifica se ainda existem parcelas a serem pagas
        if (parcela > 0) {
            
            // Se o seguro foi contratado, vai adicionar 10 reais ao valor da parcela
            if (this.temSeguroMoradia) {
                parcela = parcela + 10;
                console.log(`[EmprestimoMoradia] Valor: R$ ${parcela.toFixed(2)} (Inclui R$ 10.00 de seguro)`);
            } else {
                console.log(`[EmprestimoMoradia] Valor: R$ ${parcela.toFixed(2)} (Sem seguro)`);
            }
        }

        return parcela;
    }
}