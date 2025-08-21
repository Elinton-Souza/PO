export class Cliente {
    nome: string;
    telefone: string;

    /**
    *Método especial que executa apenas
    *uma vez, que é ao criar o objeto
    */
    constructor( nome: string ) {
        this.nome = nome;
        this.telefone = "";
    }
}
