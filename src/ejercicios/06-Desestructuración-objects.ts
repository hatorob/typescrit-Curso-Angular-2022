// Desestructuración de objectos

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 60,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}


//desestrucutrando el objecto
const { volumen, segundo, cancion, detalles } = reproductor;
//desestructurando el objecto de detalle
const { autor, anio } = detalles;



console.log("El volumen actual de: ", volumen);
console.log("El segundo actual de: ", segundo);
console.log("La cancion actual de: ", cancion);
console.log("el autor es: ", autor);
