// Clases


class Hero {
    /* private */ alterEgo: string;
    /* public */ edad: number;
    /* static */ nombreReal: number;  //Puedo acceder sin necesidad de crear una instancia
}

/* Hero.nombreReal */  //por lo que es estatic

 const ironman = new Hero();

 console.log(ironman);