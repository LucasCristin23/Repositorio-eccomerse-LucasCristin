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
const malibu = new bebida("Malibu", 1000, uuidv4(),10, 'home', '/images/malibu.jpg');
const vodkaSkyy = new bebida("Skyy", 900, uuidv4(),40, 'home', '/images/vodkaSkyy.jpg');
const gancia = new bebida ("Gancia", 300, uuidv4(), 30, 'home', '/images/gancia.jpg');
const jagermeister = new bebida("Jagermeister",2500, uuidv4(), 6, 'home', '/images/jager.jpg');
const fernet1994 = new bebida("Fernet 1994", 450, uuidv4(), 15,'home', '/images/plantillaBebidas.jpg');
const vodkaSmirnoff = new bebida("Smirnoff",800, uuidv4(), 30, 'home', '/images/plantillaBebidas.jpg');
const frizze = new bebida("Frizze", 150, uuidv4(),50, 'home', '/images/plantillaBebidas.jpg');
const redLabel = new bebida("Red Label", 2000, uuidv4(), 5, 'home', '/images/plantillaBebidas.jpg');

const bebidas = [];
bebidas.push(fernetBranca,malibu,vodkaSkyy,gancia,jagermeister,fernet1994,vodkaSmirnoff,frizze,redLabel,);

//---Exporto el array de bebidas
export default bebidas; 

//---------Notas
//---Terminar de editar todas las imagenes de las bebidas
//---Cuando tenga mas bebidas agregarle la propiedad categoria