//Importaciones y exportaciones

import { Producto, calculaISV } from './08-Desestructuracion-argumentos';

const carritoCompra: Producto[] = [
    {
        desc: 'telefono1',
        precio: 100
    },
    {
        desc: 'telefono2',
        precio: 150
    }
];

const [ total, isv] = calculaISV( carritoCompra);

console.log('Total:', total);
console.log('ISV:', isv);