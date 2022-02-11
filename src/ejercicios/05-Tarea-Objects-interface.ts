
//Tarea sobre objectos e interfaces

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    /* {
        calle: string;
        pais: string;
        ciudad: string;
    }; */
    mostrarDireccion: () => void;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHero: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}


const direccion = superHero.mostrarDireccion();
console.log( direccion );