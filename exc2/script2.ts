/*
Crie uma classe conta bancária e apresente 
os atributos e métodos referentes a esta classe, em seguida 
crie um objeto conta bancária, defina as instâncias deste objeto e 
apresente as informações deste objeto no console.
*/
import {ContaBancaria } from "./Conta-bancária";
const bankaccount = new ContaBancaria (3000 , 'Nubank')

console.log(`The client have ${bankaccount.saldo} in ${bankaccount.bank}`);
