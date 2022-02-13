// Clases


//constructor de una clase

class Hero {
    /* private */ //alterEgo: string;
    /* public */ //edad: number;
    /* static */ //nombreReal: number;  //Puedo acceder sin necesidad de crear una instancia
    
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string ) {
        // Se llama cuando se crea una instancia de la clase
        //Aquí podriamos inicializar las propiedades de mis clases
        console.log("Heyy");
        this.alterEgo = alterEgo;
    }
}

/* Hero.nombreReal */  //por lo que es estatic

 const ironman = new Hero('Ironman',20,'Alejandro');

 console.log(ironman);
