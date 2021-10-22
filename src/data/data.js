//----Metodo para que funcione el generador de id
const { v4: uuidv4 } = require('uuid');

//---Creacion de la constructora
class bebida{
    constructor(name,precio,id,stock, place, img){
        this.name = name;
        this.precio = precio;
        this.id = id;
        this.stock = stock;
        this.place = place; 
        this.img = img;
    };
};

//----Creacion de los objetos(bebidas)
const fernetBranca = new bebida("Fernet Branca", 700, uuidv4(), 20, 'home', '/images/fernetBranca1.jpg');
const fernet1994 = new bebida("Fernet 1994", 450, uuidv4(), 15,'home', '/images/plantillaBebidas.jpg');
const gancia = new bebida ("Gancia", 300, uuidv4(), 30, 'home', '/images/gancia.jpg');
const vodkaSkyy = new bebida("Skyy", 900, uuidv4(),40, 'home', '/images/vodkaSkyy.jpg');
const vodkaSmirnoff = new bebida("Smirnoff",800, uuidv4(), 30, 'home', '/images/plantillaBebidas.jpg');
const frizze = new bebida("Frizze", 150, uuidv4(),50, 'home', '/images/plantillaBebidas.jpg');
const malibu = new bebida("Malibu", 1000, uuidv4(),10, 'home', '/images/plantillaBebidas.jpg');
const redLabel = new bebida("Red Label", 2000, uuidv4(), 5, 'home', '/images/plantillaBebidas.jpg');
const jagermeister = new bebida("Jagermeister",2500, uuidv4(), 6, 'home', '/images/plantillaBebidas.jpg');

const bebidas = [];
bebidas.push(fernetBranca, fernet1994, gancia, vodkaSkyy, vodkaSmirnoff, frizze, malibu, redLabel,jagermeister);

//---Exporto el array de bebidas
export default bebidas; 

//---------Notas
//---Terminar de editar todas las imagenes de las bebidas
//---Cuando tenga mas bebidas agregarle la propiedad categoria