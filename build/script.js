"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Crie uma classe patinete e
apresente os atributos e métodos referentes a esta classe,
 em seguida crie um objeto patinete, defina as instâncias deste
 objeto e apresente as informações deste objeto no console.
*/
var Patinete_1 = require("./Patinete");
var patinete = new Patinete_1.Patinete(true, 40);
console.log("This patinete have wheels? ".concat(patinete.wheels, " and have ").concat(patinete.size));
