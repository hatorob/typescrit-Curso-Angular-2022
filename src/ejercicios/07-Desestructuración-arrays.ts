// Desestructuración de arreglos

const dbz: string[] = ['Goku','Vegeta','Trunks'];

//const [ p1, p2, p3] = dbz;

//SI solo requiero la ultima posicion

const [ , ,p3] = dbz;

/* console.log('Personaje 1', p1);
console.log('Personaje 2', p2); */
console.log('Personaje 3', p3);