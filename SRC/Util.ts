import { fakerPT_BR as faker } from "@faker-js/faker";

//define classe chamada Util que poderá ser usada em outros arquivos.
export class Util {
  //gera id aleatório entre nºs minimo e máximo
  static gerarIdAleatorio(minimo: number, maximo: number): number {
    return minimo + Math.round(Math.random() * (maximo - minimo));
  }
  //gera nome completo aleatório
  static gerarPersona(): string {
    const randomPersona = faker.person.fullName();
    return randomPersona;
  }
  //Gera e-mail aleatório, utilizando o nome gerado anteriormente
  static gerarEmail(nomeDoUsuario: string): string {
    return faker.internet.email({ firstName: nomeDoUsuario });
  }
}
//No laço "for" i parte de zero, e enquanto i for menor que 5(pesonas), i recebe i + i, gerando 5 personagens.
for (let i = 0; i < 5; i++) {
  const nome = Util.gerarPersona();
  const email = Util.gerarEmail(nome);
  console.log(`Personagem: ${nome} | Email: ${email}`);
}
