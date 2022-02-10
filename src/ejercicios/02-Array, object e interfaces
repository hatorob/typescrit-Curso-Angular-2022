//Array

let nombres = ["Juan","Alejandro","Javier"];

//habilidades.push(1); no permite ingresar tipos de datos que no sean string

//Puedo asginar varios tipos de datos en el array

let habilidades: (boolean | string | number)[] = ["bash","counter","Healing"];


// Objectos
// Podemos usar interface que nos ayuda a segurar que un código o objecto luzca como nosotros deseamos
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[],
    puebloNatal?: string; // Opcional gracias al signo ?
}

const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
};
personaje.puebloNatal = "Quibdo";
console.table(personaje);
