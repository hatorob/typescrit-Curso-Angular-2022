//Genéricos de tipo generico <t>
function queTipoSoy<T>(argumento: T) {
    return argumento;
}


let soySrting = queTipoSoy("hola Mundo");  
let soyNumber = queTipoSoy(22);  
let soyArray = queTipoSoy([22,1,22,33,"hola"]);  
