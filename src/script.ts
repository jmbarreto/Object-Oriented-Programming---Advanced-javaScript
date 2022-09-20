/*Crie uma classe patinete e 
apresente os atributos e métodos referentes a esta classe,
 em seguida crie um objeto patinete, defina as instâncias deste 
 objeto e apresente as informações deste objeto no console.
*/
import { Patinete } from "./Patinete";
const patinete = new Patinete (true, 40)

console.log (`This patinete have wheels? ${patinete.wheels} and have ${patinete.size}`)