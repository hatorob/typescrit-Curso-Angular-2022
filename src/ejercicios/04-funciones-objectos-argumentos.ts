
// FUnciones con objectos como argumentos

interface PersonajeLOR {   ///son como clases tontas
    nombre: string;
    pv: number;
    mostrarHp: () => void; //definir una funcion en una interfaz
}

function curar( personaje: PersonajeLOR, curarX: number ): void {
    
    personaje.pv += curarX;

    console.log(personaje);
}


const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log("puntos de vida", this.pv);
    }
}


curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();