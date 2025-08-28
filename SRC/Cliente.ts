export class Cliente {
  nome: string;
  telefone: string;

  /**
   *Método especial que executa apenas
   *uma vez, que é ao criar o objeto
   */
  constructor() {
    this.nome = "";
    this.telefone = "";
  }

  atualizarTelefone(novoTelefone: string) {
    const ehTelefoneValido = this.validarTelefone(novoTelefone);
    if (ehTelefoneValido) {
      this.telefone = novoTelefone;
    } else {
      throw new Error("Telefone Inválido");
    }
  }

  validarTelefone(telefone: string): boolean {
    return telefone.length === 11;
  }

  criarCliente(nome: string, telefone: string): Cliente {
    if (nome.length < 3) {
      throw new Error("Nome inválido.");
    }
    this.nome = nome;
    this.telefone = telefone;
    return this;
  }
}
