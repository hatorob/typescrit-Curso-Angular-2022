// Tipado de variables

let nombre = "Alejandro"; // De forma implicita --- infiere el tipo de dato
let nombre2: string = "Juan"; // De fomra explicita --- le indicamos que tipo de variable es
console.log(nombre, nombre2);
//let nombre = 1245; // Genera un error ya que nombre no es de tipo number

let hp : number = 95;
console.log(nombre, hp);

//Tambien podemos asiganrle varios tipos de datos con el simbolo |

let hp2: number | string;
hp2 = 25;
console.log(hp2);
hp2 = "hola";
console.log(hp2);

//boolean

let estaVivo: boolean = true;
console.log(estaVivo);
