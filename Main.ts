import { Cliente } from "./Cliente";

const cli: Cliente = new Cliente("Gladimir");
cli.telefone = "1234-5678";
console.table(cli);
//console.table faz o mesmo que o console.log, porém em formato de tabela.

const cli2: Cliente = new Cliente("Edédio");

const cli3: Cliente = cli;
cli3.nome = "Bruna";
console.table(cli);
console.table(cli2);
console.table(cli3);