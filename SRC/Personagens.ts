//importa a classe Util que contem os métodos utilitário, como gerar numeros aleatórios.
import { Util } from "./Util";

export class Personagem {
  //Define a classe Peronagem com várias propriedades que representam características de um personagem de RPG, como nome, classe, raça, nível, arma, mana, vida e poder de ataque.
  nome: string;
  classe: string;
  raca: string;
  nivel: number;
  arma: string;
  manaAtual: number;
  manaMaxima: number;
  vidaAtual: number;
  vidaMaxima: number;
  poderAtaque: number;

  constructor(nome: string) {
    //Recebe o nome do personagem e inicializa todas as outras propriedades com valores padrão(strings vazias ou zero).
    this.nome = nome;
    this.classe = "";
    this.raca = "";
    this.nivel = 0;
    this.arma = "";
    this.manaAtual = 0;
    this.manaMaxima = 0;
    this.vidaAtual = 0;
    this.vidaMaxima = 0;
    this.poderAtaque = 0;
  }
  treinarPoderAtaque(): void {
    //Esse método simula um treino de ataque. Ele gera um valor aleatório entre 5 e 15 usando o método da classe util. Ele aumenta o poder de ataque do personagem somando esse valor e mais 110% do poder de ataque atual.
    const incrementoDoTreino: number = Util.gerarIdAleatorio(5, 15);
    this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
  }

  estarVivo() {
    // retorna "true" se o personagem ainda tem vida (vidaAtual > 0), ou retorna "false" caso contrário.
    return this.vidaAtual > 0;
  }
}
// a classe Personagem representa um personagem de RPG, com aributos básicos, um método para treinar e aumentar o poder de ataque, e outro para verificar se está vivo. Usa a classe Util para gerar valores aleatórios.
