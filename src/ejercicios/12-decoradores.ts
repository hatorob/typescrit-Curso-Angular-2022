//Decoradores de clases

// Sirve para expandir o añadir funcionalidades

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@classDecorator
class MiSuperClass {
    public miPropiedad: string = 'ACB123';

    imprimir() {
        console.log("Hola Mundo");
    }
}

console.log( MiSuperClass );

const miClase = new MiSuperClass();

console.log(miClase.miPropiedad);