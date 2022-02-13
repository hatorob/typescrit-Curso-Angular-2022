//Desestructuración de argumentos

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'Huawei L',
    precio: 350
}


export function calculaISV( productos: Producto[] ): number[] {

    let total = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total ,total * 0.5];
}

const articulos = [ telefono, tablet];

const [total, isv] =  calculaISV(articulos);

console.log('total', total);
console.log('ISV', isv);